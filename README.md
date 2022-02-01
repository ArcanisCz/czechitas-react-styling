# Materiály k bonusové lekci - stylování v reactu

## Použití
- `npm install` (to už víme, že? ;) )
- `npm start`
- poté v souboru index.jsx si můžeme hrát s implementací Button a Input pomocí různých metod

```
import {Button, Input} from "./components/plain-components";
// import {Button, Input} from "./components/css-modules-components";
// import {Button, Input} from "./components/styled-components-components";
//  import {Button, Input} from "./components/scss-modules-components";
```

## components/plain-components
Komponenty stylované jako na lekcích, s použitím unikátních prefixů (Button-*, Input-*)

Taktéž použito se storybookem. ( https://storybook.js.org/docs/react/get-started/introduction )
- Button.story.jsx
- Input.story.jsx

Storybook se pouští pomocí `npm run storybook` (hledej v package.json)

## components/css-module-components
Komponenty nastylované pomocí "css modules"
- Co to je? https://github.com/css-modules/css-modules
- Proč to chceme? https://css-tricks.com/css-modules-part-1-need/
- Jak to nastavit? https://blog.jakoblind.no/css-modules-webpack/

V `Input.jsx` taktéž použita utilita https://github.com/JedWatson/classnames#readme

## components/styled-components-components
Komponenty nastylované pomocí Styled Components. 
- Co to je? https://styled-components.com/docs/basics#getting-started
- Nějaký článek https://medium.com/swlh/intro-to-styled-components-d97e4bf96598

## components/scss-module-components
Komponenty nastylované pomocí kombinace SASS + CSS Modules
- https://sass-lang.com/
- přidáno do webpacku pomocí https://webpack.js.org/loaders/sass-loader/
