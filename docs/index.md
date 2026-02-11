---
layout: home

hero:
  name: 竹蔓
  text: 技术博客
  tagline: 记录学习心得 · 分享技术经验 · 探索技术边界
  image:
    src: /logo.svg
    alt: 竹蔓 Blog
  actions:
    - theme: brand
      text: 开始浏览
      link: /articles/
    - theme: alt
      text: 关于我
      link: /about

features:
  - icon:
      light: /logo.svg
      dark: /logo.svg
    title: 📝 技术文章
    details: 深入探讨前端开发、后端技术、工程化实践等技术话题，分享实际开发中的经验总结。
    link: /articles/
    linkText: 查看文章
  - icon:
      light: /logo.svg
      dark: /logo.svg
    title: 🗺️ 学习路线
    details: 系统整理前端、全栈学习路径，为技术成长提供清晰的方向指引。
    link: /notes/roadmap/
    linkText: 查看路线
  - icon:
      light: /logo.svg
      dark: /logo.svg
    title: 📚 读书笔记
    details: 精读技术经典书籍，提炼核心知识点，帮助你快速掌握关键概念。
    link: /notes/reading/
    linkText: 查看笔记
  - icon:
      light: /logo.svg
      dark: /logo.svg
    title: 🚀 项目实战
    details: 分享个人项目开发经验，记录从0到1的完整开发过程。
    link: /notes/projects/
    linkText: 查看项目
---

<style>
.VPHero .name {
  background: linear-gradient(120deg, #42b883 0%, #3eaf7c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.VPHero .image {
  border: 2px solid var(--vp-c-brand-1);
  border-radius: 50%;
  padding: 8px;
}

.VPFeature {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.VPFeature:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 12px rgba(66, 184, 131, 0.15);
  transform: translateY(-2px);
}
</style>
