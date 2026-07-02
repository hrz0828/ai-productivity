export const SITE = {
  name: 'ai-productivity',
  url: 'https://sts2hub.com',
  title: 'ai-productivity：AI Prompt、Agent 与 Workflow 实战库',
  description:
    '探索 AI Prompt、Skill、Agent、Tool 与 Workflow，提升文档、PPT、设计、代码和办公自动化效率。',
  author: 'ai-productivity',
  locale: 'zh-CN',
};

export const NAV_ITEMS = [
  { label: 'Prompts', href: '/prompts/' },
  { label: 'Skills', href: '/skills/' },
  { label: 'Agents', href: '/agents/' },
  { label: 'Tools', href: '/tools/' },
  { label: 'Workflows', href: '/workflows/' },
  { label: 'Guides', href: '/guides/' },
  { label: 'Topics', href: '/topics/ai-writing/' },
];

export const TOPIC_ITEMS = [
  { label: 'AI 写作', href: '/topics/ai-writing/' },
  { label: 'AI 编程', href: '/topics/ai-coding/' },
  { label: 'AI 内容站', href: '/topics/ai-content-site/' },
  { label: 'AI PPT', href: '/topics/ai-ppt/' },
  { label: 'AI 自动化', href: '/topics/ai-automation/' },
  { label: 'AI Agent', href: '/topics/ai-agent/' },
];

export const COLLECTION_LABELS = {
  prompts: 'Prompts',
  skills: 'Skills',
  agents: 'Agents',
  tools: 'Tools',
  workflows: 'Workflows',
  guides: 'Guides',
} as const;
