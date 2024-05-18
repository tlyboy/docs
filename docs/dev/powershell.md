# powershell

PowerShell

## 安装

```powershell
Install-Module posh-git -Scope CurrentUser
Install-Module git-aliases -Scope CurrentUser -AllowClobber
Install-Module z -AllowClobber
winget install --id Starship.Starship
winget install gerardog.gsudo
```

## 使用说明

```powershell
Set-PSReadlineKeyHandler -Key Tab -Function MenuComplete

Import-Module posh-git
Import-Module git-aliases -DisableNameChecking
Import-Module z

Invoke-Expression (&starship init powershell)

Set-Alias -Name la -Value Get-ChildItem

function i {
    param (
        [string]$DirectoryName
    )

    Set-Location -Path "~\i\$DirectoryName"
}

Remove-Item Alias:ni -Force -ErrorAction Ignore

function nio {
    ni --prefer-offline
}

function s {
    nr start
}

function d {
    nr dev
}

function b {
    nr build
}

function bw {
    nr build --watch
}

function t {
    nr test
}

function tu {
    nr test -u
}

function tw {
    nr test --watch
}

function w {
    nr watch
}

function p {
    nr play
}

function c {
    nr typecheck
}

function lint {
    nr lint
}

function lintf {
    nr lint --fix
}

function release {
    nr release
}

function re {
    nr release
}
```
