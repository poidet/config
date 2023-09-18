# ESLint конфигурация

## Установка

Добавьте пакет в свои dev-dependencies

```bash
npm i -D @poidet/eslint-config eslint

yarn add -D @poidet/eslint-config eslint

pnpm install -D @poidet/eslint-config eslint
```

## Использование

Добавьте файл `.eslintrc.cjs` в корень вашего проекта, если у вас его нет.

Затем добавьте туда раздел `extends`:

```json
{
  "extends": [
    "@poidet/eslint-config"
  ]
}
```

## Пример команды

```bash
eslint ./src
```
