---
title: "AI 单元测试 Prompt：为函数和组件生成测试用例"
description: "一个适合开发者使用的单元测试 Prompt，帮助你根据函数、组件或业务规则生成测试场景、边界条件和测试代码。"
category: "代码编写"
tags: ["AI Prompt", "单元测试", "AI 编程", "测试", "代码编写"]
pubDate: 2026-08-17
updatedDate: 2026-08-17
author: "ai-productivity"
draft: false
featured: false
seoTitle: "AI 单元测试 Prompt：为函数和组件生成测试用例"
seoDescription: "使用这个 AI 单元测试 Prompt，根据函数、组件、输入输出和业务规则生成测试场景、边界条件、异常用例和测试代码。"
ogImage: "/images/og/default.png"
---

## 适用场景

当你已经写完一个函数、组件或业务逻辑，但还没有补测试时，可以使用这个 Prompt 让 AI 先帮你设计测试场景，再生成测试代码。

适合用于：

- 工具函数测试
- 表单校验测试
- API 处理逻辑测试
- 权限判断测试
- React / Vue / Astro 组件行为测试
- 回归问题补测试

## 使用前需要准备什么

不要只粘贴一段代码就让 AI “写测试”。最好提供：

- 语言和测试框架
- 被测代码
- 预期行为
- 输入输出示例
- 边界条件
- 已知 bug 或回归场景
- 需要 mock 的依赖

## Prompt 正文

```text
你是一名资深测试工程师和代码审查专家。请根据我提供的代码和预期行为，帮我设计单元测试并生成测试代码。

请先输出测试计划，再输出测试代码。

测试计划包含：
1. 被测对象
2. 核心行为
3. 正常用例
4. 边界用例
5. 异常用例
6. 需要 mock 的依赖
7. 不建议测试的内容

测试代码要求：
- 使用我指定的测试框架
- 测试名称清晰说明行为
- 每个测试只验证一个重点
- 覆盖边界条件和错误输入
- 不要为了通过测试而修改业务逻辑
- 如果缺少上下文，请先提问

技术栈：
[语言 / 框架 / 测试工具]

被测代码：
[粘贴代码]

预期行为：
[说明这个函数或组件应该做什么]

已知边界：
[列出空值、异常输入、权限、时间、网络等边界]
```

## 输入示例

```text
技术栈：TypeScript + Vitest

被测代码：
function formatReadingTime(words: number) {
  return Math.max(1, Math.ceil(words / 300));
}

预期行为：
根据文章字数估算阅读分钟数，最低返回 1 分钟。

已知边界：
0 字、1 字、300 字、301 字、负数。
```

## 输出示例

```ts
import { describe, expect, it } from 'vitest';
import { formatReadingTime } from './readingTime';

describe('formatReadingTime', () => {
  it('returns at least 1 minute for empty content', () => {
    expect(formatReadingTime(0)).toBe(1);
  });

  it('returns 1 minute for 300 words', () => {
    expect(formatReadingTime(300)).toBe(1);
  });

  it('rounds up when words exceed one minute', () => {
    expect(formatReadingTime(301)).toBe(2);
  });

  it('returns 1 minute for negative input based on current behavior', () => {
    expect(formatReadingTime(-10)).toBe(1);
  });
});
```

## 使用技巧

建议让 AI 先列测试计划，再写测试代码。这样你可以先检查测试方向是否正确，避免 AI 生成一堆看似完整但没有覆盖关键风险的测试。

## 常见测试维度

| 维度 | 示例 |
| --- | --- |
| 正常输入 | 常规数据能得到预期输出 |
| 空值 | null、undefined、空字符串、空数组 |
| 边界值 | 0、1、最大值、最小值、临界时间 |
| 异常输入 | 非法格式、无权限、缺少字段 |
| 状态变化 | loading、success、error、empty |
| 依赖失败 | API 超时、数据库错误、第三方服务失败 |

## 人工复核重点

- 测试是否符合真实业务规则？
- 是否只是测试实现细节，而不是用户可感知行为？
- 是否遗漏边界条件？
- mock 是否过度？
- 测试名称是否能说明预期行为？
- AI 是否为了让测试通过而改变了需求？

## 延伸阅读

- [AI 代码审查 Prompt：检查代码风险、可读性和测试缺口](/prompts/ai-code-review-prompt/)
- [代码审查 Skill：让 AI 做更稳定的 Code Review](/skills/code-review-skill/)
- [用 AI 做代码审查的完整工作流](/workflows/code-review-with-ai/)
- [AI 编程专题：Claude Code、Cursor、代码审查和部署](/topics/ai-coding/)
