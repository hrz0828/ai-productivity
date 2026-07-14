# AdSense content remediation plan

This document tracks low-value-content risks and the content upgrades completed before an AdSense re-review.

## Why this exists

A site focused on AI prompts, tools, agents, and workflows can be mistaken for a thin resource directory if pages only contain short descriptions, code blocks, or outbound links. The goal is to make key pages read like practical tutorials with human editing, examples, failure cases, and clear boundaries.

## Completed remediation passes

### Trust, policy, and topic pages

Expanded high-impact trust and content pages:

- `src/pages/about.astro` — added maintainer background, editorial workflow, AI-assisted writing disclosure, review/update process, and compliance links.
- `src/pages/terms.astro` — expanded AI content, user submission, third-party tool, and advertising terms.
- `src/pages/privacy-policy.astro` — expanded submission/feedback data, analytics, cookies, AdSense, and data safety sections.
- `src/pages/topics/ai-writing.astro` — added static editorial guide and reading path.
- `src/pages/topics/ai-automation.astro` — added automation suitability guide and reading path.
- `src/pages/topics/ai-content-site.astro` — added content-site quality guide and reading path.

### Priority A: homepage/high-intent pages

Expanded the initial high-intent content pages:

- `src/content/prompts/ai-weekly-report-prompt.md`
- `src/content/prompts/ai-prd-prompt.md`
- `src/content/workflows/ai-content-calendar-workflow.md`
- `src/content/tools/github-actions-content-workflow.md`
- `src/content/prompts/ai-resume-optimization-prompt.md`
- `src/content/prompts/ai-okr-prompt.md`
- `src/content/prompts/ai-email-writing-prompt.md`
- `src/content/workflows/competitive-analysis-with-ai.md`
- `src/content/workflows/code-review-with-ai.md`

Note: `src/content/prompts/ai-image-prompt-template.md` remains a candidate for a later visual-example pass.

### Priority B: workflow pages

Expanded workflow pages that previously looked thin:

- `src/content/workflows/wechat-article-workflow.md`
- `src/content/workflows/design-review-with-ai.md`
- `src/content/workflows/launch-content-site-with-ai.md`
- `src/content/workflows/xiaohongshu-topic-workflow.md`
- `src/content/workflows/personal-knowledge-base-with-ai.md`
- `src/content/workflows/seo-article-with-ai.md`
- `src/content/workflows/meeting-to-action-items.md`
- `src/content/workflows/create-ppt-with-ai.md`
- `src/content/workflows/project-retrospective-with-ai.md`
- `src/content/workflows/article-to-short-video-workflow.md`

### Priority C: agent pages

Expanded agent pages with role definitions, inputs, workflows, examples, failure cases, guardrails, and review checklists:

- `src/content/agents/ai-operations-planner-agent.md`
- `src/content/agents/ai-learning-coach-agent.md`
- `src/content/agents/ai-seo-editor-agent.md`
- `src/content/agents/ai-research-assistant-agent.md`
- `src/content/agents/ai-ppt-planner-agent.md`
- `src/content/agents/ai-code-review-agent.md`
- `src/content/agents/ai-product-manager-agent.md`

### Priority D: tool/guide pages

Expanded tool and guide pages to support E-E-A-T and practical usefulness:

- `src/content/tools/cloudflare-pages-deploy-guide.md`
- `src/content/tools/voice-agent-beginner-guide.md`
- `src/content/tools/google-search-console-guide.md`
- `src/content/tools/chatgpt-guide.md`
- `src/content/tools/ai-video-generation-tools-guide.md`
- `src/content/tools/cursor-ai-coding-guide.md`
- `src/content/tools/n8n-ai-automation-guide.md`
- `src/content/guides/ai-writing-automation-guide.md`
- `src/content/guides/design-ai-agent-guide.md`
- `src/content/guides/ai-tools-selection-guide.md`
- `src/content/guides/ai-coding-assistant-guide.md`
- `src/content/guides/prompt-skill-agent-workflow.md`

