import { getCollection, type CollectionEntry } from 'astro:content';
import { COLLECTION_LABELS } from '../config';

const now = new Date();

function isPublished(data: Pick<AnyContentEntry['data'], 'draft' | 'pubDate'>) {
  return !data.draft && data.pubDate.valueOf() <= now.valueOf();
}

export type CollectionName = keyof typeof COLLECTION_LABELS;
export type AnyContentEntry = CollectionEntry<CollectionName>;

export const collectionNames = Object.keys(COLLECTION_LABELS) as CollectionName[];

export function getEntryPermalink(collection: CollectionName, slug: string) {
  return `/${collection}/${slug}/`;
}

export async function getPublishedCollection(collection: CollectionName) {
  const entries = await getCollection(collection, ({ data }) => isPublished(data));
  return entries.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getAllPublishedEntries() {
  const groups = await Promise.all(
    collectionNames.map(async (collection) => {
      const entries = await getPublishedCollection(collection);
      return entries.map((entry) => ({ ...entry, collection }));
    }),
  );

  return groups.flat().sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function getRelatedEntries<T extends AnyContentEntry>(entry: T, entries: T[], limit = 3) {
  const tags = new Set(entry.data.tags);
  return entries
    .filter((candidate) => candidate.id !== entry.id)
    .map((candidate) => {
      const score = candidate.data.tags.filter((tag) => tags.has(tag)).length +
        (candidate.data.category === entry.data.category ? 2 : 0);
      return { candidate, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ candidate }) => candidate);
}

export function getRelatedAcrossCollections(entry: AnyContentEntry, entries: AnyContentEntry[], limit = 3) {
  const tags = new Set(entry.data.tags);
  return entries
    .filter((candidate) => !(candidate.id === entry.id && candidate.collection === entry.collection))
    .map((candidate) => {
      const tagScore = candidate.data.tags.filter((tag) => tags.has(tag)).length;
      const categoryScore = candidate.data.category === entry.data.category ? 2 : 0;
      const typeDiversityScore = candidate.collection !== entry.collection ? 1 : 0;
      return { candidate, score: tagScore + categoryScore + typeDiversityScore };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || b.candidate.data.pubDate.valueOf() - a.candidate.data.pubDate.valueOf())
    .slice(0, limit)
    .map(({ candidate }) => candidate);
}
