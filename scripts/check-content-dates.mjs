import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const contentDir = new URL('../src/content/', import.meta.url);
const today = new Date();
today.setHours(23, 59, 59, 999);

const dateFields = ['pubDate', 'updatedDate'];
const markdownExtensions = new Set(['.md', '.mdx']);
const failures = [];

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  await Promise.all(entries.map(async (entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(path);
      return;
    }

    if (![...markdownExtensions].some((extension) => entry.name.endsWith(extension))) return;
    await checkFile(path);
  }));
}

async function checkFile(path) {
  const source = await readFile(path, 'utf8');
  const frontmatterMatch = source.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) return;

  for (const field of dateFields) {
    const match = frontmatterMatch[1].match(new RegExp(`^${field}:\\s*(\\d{4}-\\d{2}-\\d{2})`, 'm'));
    if (!match) continue;

    const value = new Date(`${match[1]}T00:00:00`);
    if (value.valueOf() > today.valueOf()) {
      failures.push({ path, field, value: match[1] });
    }
  }
}

await walk(contentDir.pathname);

if (failures.length) {
  console.error('Found future-dated content. Dates must not be later than today.');
  for (const failure of failures) {
    console.error(`- ${failure.path}: ${failure.field}=${failure.value}`);
  }
  process.exit(1);
}

console.log('Content dates OK: no future pubDate or updatedDate values found.');
