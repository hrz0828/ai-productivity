import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const distDir = new URL('../dist/', import.meta.url).pathname;
const requiredFiles = ['index.html', 'robots.txt', 'sitemap-index.xml'];
const requiredMeta = [
  { label: 'title', pattern: /<title>[^<]+<\/title>/i },
  { label: 'description', pattern: /<meta\s+name="description"\s+content="[^"]+"\s*\/?\s*>/i },
  { label: 'robots', pattern: /<meta\s+name="robots"\s+content="[^"]+"\s*\/?\s*>/i },
  { label: 'canonical', pattern: /<link\s+rel="canonical"\s+href="https:\/\/sts2hub\.com\/[^"]*"\s*\/?\s*>/i },
  { label: 'og:title', pattern: /<meta\s+property="og:title"\s+content="[^"]+"\s*\/?\s*>/i },
  { label: 'og:description', pattern: /<meta\s+property="og:description"\s+content="[^"]+"\s*\/?\s*>/i },
  { label: 'og:url', pattern: /<meta\s+property="og:url"\s+content="https:\/\/sts2hub\.com\/[^"]*"\s*\/?\s*>/i },
  { label: 'json-ld', pattern: /<script\s+type="application\/ld\+json">/i },
];
const samplePages = [
  'index.html',
  'prompts/index.html',
  'workflows/index.html',
  'tools/index.html',
  'guides/index.html',
  'prompts/ai-weekly-report-prompt/index.html',
  'workflows/seo-article-with-ai/index.html',
  'tools/claude-code-guide/index.html',
];

const failures = [];

for (const file of requiredFiles) {
  if (!existsSync(join(distDir, file))) failures.push(`Missing dist/${file}`);
}

for (const page of samplePages) {
  const path = join(distDir, page);
  if (!existsSync(path)) {
    failures.push(`Missing dist/${page}`);
    continue;
  }

  const html = readFileSync(path, 'utf8');
  for (const meta of requiredMeta) {
    if (!meta.pattern.test(html)) failures.push(`Missing ${meta.label} in dist/${page}`);
  }
}

const robotsPath = join(distDir, 'robots.txt');
if (existsSync(robotsPath)) {
  const robots = readFileSync(robotsPath, 'utf8');
  if (!/User-agent:\s*\*/i.test(robots)) failures.push('robots.txt is missing User-agent: *');
  if (!/Sitemap:\s*https:\/\/sts2hub\.com\/sitemap-index\.xml/i.test(robots)) failures.push('robots.txt is missing sitemap URL');
}

if (failures.length > 0) {
  console.error('SEO check failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`SEO check passed for ${samplePages.length} sample pages and ${requiredFiles.length} required files.`);
