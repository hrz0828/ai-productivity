import { getCollection, render, type CollectionEntry } from 'astro:content';
import {
  getAllPublishedEntries,
  getRelatedAcrossCollections,
  isPublished,
  type AnyContentEntry,
  type CollectionName,
} from './content';

export async function getArticleStaticPaths<C extends CollectionName>(collection: C) {
  const entries = await getCollection(collection, ({ data }) => isPublished(data));
  return entries.map((entry) => ({ params: { slug: entry.id }, props: { entry } }));
}

export async function getArticlePageData<C extends CollectionName>(
  entry: CollectionEntry<C>,
  collection: C,
) {
  const { Content, headings } = await render(entry);
  const entries = await getAllPublishedEntries();
  const related = getRelatedAcrossCollections(
    { ...entry, collection } as AnyContentEntry,
    entries,
  );

  return { Content, headings, related };
}
