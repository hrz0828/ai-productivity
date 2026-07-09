---
title: "Google Search Console 入门：内容站如何提交 sitemap"
description: "介绍 AI 内容站如何使用 Google Search Console 验证站点、提交 sitemap、请求索引和监控搜索表现。"
category: "SEO 工具"
tags: ["Google Search Console", "SEO", "Sitemap", "内容站"]
pubDate: 2026-08-15
updatedDate: 2026-08-15
author: "ai-productivity"
draft: false
featured: false
seoTitle: "Google Search Console 入门：内容站如何提交 sitemap"
seoDescription: "学习如何为内容站配置 Google Search Console，完成站点验证、sitemap 提交、URL 检查和搜索表现监控。"
ogImage: "/images/og/default.png"
---

## 工具简介

Google Search Console 是内容站必须配置的搜索工具。它可以帮助你了解页面是否被抓取、是否被索引，以及哪些关键词带来曝光和点击。

## 基本步骤

1. 添加站点资源。
2. 完成 DNS 或 URL 前缀验证。
3. 提交 sitemap。
4. 使用 URL Inspection 请求核心页面索引。
5. 监控 Pages 和 Search Results 报告。

## 详细配置步骤

### Step 1：选择资源类型

新站建议优先使用 Domain 资源，因为它可以覆盖 `http`、`https`、`www` 和非 `www` 的所有版本。如果你暂时不能改 DNS，也可以先用 URL 前缀资源。

### Step 2：完成站点验证

常见验证方式包括：

- DNS TXT 记录验证
- HTML 文件验证
- HTML meta 标签验证
- Google Analytics 验证

对 Cloudflare Pages 或其他静态站来说，DNS 验证通常最稳定。

### Step 3：提交 sitemap

提交 sitemap 后，Google 会更容易发现新页面，但不代表马上收录。新站可以先提交 sitemap，再手动检查首页和核心文章 URL。

### Step 4：检查核心 URL

使用 URL Inspection 检查：

- 页面是否可抓取
- 是否允许索引
- canonical 是否正确
- Google 看到的页面是否正常

### Step 5：持续观察表现

上线后重点看：

- Pages：哪些页面未索引
- Search Results：哪些关键词带来曝光
- Sitemap：是否读取成功
- Experience：移动端和页面体验问题

## sitemap 示例

对于 Astro 内容站，sitemap 通常是：

```text
https://sts2hub.com/sitemap-index.xml
```

## 使用案例

新站上线后，可以先请求首页、核心 Guide、代表性 Prompt 和 Workflow 页面索引。不要一次只盯收入，前期更重要的是看 Google 是否能发现和理解你的内容。

## 常见问题

### Crawled but not indexed 是什么？

表示 Google 已抓取页面，但暂时没有收录。新站常见，需要继续提升内容质量、内链和外部信号。

### sitemap 提交后会立刻收录吗？

不会。sitemap 只是帮助 Google 发现页面，不保证收录和排名。

### 新站应该先提交哪些页面？

建议先检查首页、核心专题页、代表性 Guide、Prompt、Workflow 和 About / Contact 等信任页面。

### URL Inspection 显示未编入索引怎么办？

先确认页面不是 noindex，canonical 正确，内容不是空模板。然后补充内容厚度、增加内链，并等待 Google 重新抓取。

## 上线后检查清单

- sitemap 是否提交成功？
- 首页是否可被 URL Inspection 正常抓取？
- robots.txt 是否允许抓取？
- canonical 是否指向正确 URL？
- 重要页面是否有足够内链？
- 页面是否移动端可读？
- Search Results 是否开始出现曝光？

## 延伸阅读

- [Google AdSense 接入教程：内容站审核前要准备什么](/tools/google-adsense-setup-guide/)
- [Cloudflare Pages 部署 Astro 内容站教程](/tools/cloudflare-pages-deploy-guide/)
- [AI 内容站专题](/topics/ai-content-site/)
