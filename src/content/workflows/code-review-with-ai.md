---
title: "用 AI 做代码审查的完整工作流"
description: "一个适合开发者的 AI Code Review 工作流，从 diff 理解、问题发现、测试建议到修复方案。"
category: "代码工作流"
tags: ["AI Workflow", "代码审查", "AI 编程", "测试"]
pubDate: 2026-07-29
updatedDate: 2026-07-29
author: "ai-productivity"
draft: false
featured: false
seoTitle: "用 AI 做代码审查的完整工作流"
seoDescription: "学习如何用 AI 做代码审查：提供上下文、审查 diff、验证问题、生成测试建议和修复方案。"
ogImage: "/images/og/default.png"
---

## 这个工作流解决什么问题

AI 可以帮助开发者在正式提交前发现一些低级错误、边界条件和测试遗漏，但需要正确使用。

## 工作流总览

1. 准备 diff 和上下文。
2. 让 AI 理解变更目的。
3. 多维度审查代码。
4. 验证每个问题是否真实。
5. 生成测试建议。
6. 根据确认的问题修复。

## Step 1：准备输入

不要只贴一段代码。最好提供：变更目标、相关文件、调用方式、预期行为和测试结果。

## Step 2：审查维度

要求 AI 从正确性、安全性、性能、可维护性和测试覆盖角度审查。

## Step 3：验证问题

对 AI 找到的问题，继续追问“请指出具体代码路径和复现条件”。无法说明的问题可以先降级为建议。

## Step 4：补充测试

让 AI 为真实问题生成测试用例，再由开发者执行和调整。
