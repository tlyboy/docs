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
FNM_PATH="/Users/tly/Library/Application Support/fnm"
if [ -d "$FNM_PATH" ]; then
  export PATH="/Users/tly/Library/Application Support/fnm:$PATH"
  eval "`fnm env`"
fi
```

```sh
eval "$(fnm env --use-on-cd --version-file-strategy=recursive --corepack-enabled --resolve-engines)"
```
