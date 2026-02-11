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
    title: 🤖 AI与Agent开发
    details: 深入探讨ReAct架构、LLM工具调用、Prompt工程，分享OpenWork项目实战经验。
    link: /articles/ai-agent/
    linkText: 查看文章
    
  - icon:
      light: /logo.svg
      dark: /logo.svg
    title: ☸️ 云原生与DevOps
    details: Kubernetes集群搭建、GitOps工作流、CI/CD最佳实践，完整云原生技术栈。
    link: /articles/cloud-native/
    linkText: 查看文章
    
  - icon:
      light: /logo.svg
      dark: /logo.svg
    title: 💻 桌面应用开发
    details: Tauri + Rust跨平台开发，从入门到实战，打造高性能桌面工具。
    link: /articles/desktop/
    linkText: 查看文章
    
  - icon:
      light: /logo.svg
      dark: /logo.svg
    title: 🚀 项目实战复盘
    details: OpenWork、MBTI系统、AI助手等完整项目复盘，从0到1开发经验。
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
