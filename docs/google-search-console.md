# Google Search Console Setup

This guide is for `https://sts2hub.com`.

## 1. Add property

Go to Google Search Console:

```text
https://search.google.com/search-console
```

Recommended property type:

```text
Domain property: sts2hub.com
```

Use Domain property if you can verify DNS in Cloudflare. It covers:

```text
https://sts2hub.com
http://sts2hub.com
https://www.sts2hub.com
http://www.sts2hub.com
```

If DNS verification is inconvenient, use URL-prefix property:

```text
https://sts2hub.com/
```

## 2. Verify ownership

### Option A: DNS verification, recommended

1. In Search Console, choose Domain property.
2. Copy the TXT record provided by Google.
3. Go to Cloudflare DNS.
4. Add TXT record to `sts2hub.com`.
5. Wait for DNS propagation.
6. Click Verify in Search Console.

### Option B: HTML tag verification

If using URL-prefix property, Google may provide a meta tag. Add it only if needed.

A future implementation can add an env var such as:

```text
PUBLIC_GOOGLE_SITE_VERIFICATION=...
```

and render it in the SEO component. DNS verification is cleaner and does not require code changes.

## 3. Submit sitemap

After the site is deployed, submit:

```text
https://sts2hub.com/sitemap-index.xml
```

Steps:

1. Open Search Console property.
2. Go to Sitemaps.
3. Enter `sitemap-index.xml`.
4. Click Submit.
5. Confirm status becomes Success.

## 4. Request indexing for core pages

Use URL Inspection for these pages:

```text
https://sts2hub.com/
https://sts2hub.com/prompts/ai-weekly-report-prompt/
https://sts2hub.com/guides/ai-productivity-guide/
https://sts2hub.com/guides/high-quality-prompt-guide/
https://sts2hub.com/workflows/write-prd-with-ai/
https://sts2hub.com/tools/claude-code-guide/
```

For each page:

1. Paste URL in URL Inspection.
2. Wait for Google to inspect.
3. Click Request Indexing if available.

## 5. Check robots and indexing rules

Current strategy:

- Article pages: indexable.
- Collection pages: indexable.
- Category pages: indexable.
- Tag pages: `noindex,follow`.

Tag pages intentionally use noindex to avoid thin or duplicate index pages.

## 6. Monitor reports

Check these reports after a few days:

### Pages

Look for:

- Not found 404
- Crawled but not indexed
- Duplicate without user-selected canonical
- Alternate page with proper canonical
- Blocked by robots.txt

### Sitemaps

Confirm submitted sitemap has discovered URLs.

### Search results

Monitor:

- Queries
- Pages
- Impressions
- Clicks
- CTR
- Average position

## 7. First 2-week review

After 2 weeks, review:

- Which pages are indexed.
- Which queries produce impressions.
- Whether guide pages get more impressions than prompt pages.
- Whether category pages should remain indexable.
- Which articles need better titles, descriptions, or content depth.

## 8. Common issues

### Sitemap not found

Check:

```text
https://sts2hub.com/sitemap-index.xml
```

If it fails, verify Cloudflare Pages build command is `npm run build` and output directory is `dist`.

### ads.txt not found

Check:

```text
https://sts2hub.com/ads.txt
```

It should return:

```text
google.com, pub-3222328785646871, DIRECT, f08c47fec0942fa0
```

### Pages crawled but not indexed

This is common for new sites. Improve internal links, content depth, and request indexing for key pages.
