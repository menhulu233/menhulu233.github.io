import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '竹蔓 的博客',
  description: '记录学习心得，分享技术经验',
  lang: 'zh-CN',

  lastUpdated: true,
  cleanUrls: true,

  // 忽略死链接检查
  ignoreDeadLinks: true,

  // markdown 配置
  markdown: {
    lineNumbers: true
  },

  themeConfig: {
    // 顶部导航
    nav: [
      { text: '首页', link: '/' },
      { text: '🤖 AI与Agent开发', link: '/articles/ai-agent/' },
      { text: '☸️ 云原生与DevOps', link: '/articles/cloud-native/' },
      { text: '💻 桌面应用开发', link: '/articles/desktop/' },
      { text: '🚀 项目实战复盘', link: '/notes/projects/' },
      { text: '关于我', link: '/about' }
    ],

    // 侧边栏配置
    sidebar: {
      '/': [],
      '/articles/ai-agent/': [
        {
          text: 'AI与Agent开发',
          collapsible: true,
          collapsed: false,
          items: [
            { text: 'Agent架构设计', link: '/articles/ai-agent/architecture' },
            { text: 'ReAct循环实现', link: '/articles/ai-agent/react-loop' },
            { text: 'Prompt工程', link: '/articles/ai-agent/prompt-engineering' },
            { text: 'LLM工具调用', link: '/articles/ai-agent/tool-calling' },
            { text: 'Reflection机制', link: '/articles/ai-agent/reflection' },
            { text: '本地大模型部署', link: '/articles/ai-agent/local-llm' }
          ]
        }
      ],
      '/articles/cloud-native/': [
        {
          text: '云原生与DevOps',
          collapsible: true,
          collapsed: false,
          items: [
            { text: 'Kubernetes实践', link: '/articles/cloud-native/kubernetes' },
            { text: 'GitOps工作流', link: '/articles/cloud-native/gitops' },
            { text: 'Helm包管理', link: '/articles/cloud-native/helm' },
            { text: 'Tilt与Skaffold', link: '/articles/cloud-native/dev-tools' },
            { text: 'CI/CD最佳实践', link: '/articles/cloud-native/cicd' },
            { text: '监控与可观测性', link: '/articles/cloud-native/monitoring' }
          ]
        }
      ],
      '/articles/desktop/': [
        {
          text: '桌面应用开发',
          collapsible: true,
          collapsed: false,
          items: [
            { text: 'Tauri入门', link: '/articles/desktop/tauri-basics' },
            { text: 'Rust与TS交互', link: '/articles/desktop/rust-ts-interop' },
            { text: '跨平台打包', link: '/articles/desktop/packaging' },
            { text: '性能优化', link: '/articles/desktop/performance' }
          ]
        }
      ],
      '/notes/projects/': [
        {
          text: '项目实战复盘',
          collapsible: true,
          collapsed: false,
          items: [
            { text: 'OpenWork开发日志', link: '/notes/projects/openwork' },
            { text: 'MBTI系统架构', link: '/notes/projects/mbti-system' },
            { text: 'AI助手小程序', link: '/notes/projects/ai-assistant' },
            { text: 'GitHub可视化', link: '/notes/projects/github-visualization' }
          ]
        }
      ]
    },

    // 社交链接
    social: [
      { icon: 'github', link: 'https://github.com/menhulu233' }
    ],

    // 页脚
    footer: {
      message: '学习 · 分享 · 成长',
      copyright: 'Copyright © 2026-present 竹蔓'
    },

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/menhulu233/menhulu233.github.io/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    // 文章导航
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    // 大纲
    outline: {
      label: '页面导航',
      level: [2, 3]
    },

    // 搜索
    search: {
      provider: 'local'
    },

    // 返回顶部
    returnToTopLabel: '返回顶部'
  }
})
