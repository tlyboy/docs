# zsh

Zsh

## 安装

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

cd ~/.oh-my-zsh/plugins

gcl https://github.com/zsh-users/zsh-autosuggestions.git
gcl https://github.com/zsh-users/zsh-syntax-highlighting.git
gcl https://github.com/agkozak/zsh-z.git

curl -sS https://starship.rs/install.sh | sh
```

## 使用说明

```sh
plugins=(
  git
  command-not-found
  zsh-autosuggestions
  zsh-syntax-highlighting
  zsh-z
)

eval "$(starship init zsh)"

function i() {
  cd ~/i/$1
}

alias nio="ni --prefer-offline"
alias s="nr start"
alias d="nr dev"
alias b="nr build"
alias bw="nr build --watch"
alias t="nr test"
alias tu="nr test -u"
alias tw="nr test --watch"
alias w="nr watch"
alias p="nr play"
alias c="nr typecheck"
alias lint="nr lint"
alias lintf="nr lint --fix"
alias release="nr release"
alias re="nr release"
```
