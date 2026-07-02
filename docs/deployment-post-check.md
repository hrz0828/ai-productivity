# Deployment Post-Check Checklist

Use this checklist after every production deployment to `https://sts2hub.com`.

## 1. Core pages

Open these pages in a browser:

```text
https://sts2hub.com/
https://sts2hub.com/prompts/
https://sts2hub.com/skills/
https://sts2hub.com/agents/
https://sts2hub.com/tools/
https://sts2hub.com/workflows/
https://sts2hub.com/guides/
https://sts2hub.com/resources/
https://sts2hub.com/search/
```

Check:

- [ ] Pages load without server errors.
- [ ] Header navigation works.
- [ ] Mobile navigation works.
- [ ] Homepage buttons are readable.
- [ ] Search page loads and returns results after Pagefind index is generated.

## 2. Trust and policy pages

Open:

```text
https://sts2hub.com/about/
https://sts2hub.com/contact/
https://sts2hub.com/privacy-policy/
https://sts2hub.com/terms/
https://sts2hub.com/editorial-policy/
```

Check:

- [ ] Contact email is `hanruizhao001@gmail.com`.
- [ ] Privacy Policy mentions Cookie, analytics, and Google AdSense.
- [ ] Terms mention AI output limitations and copyright.
- [ ] Editorial Policy explains AI-assisted content and human review.

## 3. SEO files

Open:

```text
https://sts2hub.com/sitemap-index.xml
https://sts2hub.com/robots.txt
https://sts2hub.com/rss.xml
https://sts2hub.com/ads.txt
```

Expected `robots.txt` includes:

```text
Sitemap: https://sts2hub.com/sitemap-index.xml
```

Expected `ads.txt` content:

```text
google.com, pub-3222328785646871, DIRECT, f08c47fec0942fa0
```

Check:

- [ ] `sitemap-index.xml` loads.
- [ ] `robots.txt` loads and references sitemap.
- [ ] `rss.xml` loads.
- [ ] `ads.txt` loads exactly as expected.

## 4. Article pages

Spot-check these article pages:

```text
https://sts2hub.com/prompts/ai-weekly-report-prompt/
https://sts2hub.com/workflows/write-prd-with-ai/
https://sts2hub.com/guides/high-quality-prompt-guide/
https://sts2hub.com/tools/cloudflare-pages-deploy-guide/
```

Check:

- [ ] Title and description render correctly.
- [ ] Table of contents works on desktop.
- [ ] Tags are clickable.
- [ ] Related articles render where available.
- [ ] Code blocks are readable on mobile.

## 5. Browser checks

Use Chrome DevTools or similar:

- [ ] No obvious console errors on homepage.
- [ ] No layout overflow on mobile viewport.
- [ ] No broken assets.
- [ ] No blocked `ads.txt`, `robots.txt`, or sitemap files.

## 6. Cloudflare Pages checks

In Cloudflare Pages:

- [ ] Latest deployment is successful.
- [ ] Production branch is correct.
- [ ] Custom domain `sts2hub.com` is active.
- [ ] HTTPS is active.
- [ ] Environment variables are set only if needed:
  - `PUBLIC_GA_ID`
  - `PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN`
  - `PUBLIC_ADSENSE_CLIENT_ID`

## 7. After deployment actions

- [ ] Submit sitemap in Google Search Console if this is the first deployment.
- [ ] Request indexing for homepage and several cornerstone pages.
- [ ] Check AdSense site status after ads.txt is live.
- [ ] Monitor Cloudflare analytics and Search Console for crawl issues.
