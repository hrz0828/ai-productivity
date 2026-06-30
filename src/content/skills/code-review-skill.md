---
title: "代码审查 Skill：建立 AI 辅助 Code Review 流程"
description: "一个面向开发者的代码审查 Skill，用于让 AI 按正确性、安全性、性能和可维护性审查代码。"
category: "代码编写"
tags: ["AI Skill", "Code Review", "AI 编程", "测试"]
pubDate: 2026-07-15
updatedDate: 2026-07-15
author: "ai-productivity"
draft: false
featured: false
seoTitle: "代码审查 Skill：建立 AI 辅助 Code Review 流程"
seoDescription: "学习如何设计 AI 代码审查 Skill，让 AI 从 Bug、安全、性能、可维护性和测试缺口角度审查代码。"
ogImage: "/images/og/default.png"
---

## 这个 Skill 解决什么问题

AI 代码审查 Skill 可以在提交代码前发现常见问题，帮助开发者建立更稳定的自查流程。

## 输入要求

- 代码 diff
- 相关文件上下文
- 预期行为
- 测试结果
- 关注重点

## 执行步骤

1. 理解代码意图。
2. 检查正确性和边界条件。
3. 检查安全和权限问题。
4. 检查性能和可维护性。
5. 输出按严重程度排序的问题。

## 输出格式

```markdown
## 必须修复
## 建议修复
## 可优化项
## 测试建议
```

## 注意事项

不要把 AI 审查当作唯一质量门禁。复杂业务逻辑仍需要熟悉上下文的工程师复核。
