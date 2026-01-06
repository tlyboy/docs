# claude-code

Claude Code

## Memory

通过 `CLAUDE.md` 文件配置指令偏好：

```md
- Always respond in Chinese-simplified
```

## Settings

配置文件位于 `~/.claude/settings.json`：

```json
{
  "attribution": {
    "commit": "",
    "pr": ""
  }
}
```

## Command

```sh
# 继续上一次对话
claude -c

# 跳过权限确认
claude --dangerously-skip-permissions
```
