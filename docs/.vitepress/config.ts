import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Guany 的文档',
  description: '📄 Guany 的文档',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
  ],
  lang: 'zh-CN',
  lastUpdated: true,
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    lineNumbers: true,
  },
  themeConfig: {
    logo: '/img/logo.png',
    siteTitle: 'Guany 的文档',
    nav: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '指南',
        link: '/guide/getting-started',
      },
      {
        text: '开发',
        link: '/dev/windows',
      },
    ],
    sidebar: {
      '/dev/': [
        {
          text: 'windows',
          link: '/dev/windows',
        },
        {
          text: 'terminal',
          link: '/dev/terminal',
        },
        {
          text: 'powershell',
          link: '/dev/powershell',
        },
        {
          text: 'vscode',
          link: '/dev/vscode',
        },
        {
          text: 'git',
          link: '/dev/git',
        },
        {
          text: 'ssh',
          link: '/dev/ssh',
        },
        {
          text: 'wsl',
          link: '/dev/wsl',
        },
        {
          text: 'linux',
          link: '/dev/linux',
        },
        {
          text: 'zsh',
          link: '/dev/zsh',
        },
      ],
    },
    outline: {
      label: '页面导航',
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/tlyboy/docs',
      },
    ],
    footer: {
      message: '基于 MIT 许可发布',
      copyright: '版权所有 © 2023-present Guany',
    },
    editLink: {
      pattern: 'https://github.com/tlyboy/docs/edit/main/src/:path',
      text: '在 GitHub 上编辑此页面',
    },
    lastUpdated: {
      text: '最后更新于',
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
  },
})
