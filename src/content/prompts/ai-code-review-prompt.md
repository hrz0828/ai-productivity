---
title: "AI 代码审查 Prompt：从正确性、安全性和可维护性检查代码"
description: "一个适合开发者使用的 AI 代码审查 Prompt，用于检查 Bug、边界条件、安全风险、性能和可维护性。"
category: "代码编写"
tags: ["AI Prompt", "代码审查", "AI 编程", "软件开发"]
pubDate: 2026-07-11
updatedDate: 2026-07-11
author: "ai-productivity"
draft: false
featured: false
seoTitle: "AI 代码审查 Prompt：从正确性、安全性和可维护性检查代码"
seoDescription: "使用这个 AI 代码审查 Prompt，可以从正确性、安全性、性能、可维护性和测试覆盖角度检查代码。"
ogImage: "/images/og/default.png"
---

## 适用场景

适合提交 Pull Request 前自查，也适合在不熟悉代码库时让 AI 辅助理解潜在问题。

## Prompt 正文

```text
你是一名严格但建设性的高级代码审查工程师。请审查以下代码变更。

重点关注：
1. 正确性和边界条件
2. 安全风险
3. 性能问题
4. 可维护性
5. 类型和异常处理
6. 测试覆盖缺口

输出格式：
- 严重问题：必须修复
- 一般问题：建议修复
- 可改进项：长期优化
- 测试建议

请只指出真实存在或高度可能的问题，不要泛泛而谈。

代码变更：
[粘贴 diff 或代码]
```

## 使用技巧

最好提供上下文：语言、框架、相关调用方、预期行为和测试结果。只贴单个函数时，AI 可能无法判断业务边界。
