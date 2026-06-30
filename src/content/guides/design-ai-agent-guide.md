---
title: "如何设计一个可复用 AI Agent：角色、目标和工作流程"
description: "介绍 AI Agent 设计方法，包括角色定义、目标、输入输出、工具边界、检查点和失败处理。"
category: "AI Agent"
tags: ["AI 指南", "AI Agent", "智能体", "工作流"]
pubDate: 2026-08-06
updatedDate: 2026-08-06
author: "ai-productivity"
draft: false
featured: false
seoTitle: "如何设计一个可复用 AI Agent：角色、目标和工作流程"
seoDescription: "学习如何设计可复用 AI Agent，包括角色、目标、输入输出、工具、流程、约束和检查机制。"
ogImage: "/images/og/default.png"
---

## Agent 和 Prompt 的区别

Prompt 更像一次性指令，Agent 更像一个有角色、目标、流程和工具边界的协作者。设计 Agent 的关键是让它在多步骤任务中保持稳定。

## Agent 设计要素

- 角色定义
- 工作目标
- 输入要求
- 输出格式
- 可用工具
- 工作步骤
- 约束条件
- 检查点
- 失败处理方式

## 角色定义

角色不只是“你是专家”。更好的写法是说明它擅长什么、如何判断质量、遇到信息不足时如何处理。

## 工作流程

Agent 应该先理解任务，再拆解步骤，最后执行和检查。不要让它直接跳到最终答案。

## 工具边界

如果 Agent 可以调用工具，需要明确哪些动作允许自动执行，哪些动作必须等待用户确认。

## 失败处理

优秀 Agent 会承认信息不足，并提出澄清问题，而不是继续编造。
