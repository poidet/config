# Prettier конфигурация

## Установка

Добавьте пакет в свои dev-dependencies

```bash
npm i -D @poidet/prettier prettier

yarn add -D @poidet/prettier prettier

pnpm install -D @poidet/prettier prettier
```

## Использование

Добавьте файл `.prettierrc.cjs` в корень вашего проекта, если у вас его нет.

добавите следующий код в конфигурацию

```javascript
module.exports = {
	...require('@taknepoidet-config/prettier')
};
```

## Пример команды

```bash
prettier --write src/**
```
