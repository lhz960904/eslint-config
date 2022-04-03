# @ihaoze/eslint-config

## Usage

### Install

```bash
pnpm add -D eslint @ihaoze/eslint-config
```

### Config `.eslintrc`

```json
{
  "extends": "@ihaoze"
}
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

### Config VS Code auto fix

Create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## License

MIT
