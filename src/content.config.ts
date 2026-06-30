import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const commonSchema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.string(),
  tags: z.array(z.string()).default([]),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  author: z.string().default('ai-productivity'),
  draft: z.boolean().default(false),
  featured: z.boolean().default(false),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  ogImage: z.string().default('/images/og/default.png'),
});

function contentCollection(base: string) {
  return defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base }),
    schema: commonSchema,
  });
}

export const collections = {
  prompts: contentCollection('./src/content/prompts'),
  skills: contentCollection('./src/content/skills'),
  agents: contentCollection('./src/content/agents'),
  tools: contentCollection('./src/content/tools'),
  workflows: contentCollection('./src/content/workflows'),
  guides: contentCollection('./src/content/guides'),
};
