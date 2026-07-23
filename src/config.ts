export const SITE = {
  name: 'STS2Hub',
  url: 'https://sts2hub.com',
  title: 'STS2Hub：AI 提示词、Agent 与工作流实战库',
  description:
    '按真实任务查找可复制的 AI 提示词、Agent 配置、自动化工作流和 AI 工具教程，提升写作、PPT、产品、编程与知识管理效率。',
  author: 'STS2Hub',
  locale: 'zh-CN',
  alternateName: 'ai-productivity',
};

export const NAV_ITEMS = [
  { label: 'Prompts', href: '/prompts/' },
  { label: 'Skills', href: '/skills/' },
  { label: 'Agents', href: '/agents/' },
  { label: 'Tools', href: '/tools/' },
  { label: 'Workflows', href: '/workflows/' },
  { label: 'Tasks', href: '/tasks/' },
  { label: 'Submit', href: '/submit-prompt/' },
  { label: 'Guides', href: '/guides/' },
  { label: 'Topics', href: '/topics/ai-writing/' },
];

export const TOPIC_ITEMS = [
  { label: 'AI 写作', href: '/topics/ai-writing/' },
  { label: 'AI 产品经理', href: '/topics/ai-product-manager/' },
  { label: 'AI 编程', href: '/topics/ai-coding/' },
  { label: 'AI 知识管理', href: '/topics/ai-knowledge-management/' },
  { label: 'AI 设计评审', href: '/topics/ai-design-review/' },
  { label: 'AI PPT', href: '/topics/ai-ppt/' },
  { label: 'AI 会议效率', href: '/topics/ai-meeting-efficiency/' },
  { label: 'AI 自动化', href: '/topics/ai-automation/' },
  { label: 'AI Agent', href: '/topics/ai-agent/' },
  { label: '多模态 AI', href: '/topics/ai-multimodal/' },
  { label: 'AI 内容站', href: '/topics/ai-content-site/' },
];

export const COLLECTION_LABELS = {
  prompts: 'Prompts',
  skills: 'Skills',
  agents: 'Agents',
  tools: 'Tools',
  workflows: 'Workflows',
  guides: 'Guides',
} as const;
