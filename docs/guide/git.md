# git

Git

## 配置关闭自动转换 CRLF 行尾

```sh
git config --global core.autocrlf false
```

## 配置 credential helper 为 store

```sh
git config --global credential.helper store
```

## 配置默认分支为 main

```sh
git config --global init.defaultBranch main
```

## 配置用户和邮箱

```sh
git config --global user.name "Your Name"
git config --global user.email "youremail@domain.com"
```

## 配置代理

```sh
git config --global http.proxy "http://127.0.0.1:7890"
git config --global https.proxy "http://127.0.0.1:7890"
```

## 配置 lfs

```sh
git lfs install
```