## QA completed

- `npm run build` passed after each major remediation pass.
- Content date validation passed: no future `pubDate` or `updatedDate` values.
- `astro check` passed with 0 errors and 0 warnings.
- Static build and sitemap generation completed successfully.
- Pagefind index generation completed successfully.
- Internal link check against built `dist` pages passed: no broken internal content links found in the checked source files.
- Final additional-pass check covered 133 unique internal links across 117 source files with no broken internal content links found.

## Expansion pattern used

Most upgraded pages now include several of these sections:

- Why this task matters in real work
- When to use / when not to use
- Inputs to prepare
- Step-by-step workflow
- Example input and output
- Common failure output
- How to revise the prompt/workflow
- Human review checklist
- Privacy/security/compliance notes
- Related next reads

## Additional candidate pass completed

After the main Priority A-D passes, an additional pass expanded pages that still benefited from deeper examples, visual workflow guidance, safety notes, or review checklists:

- `src/content/prompts/ai-image-prompt-template.md` — added visual prompt breakdown, example output, iteration guidance, and copyright/portrait checks.
- `src/content/tools/google-adsense-setup-guide.md` — added AI content-site readiness guidance, rejection handling, ads.txt/script checks, and review checklist.
- `src/content/tools/figma-ai-guide.md` — added content-site homepage design brief case, design-review prompt, failure cases, and state/CTA/mobile checks.
- `src/content/tools/gemini-guide.md` — added multimodal screenshot analysis prompt, research case, evidence-source boundaries, and failure cases.
- `src/content/tools/notion-ai-workflow-guide.md` — added database-field guidance, meeting-to-task example, failure cases, and review checklist.
- `src/content/tools/obsidian-ai-guide.md` — added vault structure, output-driven review, source/link/tag checks, and failure cases.
- `src/content/guides/ai-productivity-guide.md` — added stronger workflow path from Prompt to Skill/Agent/Workflow and an article-to-video example.
- `src/content/guides/gemini-chatgpt-claude-comparison.md` — added developer-oriented tool combinations and clearer selection mistakes.
- `src/content/guides/high-quality-prompt-guide.md` — added more before/after examples, reusable templates, and diagnostic guidance.
- `src/content/guides/midjourney-prompt-beginner-guide.md` — added English prompt template, extra visual examples, iteration advice, and commercial-use checks.

## Remaining candidates for later passes

Most high-priority low-depth candidates have now received at least one expansion pass. Later improvements should focus less on adding text and more on original assets and freshness:

- Add screenshots or diagrams to deployment, Search Console, AdSense, Figma, Notion, Obsidian, and AI video pages where practical.
- Keep `src/content/guides/gemini-chatgpt-claude-comparison.md` and tool pages updated as model capabilities, pricing, and UI flows change.
- Review visual-prompt pages after generating actual example images, and add before/after examples if available.
- Use Search Console query data to decide which pages need title, FAQ, or internal-link adjustments.

## Pages to consider hiding later

Do not immediately draft pages only because they are short. First check whether they are linked from homepage, topic pages, sitemap, or high-value internal paths.

Consider setting `draft: true` only when a page meets multiple conditions:

- Under ~400 rough count
- No unique example or original guidance
- Not part of a current topic cluster
- Not needed for navigation or internal linking
- Can be merged into a stronger guide

## Recommended next steps before AdSense re-review

1. Manually skim the most important public pages for repetition, readability, and obvious AI-style phrasing.
2. Confirm Search Console has no major indexing or crawl errors.
3. Confirm key pages are indexed or at least crawlable.
4. Review pages with impressions but low CTR and adjust titles/descriptions only when query intent is relevant.
5. Add screenshots or original visuals to tool pages where practical.
6. Avoid publishing large batches of new thin content before re-review.
7. Wait for updated pages to be crawled before resubmitting AdSense.
