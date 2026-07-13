# Content maintenance

This site is a static Astro content library. Use this checklist when adding or updating content.

## Dates

Do not publish content with a future `pubDate` or `updatedDate`.

Why this matters:

- Future dates make the site look unreliable.
- Homepage, listing pages, RSS, sitemap, and search all depend on content metadata.
- The build now blocks future-dated content before deploy.

Run the date guard before opening a PR:

```bash
npm run check:content-dates
```

The local full build also runs the same guard:

```bash
npm run build
```

CI runs the guard explicitly, then runs the raw site build with:

```bash
npm run build:site
```

Implementation:

- Guard script: `scripts/check-content-dates.mjs`
- Build script: `package.json`
- CI workflow: `.github/workflows/ci.yml`
- Runtime published-content filter: `src/utils/content.ts`

## Homepage curation

When editing `src/pages/index.astro`, avoid repeatedly surfacing the same article in adjacent modules.

Current safeguards:

- Hero stats use real content counts.
- The homepage shows direct collection links with counts.
- `latest` excludes entries already used by featured modules, case paths, and reading paths.
- The final Explore section excludes content already used earlier on the homepage.

Before adding a new homepage section, check for repeated links in nearby sections and prefer a different content type or topic cluster.

## Search experience

Search is powered by Pagefind and generated at build time.

Search page behavior lives in `src/pages/search.astro`:

- URL query support: `/search/?q=周报`
- Type filter support: `/search/?q=周报&type=prompts`
- Search result type labels: Prompt, Skill, Agent, Tool, Workflow, Guide
- Empty-state recommendations: popular keywords and task shortcuts

When adding a new top-level content collection, update:

- Search type filters in `src/pages/search.astro`
- Collection labels in `src/config.ts`
- Published-content helpers in `src/utils/content.ts`

## Quick Prompt copy UX

Homepage Prompt copy behavior lives in `src/components/QuickPromptShowcase.astro`.

Expected behavior:

- Users can preview without leaving the homepage.
- Users can copy a prompt directly.
- Copy success shows inline feedback and a toast.
- Clipboard failure opens the preview and tells users to copy manually.

When changing this component, run `npm run build` and manually test:

1. Open prompt preview.
2. Copy from a card.
3. Copy from the modal.
4. Close modal with Escape and backdrop click.
