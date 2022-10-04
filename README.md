# catar-2022

A construção em html, css e JS - e essa foi a stack utilizada:

Usando o framework React: <https://pt-br.reactjs.org/>

Utilizamos className e o próprio React passa a entender como class depois

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

'''''''''''''''''''''''''''''''''''''''''''''''

Utilizando uma biblioteca que agiliza na criação da aplicação que é o Vite.js: <https://vitejs.dev/>

```js
npm create vite@latest

cd web

npm install

npm run dev
```

'''''''''''''''''''''''''''''''''''''''

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
'''''''''''''''''''''''''''''''''''''''''

Para facilitar o desenvolvimento com o Node, e como é mais simples que o Express, utilizamos ele
O koa: <https://koajs.com/>

'''''''''''''''''''''''''''''''''''''''

E utilizamos um banco de dados na nuvem, que se encontra no PlanetScale que por debaixo dos panos usa o MySQL: <https://planetscale.com/>

'''''''''''''''''''''''''''''''''''''''''''
E utilizamos um ORM para fazer a conexão e comunicação, o Prisma: <https://prisma.io/>

E hospedamos na Vercel para tornar publico:
<https://vercel.com/>
