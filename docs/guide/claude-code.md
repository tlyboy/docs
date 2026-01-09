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
    "document-skills@anthropic-agent-skills": true,
    "context7@claude-plugins-official": true
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
