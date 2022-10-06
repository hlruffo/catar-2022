# World Cup 2022 - Catar - NaTrave: Faça sua aposta

## A stack utilizada: Vite, React, NPM, TailwindCSS, KOA, Planetscale (MySQL em Nuvem), ORM Prisma e hospedado na Vercel

### Usando o framework React

<https://pt-br.reactjs.org/>

O React utiliza o JSX

A constante Title recebe as props e a arrow function diz que em h1 e interpolando com JS {props.children} definimos que as props recebem os dados do filho

```js
const Title = (props) => (
  <h1>{props.children}</h1>
)
```

Como é renderizado aqui com a constante Title:

```js
export function App() {
  return (
    <div className="app">
    <Title>Um título </Title>
    </div>
  )
}
```

Ou a forma mais comum de se fazer que é já declarando as props e depois apenas interpolando {} consigo mesmas:

```js
const Title = ({ name, children }) => (
  <h1>{name} {children}</h1>
)

export function App() {
  return (
    <div className="app">
    <Title name="Olá">Um título </Title>
    </div>
  )
}
```

E a forma mais simplificada também utilizando o '...props' que importa todo o resto das propriedades:

```js
const Title = ({ children, ...props }) => (
  <h1 {...props}> {children}</h1>
)

export function App() {
  return (
    <div className="app">
    <Title name="Olá">Um título </Title>
    <Title name="Olá">Um título 2</Title>
    <Title name="Olá">Um título 3</Title>
    </div>
  )
}
```

Ainda no React, vamos utilizar uma biblioteca chamada React Router Dom, para manipularmos as navegações, URL Guide:
<https://reactrouter.com/en/main/start/tutorial>

```js
npm install react-router-dom localforage match-sorter sort-by
```

********

Para trabalhar com datas utilizamos uma biblioteca chamada date-fns, URL GUIA:
<https://date-fns.org/>

```js
npm i date-fns
```

`Com datas indicamos pela ISO 8601 que é o formato internacional de data, que começa com ano, mês e dia, e horas caso hajam`

```js
const initialDate = '2022-11-20T00:00:00Z'
```

Para bibliotecas com internacionalização se utiliza muito a tag I18N, para a formatação das datas em ptBR

```js
import { ptBR } from 'date-fns/locale'
```

********

Utilizando uma biblioteca que agiliza na criação da aplicação que é o Vite.js: <https://vitejs.dev/>

```js
npm create vite@latest

cd web

npm install

npm run dev
```

Para podermos importar svg no React usando o Vite:
Guia na URL: <https://www.npmjs.com/package/vite-plugin-svgr>

```js
npm i vite-plugin-svgr
```

Para corrigir os caminhos/paths no Vite:

Importar do próprio Node o path

```js
import path from 'path'
```

```js
resolve: {
alias: {
'~': path.resolve(__dirname, './src')
}
```

********

O Tailwind CSS: <https://tailwindcss.com/>

Instalação utilizando o Vite:
<https://tailwindcss.com/docs/guides/vite>

CLI

```js
npm install -D tailwindcss postcss autoprefixer
```

Para rodar

```js
npx tailwindcss init -p
```

Alteração no tailwind.config.cjs para definir quais são os arquivos que ele irá ler:

```js
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

Importar dentro do css index/global:

```js
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Depois importar dentro do main
********

Para facilitar o desenvolvimento com o Node, e como é mais simples que o Express, utilizamos ele
O koa: <https://koajs.com/>

********

E utilizamos um banco de dados na nuvem, que se encontra no PlanetScale que por debaixo dos panos usa o MySQL: <https://planetscale.com/>

********
E utilizamos um ORM para fazer a conexão e comunicação, o Prisma: <https://prisma.io/>

E hospedamos na Vercel para tornar publico:
<https://vercel.com/>
