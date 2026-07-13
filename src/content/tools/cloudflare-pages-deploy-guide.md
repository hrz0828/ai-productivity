---
title: "Cloudflare Pages 部署 Astro 内容站教程"
description: "介绍如何把 Astro 内容站通过 GitHub 自动部署到 Cloudflare Pages，并绑定自定义域名。"
category: "Cloudflare"
tags: ["Cloudflare Pages", "Astro", "部署", "GitHub"]
pubDate: 2026-05-21
updatedDate: 2026-05-21
author: "ai-productivity"
draft: false
featured: false
seoTitle: "Cloudflare Pages 部署 Astro 内容站教程"
seoDescription: "学习如何配置 Cloudflare Pages 部署 Astro 项目，包括构建命令、输出目录、域名绑定和环境变量。"
ogImage: "/images/og/default.png"
---

## 工具简介

Cloudflare Pages 是适合静态站点和前端项目的部署平台。对于 Astro 内容站，它可以直接连接 GitHub 仓库并自动构建发布。

## 基础配置

推荐配置如下：

```text
Framework preset: Astro
Build command: npm run build
Build output directory: dist
Node version: 20 或 22
```

## 部署流程

1. 将项目推送到 GitHub。
2. 在 Cloudflare Pages 新建项目。
3. 选择 GitHub 仓库。
4. 填写构建命令和输出目录。
5. 首次构建成功后绑定域名。
6. 检查 sitemap、robots 和核心页面。

## 常见问题

### 构建失败怎么办？

先在本地运行 `npm run build`，确认不是项目本身错误。再检查 Node 版本、环境变量和输出目录。

### 域名需要 www 吗？

建议选择一个主域名，例如 `https://sts2hub.com`，再把 `www` 跳转到主域名。

## 使用案例：部署 ai-productivity 到 Cloudflare Pages

### 场景

你已经完成 Astro 内容站，希望通过 GitHub 自动部署到 `sts2hub.com`。

### 配置示例

```text
Build command: npm run build
Build output directory: dist
Node.js version: 22
Production branch: main
```

### 验证清单

部署后访问以下路径：

- `/`
- `/sitemap-index.xml`
- `/robots.txt`
- `/ads.txt`
- `/rss.xml`
- `/privacy-policy/`

### 常见问题

如果 Cloudflare 构建失败，先在本地运行 `npm run build`。如果本地成功，再检查 Cloudflare 的 Node 版本和环境变量。

