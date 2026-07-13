# ai-productivity

AI productivity content site built with Astro, MDX, Tailwind CSS, Pagefind, and Cloudflare Pages.

- Site name: `ai-productivity`
- Domain: `https://sts2hub.com`
- Content focus: AI Prompt, Skill, Agent, Tool, Workflow, and practical AI productivity guides

## Development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Content structure

Articles live in `src/content/`:

```text
src/content/prompts/
src/content/skills/
src/content/agents/
src/content/tools/
src/content/workflows/
src/content/guides/
```

Content schema is defined in:

```text
src/content.config.ts
```

## Cloudflare Pages

Recommended Cloudflare Pages configuration:

```text
Framework preset: Astro
Build command: npm run build
Build output directory: dist
Node.js version: 22
Production branch: main
```

## Environment variables

Copy `.env.example` to `.env` for local development if needed.

```bash
cp .env.example .env
```

### Analytics

Optional analytics environment variables:

```text
PUBLIC_GA_ID=G-XXXXXXXXXX
PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN=your-cloudflare-token
```

Google Analytics and Cloudflare Web Analytics are loaded by:

```text
src/components/Analytics.astro
```

Only set one or both variables in Cloudflare Pages if you want tracking enabled.

### Google AdSense

`ads.txt` is already configured in:

```text
public/ads.txt
```

Current ads.txt content:

```text
google.com, pub-3222328785646871, DIRECT, f08c47fec0942fa0
```

After AdSense approval or when Google asks for the site verification script, set this environment variable in Cloudflare Pages:

```text
PUBLIC_ADSENSE_CLIENT_ID=ca-pub-3222328785646871
```

The global AdSense script is loaded by:

```text
src/components/AdsenseScript.astro
```

Ad blocks are only rendered when both `PUBLIC_ADSENSE_CLIENT_ID` and an ad slot are provided to `AdsenseBlock.astro`. This avoids showing placeholder ads before approval.

## Continuous integration

GitHub Actions workflow:

```text
.github/workflows/ci.yml
```

It runs on pushes and pull requests to `main`:

```text
npm ci
npm run check:content-dates
npm run build:site
```

For local development, `npm run build` runs the content date guard and then `npm run build:site`.

## Content maintenance

Content publishing and homepage/search UX safeguards are documented in:

```text
docs/content-maintenance.md
```

Use this checklist when adding content, changing homepage curation, or updating search/Prompt-copy behavior.

## Important URLs after deploy

Check these after deployment:

```text
https://sts2hub.com/
https://sts2hub.com/sitemap-index.xml
https://sts2hub.com/robots.txt
https://sts2hub.com/ads.txt
https://sts2hub.com/rss.xml
https://sts2hub.com/privacy-policy/
https://sts2hub.com/terms/
https://sts2hub.com/editorial-policy/
```

## Notes

- Search is powered by Pagefind and generated during `npm run build`.
- The site is statically generated and suitable for Cloudflare Pages.
- Contact email: `hanruizhao001@gmail.com`.
