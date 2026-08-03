import type { APIRoute } from 'astro';
import { SITE, TOPIC_ITEMS } from '../config';
import {
  collectionNames,
  getAllPublishedEntries,
  getEntryPermalink,
  isIndexable,
} from '../utils/content';

const corePages = [
  '/',
  '/about/',
  '/contact/',
  '/privacy-policy/',
  '/terms/',
  '/editorial-policy/',
  '/resources/',
  '/tasks/',
  '/topics/',
];

const sectionPages = collectionNames.map((collection) => `/${collection}/`);

function escapeXml(value: string) {
  return value.replace(/[<>&'\"]/g, (character) => ({
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    "'": '&apos;',
    '"': '&quot;',
  })[character] ?? character);
}

export const GET: APIRoute = async () => {
  const entries = await getAllPublishedEntries();
  const indexableEntries = entries.filter((entry) => isIndexable(entry.data));

  const staticPaths = [...corePages, ...sectionPages, ...TOPIC_ITEMS.map(({ href }) => href)];
  const staticUrls: Array<{ pathname: string; lastmod?: Date }> = staticPaths.map((pathname) => ({ pathname }));
  const contentUrls: Array<{ pathname: string; lastmod?: Date }> = indexableEntries.map((entry) => ({
    pathname: getEntryPermalink(entry.collection, entry.id),
    lastmod: entry.data.updatedDate ?? entry.data.pubDate,
  }));
  const urls = [...staticUrls, ...contentUrls];

  const body = urls.map(({ pathname, lastmod }) => {
    const location = escapeXml(new URL(pathname, SITE.url).href);
    const modified = lastmod ? `\n    <lastmod>${lastmod.toISOString().slice(0, 10)}</lastmod>` : '';
    return `  <url>\n    <loc>${location}</loc>${modified}\n  </url>`;
  }).join('\n');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
