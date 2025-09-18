# fnm

fnm

## 配置

### Windows

```powershell
fnm completions --shell powershell | Out-String | Invoke-Expression
```

```powershell
fnm env --use-on-cd --version-file-strategy=recursive --corepack-enabled --resolve-engines --shell powershell | Out-String | Invoke-Expression
```

### MacOS/Linux

```sh
FNM_PATH="/opt/homebrew/opt/fnm/bin"
if [ -d "$FNM_PATH" ]; then
  eval "`fnm env`"
fi
```

```sh
eval "$(fnm env --use-on-cd --version-file-strategy=recursive --corepack-enabled --resolve-engines)"
```
