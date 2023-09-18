# Nuxt ESLint конфигурация

## Установка

Добавьте пакет в свои dev-dependencies

```bash
npm i -D @poidet/eslint-config-nuxt eslint

yarn add -D @poidet/eslint-config-nuxt eslint

pnpm install -D @poidet/eslint-config-nuxt eslint
```

## Использование

Добавьте файл `.eslintrc.cjs` в корень вашего проекта, если у вас его нет.

Затем добавьте туда раздел `extends`:

```json
{
  "extends": [
    "@poidet/eslint-config-nuxt"
  ]
}
```

## Пример команды

```bash
eslint ./src
```
