# Спецпроект magnit-agent-front

### Технологии

- React
- Typescript
- Webpack 5 + Babel
- MobX
- React-router v6
- CSS Modules with babel-plugin
- Eslint + Stylelint + Prettier

### Структура проекта

```
/src
|--/components <- общие компоненты
|--/config <- общие конфиги
|--/pages <- компоненты-страниц приложения
|--/store <- mobx-сторы
|--/styles <- глобальные стили и переменные
|--/types <- глобальные типы
|--/utils <- утилиты
|--App.tsx <- главный компонент приложения
|--index.html
|--index.tsx <- точка входа в приложение
```

### Описание проекта

На старте в [index.tsx](src/index.tsx) рендерится главный компонент приложения [App](src/App.tsx). Внутри него расположен компонент [Root](src/pages/Root/Root.tsx), который отвечает за роутинг и рендер страниц приложения. Навигация осуществляется с помощью [react-router v6](https://reactrouter.com/docs/en/v6/getting-started/tutorial). Все пути приложения хранятся в [конфиге](src/config/routes.ts), а в компоненте Root описывается их структура. Также к проекту подключен [MobX](https://mobx.js.org/), которые создает глобальный стор [RootStore](src/store/RootStore.ts), который может содержать любые подсторы.

### Основные скрипты

- Запуск dev-сервера:

```
yarn dev
```

- Сборка:

```
yarn build
```

- Запуск ts:

```
yarn tsc:check
```

- Запуск eslint:

```
yarn lint
```

```
yarn lint:fix
```

- Запуск stylelint:

```
yarn stylelint
```

```
yarn stylelint:fix
```

- Запуск prettier:

```
yarn codestyle:fix
```

### Перед первым запуском проекта

1. Поставить зависимости

```
yarn
```

2. Включить husky для запуска линтера на прекоммит

```
yarn husky:prepare
```

### Требования

- Node.js версии 16 и выше
