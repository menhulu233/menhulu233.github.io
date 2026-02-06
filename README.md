# Menhulu 的博客

欢迎来到我的个人博客！这是一个使用 [VitePress](https://vitepress.dev/) 构建的技术博客网站，参考 [toimc-team/notes-page](https://toimc-team.github.io/notes-page/) 的设计风格。

## 设计特点

- 📚 **结构化内容** - 技术文章和学习笔记分类清晰
- 🎨 **美观界面** - 参考 toimc-team 风格，渐变背景，优雅配色
- 🔍 **本地搜索** - 内置全文搜索功能
- 📱 **响应式设计** - 完美适配各种设备
- 🌙 **深色模式** - 支持明暗主题切换

## 快速开始

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

访问 `http://localhost:5173` 查看效果。

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 项目结构

```
.
├── docs/
│   ├── .vitepress/           # VitePress 配置
│   │   ├── config.mts        # 站点配置（导航、侧边栏等）
│   │   └── theme/            # 自定义主题
│   │       ├── index.ts      # 主题入口
│   │       └── custom.css    # 自定义样式
│   ├── articles/             # 技术文章
│   │   ├── frontend/         # 前端开发
│   │   ├── backend/          # 后端开发
│   │   └── engineering/      # 工程化
│   ├── notes/                # 学习笔记
│   │   ├── roadmap/          # 学习路线
│   │   ├── reading/          # 读书笔记
│   │   └── projects/         # 项目实战
│   ├── index.md              # 首页
│   └── about.md              # 关于页面
├── .gitignore
├── package.json
└── README.md
```

## 内容分类

### 技术文章

- **前端开发** - JavaScript、TypeScript、Vue.js、React、CSS
- **后端开发** - Node.js、Python、数据库
- **工程化** - Git、Webpack、Vite、CI/CD

### 学习笔记

- **学习路线** - 前端、全栈学习路径规划
- **读书笔记** - 技术书籍阅读总结
- **项目实战** - 个人项目与开源贡献

## 添加新内容

### 添加技术文章

在对应的 `docs/articles/` 子目录下创建新的 Markdown 文件。

### 添加学习笔记

在对应的 `docs/notes/` 子目录下创建新的 Markdown 文件。

### 文章模板

```markdown
---
title: 文章标题
date: 2024-01-01
tags:
  - 标签1
  - 标签2
categories:
  - 分类名称
---

# 文章标题

文章内容...
```

## 样式定制

自定义样式位于 `docs/.vitepress/theme/custom.css`，包含：

- 首页渐变背景
- 代码块样式优化
- 表格样式美化
- 自定义容器（Tip、Info、Warning、Danger）
- 深色模式支持
- 响应式设计

## 技术栈

- [VitePress](https://vitepress.dev/) - 静态站点生成器
- [Vue 3](https://vuejs.org/) - 前端框架
- [TypeScript](https://www.typescriptlang.org/) - 类型支持
- [Markdown](https://www.markdownguide.org/) - 内容编写

## 部署

### GitHub Pages

1. 构建项目：`npm run build`
2. 将 `docs/.vitepress/dist` 目录推送到 `gh-pages` 分支
3. 在 GitHub 仓库设置中启用 GitHub Pages，选择 `gh-pages` 分支

### 自动部署

可以使用 GitHub Actions 实现自动部署，配置示例：

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist
```

## 许可证

[MIT](LICENSE)

---

**博客地址**: https://menhulu233.github.io
**参考设计**: [toimc-team/notes-page](https://toimc-team.github.io/notes-page/)
