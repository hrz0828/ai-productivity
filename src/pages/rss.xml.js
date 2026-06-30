import rss from '@astrojs/rss';
import { SITE } from '../config';
import { getAllPublishedEntries } from '../utils/content';

export async function GET(context) {
  const entries = await getAllPublishedEntries();

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.pubDate,
      link: `/${entry.collection}/${entry.id}/`,
      categories: [entry.data.category, ...entry.data.tags],
    })),
  });
}
