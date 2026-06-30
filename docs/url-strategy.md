# URL Strategy

## Current decision

Article URLs use English slugs and should remain the primary SEO landing pages.

Examples:

```text
/prompts/ai-weekly-report-prompt/
/workflows/write-prd-with-ai/
/tools/cloudflare-pages-deploy-guide/
/guides/high-quality-prompt-guide/
```

Category and tag pages currently use Chinese labels directly in the URL, for example:

```text
/categories/文档写作/
/tags/AI Prompt/
```

This is acceptable for the current MVP because:

1. Article pages, not category/tag pages, are the main SEO targets.
2. Chinese category/tag URLs are readable to Chinese users.
3. Astro generates these static paths successfully.
4. Changing them now would require maintaining a mapping layer and redirects before the site has meaningful search history.

## Operational rule

Keep article slugs in English kebab-case.

Use Chinese names freely for visible `category` and `tags`, but avoid treating category/tag pages as primary SEO targets.

## Future improvement

If category/tag pages start receiving meaningful traffic, migrate to explicit slug maps such as:

```ts
const CATEGORY_SLUGS = {
  '文档写作': 'writing',
  'PPT 制作': 'ppt',
  '代码编写': 'coding',
  'AI 生产力': 'ai-productivity',
};
```

Then add redirects from old Chinese URLs to new English URLs.

## AdSense and SEO note

Google can crawl encoded Unicode URLs, but English article slugs are easier to share, inspect, and maintain. For now, the URL strategy is:

- English URLs for all articles and core pages.
- Chinese URLs allowed for secondary discovery pages.
- Revisit after Search Console has enough data.
