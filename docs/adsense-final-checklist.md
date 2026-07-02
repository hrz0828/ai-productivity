# Google AdSense Final Pre-Review Checklist

Use this checklist before submitting `https://sts2hub.com` to Google AdSense or after making major changes during review.

## 1. Required files

Check these production URLs:

```text
https://sts2hub.com/ads.txt
https://sts2hub.com/robots.txt
https://sts2hub.com/sitemap-index.xml
```

Expected `ads.txt`:

```text
google.com, pub-3222328785646871, DIRECT, f08c47fec0942fa0
```

Checklist:

- [ ] `ads.txt` is accessible.
- [ ] `robots.txt` allows crawling.
- [ ] sitemap is accessible.
- [ ] Search Console sitemap has been submitted.

## 2. Required trust pages

Check:

```text
https://sts2hub.com/about/
https://sts2hub.com/contact/
https://sts2hub.com/privacy-policy/
https://sts2hub.com/terms/
https://sts2hub.com/editorial-policy/
```

Checklist:

- [ ] About explains what the site is and who it helps.
- [ ] Contact page includes `hanruizhao001@gmail.com`.
- [ ] Privacy Policy mentions Google AdSense, cookies, analytics, third-party links, and contact method.
- [ ] Terms mention AI output limitations, copyright, acceptable use, and external links.
- [ ] Editorial Policy explains AI-assisted content and human review.

## 3. Content quality

Current site target: AI productivity content around Prompt, Skill, Agent, Tool, Workflow, and Guides.

Checklist:

- [ ] At least 30 published articles are live.
- [ ] Articles are not empty templates.
- [ ] Prompt articles include practical usage guidance.
- [ ] Important Prompt articles include output examples.
- [ ] Guide articles include examples, checklists, or templates.
- [ ] Workflow articles explain steps, input, output, and review points.
- [ ] No article contains obvious placeholder text.
- [ ] No article asks users to click ads.
- [ ] No copyrighted images or copied third-party content are used without permission.

## 4. Navigation and user experience

Checklist:

- [ ] Header navigation works on desktop.
- [ ] Mobile navigation works and does not overflow badly.
- [ ] Search page works after Pagefind index is generated.
- [ ] Category pages and collection pages are accessible.
- [ ] Footer includes trust pages.
- [ ] 404 page is available.
- [ ] Homepage explains the site value clearly.
- [ ] Homepage has recommended reading paths.

## 5. AdSense script

AdSense global script is controlled by:

```text
PUBLIC_ADSENSE_CLIENT_ID
```

In Cloudflare Pages, set:

```text
PUBLIC_ADSENSE_CLIENT_ID=ca-pub-3222328785646871
```

Checklist:

- [ ] The environment variable is set only when needed.
- [ ] `ads.txt` is already live before or during review.
- [ ] No fake ad placeholder boxes are visible.
- [ ] No text says “click ads” or encourages ad clicks.

## 6. Policy safety

Checklist:

- [ ] No adult, gambling, illegal, or deceptive content.
- [ ] No malware, phishing, or credential-stealing content.
- [ ] No instructions encouraging ad clicks.
- [ ] No copied content or mass-generated low-value pages.
- [ ] No hidden navigation or misleading buttons.
- [ ] AI and coding content is educational/productivity-focused.

## 7. Technical checks

Run locally before final deploy:

```bash
npm run build
```

Expected:

```text
0 errors
0 warnings
0 hints
```

Checklist:

- [ ] Build succeeds locally.
- [ ] Cloudflare Pages production deployment succeeds.
- [ ] HTTPS works.
- [ ] No obvious console errors on homepage.
- [ ] Core pages load within acceptable time.

## 8. Submission flow

1. Confirm latest production deployment is live.
2. Confirm `ads.txt` is accessible.
3. Confirm Search Console property exists and sitemap is submitted.
4. Log in to Google AdSense.
5. Add site: `sts2hub.com`.
6. Follow the AdSense verification instructions.
7. If AdSense asks for script verification, set `PUBLIC_ADSENSE_CLIENT_ID` in Cloudflare Pages and redeploy.
8. Do not make major structural changes while review is pending unless necessary.

## 9. If AdSense rejects the site

Common fixes:

- Expand thin articles with real examples.
- Improve About, Contact, Privacy Policy, and Terms.
- Remove placeholder text.
- Make navigation clearer.
- Ensure `ads.txt` is live.
- Wait for more pages to be indexed in Search Console.
- Add more original content and resubmit.
