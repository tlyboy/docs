# claude-code

Claude Code

## Settings

配置文件位于 `~/.claude/settings.json`：

```json
{
  "attribution": {
    "commit": "",
    "pr": ""
  },
  "enabledPlugins": {
    "commit-commands@claude-plugins-official": true,
    "code-simplifier@claude-plugins-official": true,
    "ralph-loop@claude-plugins-official": true,
    "document-skills@anthropic-agent-skills": true
  },
  "language": "chinese"
}
```

## Command

```sh
# 继续上一次对话
claude -c

# 跳过权限确认
claude --dangerously-skip-permissions
```
