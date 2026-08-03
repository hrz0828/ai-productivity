import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE_URL = 'https://sts2hub.com';
const distDir = fileURLToPath(new URL('../dist/', import.meta.url));
const sitemapPath = join(distDir, 'sitemap.xml');
const robotsPath = join(distDir, 'robots.txt');
const specialNoindexPages = new Set(['/404/', '/search/', '/tags/', '/categories/', '/analytics-plan/']);
const failures = [];

function walkHtml(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return walkHtml(path);
    return entry.name.endsWith('.html') ? [path] : [];
  });
}

function decodeEntities(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function getAttribute(tag, name) {
  const match = tag.match(new RegExp(`\\s${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i'));
  return match ? decodeEntities(match[1] ?? match[2] ?? match[3]) : undefined;
}

function findTag(html, tagName, attributes) {
  const tags = html.match(new RegExp(`<${tagName}\\b[^>]*>`, 'gi')) ?? [];
  return tags.find((tag) => Object.entries(attributes).every(([name, value]) =>
    getAttribute(tag, name)?.toLowerCase() === value.toLowerCase()));
}

function routeFromHtml(path) {
  const outputPath = relative(distDir, path).split(sep).join('/');
  if (outputPath === 'index.html') return '/';
  if (outputPath === '404.html') return '/404/';
  if (outputPath.endsWith('/index.html')) return `/${outputPath.slice(0, -'index.html'.length)}`;
  return `/${outputPath}`;
}

function pathFromRoute(pathname) {
  let decoded;
  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    return undefined;
  }
  if (decoded === '/404/' || decoded === '/404.html') return join(distDir, '404.html');
  const relativePath = decoded.replace(/^\/+/, '');
  if (!relativePath) return join(distDir, 'index.html');
  if (relativePath.endsWith('/')) return join(distDir, relativePath, 'index.html');
  const directPath = join(distDir, relativePath);
  if (existsSync(directPath)) return directPath;
  return join(distDir, relativePath, 'index.html');
}

function isNoindex(robots) {
  return robots?.split(',').some((directive) => directive.trim().toLowerCase() === 'noindex') ?? false;
}

if (!existsSync(distDir)) {
  console.error('SEO check failed: dist directory does not exist. Run the site build first.');
  process.exit(1);
}

for (const required of [join(distDir, 'index.html'), sitemapPath, robotsPath]) {
  if (!existsSync(required)) failures.push(`Missing dist/${relative(distDir, required)}`);
}

const sitemapUrls = new Set();
if (existsSync(sitemapPath)) {
  const sitemap = readFileSync(sitemapPath, 'utf8');
  if (!/<urlset\b[^>]*xmlns=["']http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9["']/i.test(sitemap)) {
    failures.push('sitemap.xml is not a valid sitemap urlset');
  }
  for (const match of sitemap.matchAll(/<loc>([\s\S]*?)<\/loc>/gi)) {
    const rawUrl = decodeEntities(match[1].trim());
    let url;
    try {
      url = new URL(rawUrl);
    } catch {
      failures.push(`Invalid sitemap URL: ${rawUrl}`);
      continue;
    }
    if (url.origin !== SITE_URL) failures.push(`Sitemap URL uses unexpected origin: ${rawUrl}`);
    if (url.search || url.hash) failures.push(`Sitemap URL must not contain query or fragment: ${rawUrl}`);
    sitemapUrls.add(url.pathname);
    const target = pathFromRoute(url.pathname);
    if (!target || !existsSync(target)) failures.push(`Sitemap target does not exist: ${rawUrl}`);
  }
  if (sitemapUrls.size === 0) failures.push('sitemap.xml contains no URLs');
}

if (existsSync(robotsPath)) {
  const robots = readFileSync(robotsPath, 'utf8');
  if (!/^User-agent:\s*\*\s*$/im.test(robots)) failures.push('robots.txt is missing User-agent: *');
  if (!/^Sitemap:\s*https:\/\/sts2hub\.com\/sitemap\.xml\s*$/im.test(robots)) {
    failures.push('robots.txt is missing the canonical sitemap.xml URL');
  }
}

const htmlFiles = walkHtml(distDir);
const pageIndexing = new Map();
for (const path of htmlFiles) {
  const route = routeFromHtml(path);
  const label = `dist/${relative(distDir, path).split(sep).join('/')}`;
  const html = readFileSync(path, 'utf8');

  if (!/<title>\s*[^<]+\s*<\/title>/i.test(html)) failures.push(`Missing title in ${label}`);

  const descriptionTag = findTag(html, 'meta', { name: 'description' });
  if (!descriptionTag || !getAttribute(descriptionTag, 'content')?.trim()) failures.push(`Missing description in ${label}`);

  const robotsTag = findTag(html, 'meta', { name: 'robots' });
  const robots = robotsTag && getAttribute(robotsTag, 'content');
  if (!robots?.trim()) failures.push(`Missing robots metadata in ${label}`);

  const canonicalTag = findTag(html, 'link', { rel: 'canonical' });
  const canonical = canonicalTag && getAttribute(canonicalTag, 'href');
  if (!canonical?.startsWith(`${SITE_URL}/`) && canonical !== `${SITE_URL}/`) failures.push(`Missing or invalid canonical in ${label}`);

  for (const property of ['og:title', 'og:description', 'og:url']) {
    const tag = findTag(html, 'meta', { property });
    if (!tag || !getAttribute(tag, 'content')?.trim()) failures.push(`Missing ${property} in ${label}`);
  }

  const noindex = isNoindex(robots);
  pageIndexing.set(route, { noindex, label });
  if (noindex && sitemapUrls.has(route)) failures.push(`Noindex page is present in sitemap: ${route}`);
  const mustBeNoindex = specialNoindexPages.has(route) || route.startsWith('/tags/') || route.startsWith('/categories/');
  if (mustBeNoindex && !noindex) failures.push(`Special page must be noindex: ${route}`);

  const anchorTags = html.match(/<a\b[^>]*>/gi) ?? [];
  for (const anchor of anchorTags) {
    const href = getAttribute(anchor, 'href');
    if (!href || href.includes('${') || href.startsWith('#') || /^(?:https?:|mailto:|tel:|javascript:|data:)/i.test(href)) continue;
    let url;
    try {
      url = new URL(href, `${SITE_URL}${route}`);
    } catch {
      failures.push(`Invalid internal link in ${label}: ${href}`);
      continue;
    }
    if (url.origin !== SITE_URL) continue;
    const target = pathFromRoute(url.pathname);
    if (!target || !existsSync(target)) failures.push(`Broken internal link in ${label}: ${href}`);
  }
}

for (const route of sitemapUrls) {
  const page = pageIndexing.get(route);
  if (page?.noindex) failures.push(`Sitemap target has noindex metadata: ${route}`);
}

if (failures.length > 0) {
  console.error('SEO check failed:');
  for (const failure of [...new Set(failures)]) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`SEO check passed for ${htmlFiles.length} HTML pages and ${sitemapUrls.size} sitemap URLs.`);
