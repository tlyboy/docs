# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个基于 VitePress 的个人文档站点，使用中文（简体）编写，包含各种开发环境和工具的配置指南。

## 常用命令

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览构建结果
pnpm preview
```

## 技术栈

- **文档框架**: VitePress 1.x
- **包管理器**: pnpm 10.x
- **Node.js**: >= 22
- **部署**: Netlify / Vercel / Docker (Caddy)

## 项目结构

- `docs/` - 文档内容目录
  - `.vitepress/config.ts` - VitePress 配置（导航、侧边栏、主题设置）
  - `.vitepress/theme/` - 自定义主题（包含深色模式切换动画）
  - `guide/` - 指南文档（Markdown 文件）

## 代码风格

- 无分号（Prettier: `semi: false`）
- 单引号（Prettier: `singleQuote: true`）
- 2 空格缩进
- LF 换行符

## 添加新文档

1. 在 `docs/guide/` 下创建 `.md` 文件
2. 在 `docs/.vitepress/config.ts` 的 `sidebar` 配置中添加对应条目
