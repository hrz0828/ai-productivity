# Indexing Strategy

## Current decision

Primary pages should be indexable:

- Homepage
- Collection pages: `/prompts/`, `/skills/`, `/agents/`, `/tools/`, `/workflows/`, `/guides/`
- Article pages
- Category pages
- Trust pages: About, Contact, Privacy Policy, Terms, Editorial Policy

Tag pages are set to:

```html
<meta name="robots" content="noindex,follow">
```

This applies to:

```text
/tags/
/tags/[tag]/
```

## Why tag pages are noindex

The site currently generates many tag pages, and many of them have overlapping content. Letting all tag pages be indexed could create thin or duplicate discovery pages.

`noindex,follow` keeps them useful for readers and internal link discovery while reducing low-value indexable pages.

## Why category pages remain indexable

Category pages are fewer, clearer, and closer to user intent, such as:

- 文档写作
- PPT 制作
- 代码编写
- AI 生产力

They can act as useful topic hubs.

## Future review

After Search Console has enough data, review:

1. Whether category pages receive impressions or clicks.
2. Whether any tag pages deserve conversion into curated topic pages.
3. Whether some tags should be merged or removed.
