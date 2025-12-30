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
  cleanUrls: true,
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
        text: '指南',
        link: '/guide/getting-started',
      },
    ],
    sidebar: {
      '/guide/': {
        base: '/guide/',
        items: [
          {
            text: '指南',
            collapsed: false,
            items: [
              {
                text: '简介',
                link: 'getting-started',
              },
            ],
          },
          {
            text: '环境',
            collapsed: false,
            items: [
              {
                text: 'macos',
                link: 'macos',
              },
              {
                text: 'windows',
                link: 'windows',
              },
              {
                text: 'wsl',
                link: 'wsl',
              },
              {
                text: 'linux',
                link: 'linux',
              },
              {
                text: 'ubuntu',
                link: 'ubuntu',
              },
              {
                text: 'windows-terminal',
                link: 'windows-terminal',
              },
              {
                text: 'powershell',
                link: 'powershell',
              },
              {
                text: 'warp',
                link: 'warp',
              },
              {
                text: 'zsh',
                link: 'zsh',
              },
              {
                text: 'vscode',
                link: 'vscode',
              },
              {
                text: 'git',
                link: 'git',
              },
              {
                text: 'ssh',
                link: 'ssh',
              },
              {
                text: 'docker',
                link: 'docker',
              },
              {
                text: 'fnm',
                link: 'fnm',
              },
              {
                text: 'ni',
                link: 'ni',
              },
              {
                text: 'claude-code',
                link: 'claude-code',
              },
            ],
          },
        ],
      },
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
      pattern: 'https://github.com/tlyboy/docs/edit/main/docs/:path',
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
