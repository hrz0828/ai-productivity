---
title: "GitHub Actions 内容站自动化：检查构建和内容质量"
description: "介绍如何用 GitHub Actions 为 Astro 内容站增加构建检查、链接检查和内容发布流程。"
category: "GitHub"
tags: ["GitHub Actions", "自动化", "Astro", "内容站"]
pubDate: 2026-07-24
updatedDate: 2026-07-24
author: "ai-productivity"
draft: false
featured: false
seoTitle: "GitHub Actions 内容站自动化：检查构建和内容质量"
seoDescription: "了解如何用 GitHub Actions 自动运行 Astro 构建检查，减少内容站发布时的错误。"
ogImage: "/images/og/default.png"
---

## 为什么需要自动化

内容站长期更新后，最常见的问题是链接失效、Frontmatter 写错、构建失败和页面遗漏。GitHub Actions 可以在合并前提前发现问题。

## 推荐检查项

- 安装依赖
- 运行 `npm run build`
- 检查 Markdown 格式
- 检查链接可用性
- 检查 sitemap 是否生成

## 示例流程

```yaml
name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - run: npm ci
      - run: npm run build
```

## 使用建议

先从构建检查开始，不要一开始加入太多复杂规则。等内容规模变大后，再增加链接检查和内容规范检查。
