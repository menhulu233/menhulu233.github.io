import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Menhulu 的博客',
  description: '记录学习心得，分享技术经验',
  lang: 'zh-CN',

  lastUpdated: true,
  cleanUrls: true,

  // markdown 配置
  markdown: {
    lineNumbers: true
  },

  themeConfig: {
    // 顶部导航
    nav: [
      { text: '首页', link: '/' },
      {
        text: '技术文章',
        items: [
          { text: '前端开发', link: '/articles/frontend/' },
          { text: '后端开发', link: '/articles/backend/' },
          { text: '工程化', link: '/articles/engineering/' },
          { text: '全部文章', link: '/articles/' }
        ]
      },
      {
        text: '学习笔记',
        items: [
          { text: '学习路线', link: '/notes/roadmap/' },
          { text: '读书笔记', link: '/notes/reading/' },
          { text: '项目实战', link: '/notes/projects/' }
        ]
      },
      { text: '关于我', link: '/about' }
    ],

    // 侧边栏配置
    sidebar: {
      '/': [],
      '/articles/frontend/': [
        {
          text: '前端开发',
          collapsible: true,
          collapsed: false,
          items: [
            { text: 'JavaScript', link: '/articles/frontend/javascript/' },
            { text: 'TypeScript', link: '/articles/frontend/typescript/' },
            { text: 'Vue.js', link: '/articles/frontend/vue/' },
            { text: 'React', link: '/articles/frontend/react/' },
            { text: 'CSS', link: '/articles/frontend/css/' }
          ]
        }
      ],
      '/articles/backend/': [
        {
          text: '后端开发',
          collapsible: true,
          collapsed: false,
          items: [
            { text: 'Node.js', link: '/articles/backend/nodejs/' },
            { text: 'Python', link: '/articles/backend/python/' },
            { text: '数据库', link: '/articles/backend/database/' }
          ]
        }
      ],
      '/articles/engineering/': [
        {
          text: '工程化',
          collapsible: true,
          collapsed: false,
          items: [
            { text: 'Git', link: '/articles/engineering/git/' },
            { text: 'Webpack', link: '/articles/engineering/webpack/' },
            { text: 'Vite', link: '/articles/engineering/vite/' },
            { text: 'CI/CD', link: '/articles/engineering/cicd/' }
          ]
        }
      ],
      '/notes/roadmap/': [
        {
          text: '学习路线',
          collapsible: true,
          collapsed: false,
          items: [
            { text: '前端学习路线', link: '/notes/roadmap/frontend.md' },
            { text: '全栈学习路线', link: '/notes/roadmap/fullstack.md' },
            { text: '职业发展', link: '/notes/roadmap/career.md' }
          ]
        }
      ],
      '/notes/reading/': [
        {
          text: '读书笔记',
          collapsible: true,
          collapsed: false,
          items: [
            { text: '技术书籍', link: '/notes/reading/tech-books.md' },
            { text: '设计模式', link: '/notes/reading/design-patterns.md' }
          ]
        }
      ],
      '/notes/projects/': [
        {
          text: '项目实战',
          collapsible: true,
          collapsed: false,
          items: [
            { text: '个人项目', link: '/notes/projects/personal.md' },
            { text: '开源贡献', link: '/notes/projects/opensource.md' }
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
      copyright: 'Copyright © 2024-present Menhulu'
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
