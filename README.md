#Project Template with Eslint and prettier config

Install dependencies

$yarn install

Please add the next code on settings.json of VS Code

{
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
}
