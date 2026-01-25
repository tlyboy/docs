# ssh

SSH

## 生成新的 SSH 密钥

```sh
ssh-keygen -t ed25519 -C "your_email@example.com"
```

## 查看 SSH 密钥

zsh

```sh
cat ~/.ssh/id_ed25519.pub
```

powershell

```sh
cat ~\.ssh\id_ed25519.pub
```

## 配置 GitHub 在 HTTPS 端口使用 SSH

```
Host github.com
  HostName ssh.github.com
  Port 443
  User git
```

## 测试 SSH 连接

```sh
ssh -T git@github.com
```

## 配置代理

```
ProxyCommand nc -X 5 -x 127.0.0.1:7890 %h %p
```

## SSH Agent 密钥管理

### 添加密钥到 SSH Agent

```sh
ssh-add ~/.ssh/id_ed25519
```

### 查看已添加的密钥列表

```sh
ssh-add -l
```

### 从 SSH Agent 移除密钥

移除指定密钥：

```sh
ssh-add -d ~/.ssh/id_ed25519
```

移除所有密钥：

```sh
ssh-add -D
```
