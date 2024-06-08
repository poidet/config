# Stylelint конфигурация

## Установка

Добавьте пакет в свои dev-dependencies

```bash
npm i -D @poidet/stylelint stylelint

yarn add -D @poidet/stylelint stylelint

pnpm install -D @poidet/stylelint stylelint
```

## Использование

Добавьте файл `stylelint.config.cjs` в корень вашего проекта, если у вас его нет.

Затем добавьте туда раздел `extends`:

```javascript
module.exports = {
	extends: ['@poidet/stylelint']
};
```
