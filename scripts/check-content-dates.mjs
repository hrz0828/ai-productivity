import { readdir, readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';

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

    if (!markdownExtensions.has(extname(entry.name))) return;
    await checkFile(path);
  }));
}

function parseDate(path, frontmatter, field) {
  const match = frontmatter.match(new RegExp(`^${field}:\\s*(.*?)\\s*$`, 'm'));
  if (!match) return undefined;

  const rawValue = match[1].trim().replace(/^(['"])(.*)\1$/, '$2');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(rawValue)) {
    failures.push(`${path}: ${field} has invalid date format (${match[1].trim()})`);
    return undefined;
  }

  const date = new Date(`${rawValue}T00:00:00Z`);
  if (Number.isNaN(date.valueOf()) || date.toISOString().slice(0, 10) !== rawValue) {
    failures.push(`${path}: ${field} is not a valid calendar date (${rawValue})`);
    return undefined;
  }

  return { date, rawValue };
}

async function checkFile(path) {
  const source = await readFile(path, 'utf8');
  const frontmatterMatch = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!frontmatterMatch) return;

  const dates = Object.fromEntries(dateFields.map((field) => [field, parseDate(path, frontmatterMatch[1], field)]));

  for (const field of dateFields) {
    const parsed = dates[field];
    if (parsed && parsed.date.valueOf() > today.valueOf()) {
      failures.push(`${path}: ${field}=${parsed.rawValue} is later than today`);
    }
  }

  if (dates.pubDate && dates.updatedDate && dates.updatedDate.date < dates.pubDate.date) {
    failures.push(`${path}: updatedDate=${dates.updatedDate.rawValue} is earlier than pubDate=${dates.pubDate.rawValue}`);
  }
}

await walk(contentDir.pathname);

if (failures.length) {
  console.error('Content date check failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('Content dates OK: dates are valid, not future-dated, and updatedDate is not earlier than pubDate.');
