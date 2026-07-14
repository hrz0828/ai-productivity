---
title: "GitHub Actions 内容站自动化：检查构建和内容质量"
description: "介绍如何用 GitHub Actions 为 Astro 内容站增加构建检查、内容日期检查和内容发布流程。"
category: "GitHub"
tags: ["GitHub Actions", "自动化", "Astro", "内容站"]
pubDate: 2026-05-22
updatedDate: 2026-07-09
author: "ai-productivity"
draft: false
featured: false
seoTitle: "GitHub Actions 内容站自动化：检查构建和内容质量"
seoDescription: "了解如何用 GitHub Actions 自动运行 Astro 构建检查、内容日期检查和发布前质量检查，减少内容站发布错误。"
ogImage: "/images/og/default.png"
---

内容站一开始只有几篇文章时，很多问题靠人工检查就能发现。但当文章数量增长到几十篇、上百篇后，Frontmatter 写错、日期填到未来、动态路由构建失败、Pagefind 索引缺失、sitemap 未生成等问题都会变得更常见。GitHub Actions 的价值不是炫技，而是在内容发布前自动挡住明显错误。

这篇文章以 Astro 内容站为例，说明如何用 GitHub Actions 做基础构建检查，并逐步增加内容质量检查。它适合个人站长、内容运营和开发者，尤其适合使用 GitHub + Cloudflare Pages 部署静态站的人。

## 为什么需要自动化

内容站长期更新后，最常见的问题是链接失效、Frontmatter 写错、构建失败和页面遗漏。GitHub Actions 可以在合并前提前发现问题。

典型风险包括：

- `pubDate` 写成未来日期，导致网站看起来像“穿越发布”
- Markdown frontmatter 字段缺失，触发 Astro schema 报错
- 新增页面链接路径错误，构建后出现死链
- 搜索索引没有生成，搜索页看起来可用但实际无结果
- 内容更新后没有生成 sitemap 或 RSS
- 本地能跑，CI 环境因为 Node 版本不同而失败

这些问题单独看都不复杂，但一旦发布到线上，会影响用户信任，也会影响搜索引擎和广告审核对网站质量的判断。

## 推荐检查项

第一阶段建议只做必要检查：

- 安装依赖
- 检查内容日期
- 运行 Astro check
- 运行 Astro build
- 生成 Pagefind 搜索索引
- 检查 sitemap 是否生成

第二阶段再考虑：

- 检查 Markdown 格式
- 检查内部链接可用性
- 检查图片 alt 文本
- 检查文章长度或低价值内容风险
- 检查重复标题和重复 canonical

不要一开始加入太多复杂规则。规则越多，越容易让内容更新变成“修 CI 游戏”。先让 CI 稳定挡住最严重的错误，再逐步加规则。

## 示例流程

```yaml
name: CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    name: Build Astro site
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Check content dates
        run: npm run check:content-dates

      - name: Build site
        run: npm run build:site
```

这里把内容日期检查和构建拆成两个步骤，是为了让 CI 日志更清楚。如果日期错误，失败会停在 `Check content dates`，不需要在长长的构建日志里找原因。

## 内容日期检查为什么重要

内容站很容易因为批量生成或复制模板，把发布时间写到未来。未来日期不一定会让构建失败，但会让读者怀疑网站是否真实维护，也可能影响列表页、RSS 和 sitemap 的可信度。

一个简单的检查脚本可以扫描 `src/content/**/*.md`，发现未来 `pubDate` 或 `updatedDate` 后直接失败。本站使用的脚本位于：

```text
scripts/check-content-dates.mjs
```

本地可以运行：

```bash
npm run check:content-dates
```

完整本地构建则使用：

```bash
npm run build
```

CI 中可以先运行日期检查，再运行原始构建：

```bash
npm run check:content-dates
npm run build:site
```

## package.json 脚本设计

推荐把“带质量检查的本地构建”和“原始站点构建”拆开：

```json
{
  "scripts": {
    "check:content-dates": "node scripts/check-content-dates.mjs",
    "build:site": "astro check && astro build && pagefind --site dist",
    "build": "npm run check:content-dates && npm run build:site"
  }
}
```

这样做有两个好处：

1. 本地开发者只需要记住 `npm run build`。
2. CI 可以单独显示每个检查步骤，避免重复执行同一个检查。

## 使用案例：为内容站添加构建检查

### 场景

你每次新增文章都担心 Frontmatter 写错或构建失败，希望 GitHub 在提交后自动检查。

### 示例流程

当你 push 到 GitHub 后，Actions 自动执行：安装依赖、检查内容日期、运行 Astro 构建、生成 Pagefind 索引、报告构建结果。

### 价值

这可以在部署前发现 Markdown 格式错误、内容 schema 错误、动态路由错误、TypeScript 问题和未来日期问题。

对于准备接入 AdSense 的内容站，这类检查还有一个额外价值：它能减少“看起来没人维护”的低级错误，例如未来发布日期、空白页面、搜索不可用和构建产物缺失。

## 常见失败案例

### 失败 1：CI 没有锁定 Node 版本

Astro 和相关工具链对 Node 版本有要求。如果本地 Node 版本和 GitHub Actions 不一致，可能出现本地能构建、CI 失败的情况。

建议在 workflow 中明确：

```yaml
with:
  node-version: 22
  cache: npm
```

### 失败 2：只跑 build，不跑内容质量检查

`astro build` 可以发现 schema 和编译问题，但不一定会发现“内容质量”问题。例如未来日期、文章过短、标题重复等，需要额外脚本检查。

### 失败 3：CI 报错但没有维护说明

如果团队里不止一个人更新内容，建议在 README 或 `docs/content-maintenance.md` 里说明每个检查失败时该怎么处理。否则新成员可能只知道“CI 红了”，不知道为什么。

## 后续扩展

构建检查稳定后，可以继续增加：

- 链接检查：检查站内链接是否 404
- 内容长度检查：找出低于指定字数的文章
- 标题重复检查：避免多个页面 SEO title 过于相似
- 图片检查：确保图片存在且有 alt 文本
- sitemap 检查：确认核心页面进入 sitemap
- Pagefind 检查：确认搜索索引生成成功

但这些检查不建议一次性全部加入。每新增一个检查，都要保证它能给编辑者提供清晰的错误信息，而不是只让发布流程更痛苦。

## 发布前检查清单

- GitHub Actions 是否通过？
- `npm run check:content-dates` 是否通过？
- `npm run build:site` 是否通过？
- 新文章是否有合理的 `title`、`description`、`category`、`tags`？
- 文章是否有足够解释，而不是只有模板或链接？
- 文章是否链接到相关专题或下一步阅读？
- 是否需要更新 sitemap 后提交 Search Console？

自动化不能替代编辑判断，但可以让编辑判断不被低级错误打断。一个稳定的 CI 流程，是内容站长期维护和商业化审核的基础设施。
