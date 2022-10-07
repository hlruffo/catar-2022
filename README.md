# World Cup 2022 - Catar - NaTrave: Faça sua aposta

``A stack utilizada: Vite, React, NPM, TailwindCSS, KOA, Planetscale (MySQL em Nuvem), ORM Prisma, e muitas outras bibliotecas, hospedado na Vercel``

## Usando o framework React

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

## Date-fns - Manipulação de datas e horas com JS mais simplificada

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

## Vite.js - Biblioteca que agiliza a criação do Frontend

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

## Tailwind CSS

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

## Koa.js - Trabalha com middlewares

Para facilitar o desenvolvimento com o Node/Backend utilizamos o KOA, e como é mais simples que o Express e menos "modulado" sem muitos scripts [você pode instalar], utilizamos ele, que inclusive foi feita pela mesma equipe do Express
O koa: <https://koajs.com/>

```js
npm i koa
```

O Koa trabalha com middlewares, várias funções que são encadeadas numa fila e vai executando uma por uma.

Uma coisa que também não pode faltar numa API é o roteamento

Então também adicionaremos uma biblioteca chamada Koa Router, porque o Koa não tem roteamento nativo
URL GUIA:
<https://www.npmjs.com/package/koa-router>
<https://github.com/koajs/router/blob/HEAD/API.md>

```js
npm install @koa/router
```

### Koa body-parser

Também utilizamos o koa-bodyparser para manipularmos as informações que o usuário mandar
URL GUIA:
<https://github.com/koajs/bodyparser>

Instalação:

```js
npm i koa-bodyparser
```

Depois utilizamos como um middleware, conseguindo acessar as informações que são enviadas pelo Frontend de forma mais fácil

Também instalamos a biblioteca cors para o Koa, URL GUIA:
<https://www.npmjs.com/package/@koa/cors>

```js
npm install @koa/cors
```

Para testarmos as rotas utilizamos o Insomnia, URL GUIA:
<https://insomnia.rest/download>

********

## PlanetScale - MySQL - Banco de dados na nuvem Relacional

E utilizamos um banco de dados na nuvem free, que se encontra no PlanetScale que por debaixo dos panos usa o MySQL: <https://planetscale.com/>

No PlanetScale se trabalha com Branches, então criamos uma e nela é que trabalharemos, toda alteração que tivermos no banco de dados será feito na develop para testes e depois conectaremos na main

Então dentro do PlanetScale promovemos a branch Main para produção/Production

********

## Prisma - CRUD

E utilizamos um ORM para fazer a conexão, comunicação, pesquisa ou manipulação dos dados, o Prisma, URL GUIA:
<https://www.prisma.io/docs/getting-started/quickstart>

Como o Prisma trabalha, URL GUIA:
<https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/introspection-node-mysql>

Utilizamos um banco de dados relacional

Instalação:

```js
npm i prisma --save-dev
```

Iniciar a documentação e CLI do Prisma

```js
npx prisma
```

Para iniciar o Prisma e configura-lo:

```js
npx prisma init
```

### Schema das nossas tables dentro do Prisma

Schema Prisma de Users:

- id (string - usaremos o cuid)
- name (string)
- email (string)
- username (string)
- password (string)

Schema Prisma de Hunches (Palpites):

- id
- userId (string)
- gameId (string)
- teamA (string)
- teamB (string)

Schema Prisma de Games:

- id
- teamA (string)
- teamB (string)
- datetime
- group
- level

### Prisma no PlanetScale

Utilizando o PlanetScale com o Prisma, URL GUIA:
<https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/connect-your-database-node-planetscale>

Também instalamos o Prisma Client:

```js
npm install @prisma/client
```

Toda vez que o model for modificado, precisa rodar o Prisma Generate:

```js
npx prisma generate
```

Para o banco de dados ser enviado ao PlanetScale:

```js
 npx prisma db push
```

E para enviarmos para a Main criamos um deploy request para ela no PlanetScale em Overview

### Gerando a seed ou fazendo seeding

Geramos o cadastro dos jogos, e utilizamos uma função do próprio Prisma para adicionarmos esses cadastros apenas uma única vez, URL GUIA dos jogos:
<https://gist.github.com/brunobertolini/764403491652f9dde7b174eaf1119caf>

URL GUIA da função do Prisma createMany(), URL GUIA:
<https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany>

Criamos um script no ``package.json`` para ser rodado uma única vez, com o método seed, para gerar um dado permanente na DB:

```js
"prisma": {
  "seed": "node prisma/seed.js"
},
```

Criamos uma função para não rodarmos sem querer mais de uma vez essa seed e gerar dados desnecessários, URL GUIA:
<https://www.prisma.io/docs/concepts/components/prisma-schema/indexes>

Dentro do Schema declaramos que isso será gerado apenas uma vez:

```js
  @@unique([homeTeam, awayTeam, gameTime])
```

Então atualizamos a db com o Prisma com o comando:

`npx prisma db push`

Depois rodamos o comando para enviar a seed:

```js
npx prisma db seed
```

Criar ou atualizar um dado no Prisma, GUIA URL:
<https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#upsert>

### DATE-FNS - Manipulação de data

E mais uma vez manipulamos a data com a biblioteca date-fns como no Frontend:

```js
npm i date-fns
```

Depois da instalação importamos:

```js
import { addDays, formatISO } from 'date-fns'
```

A manipulação das datas, gte = maior que ou igual que
lt = menor que
e formatamos a data em ISO

```js
gte: currentDate,
 lt: formatISO(addDays(new Date(currentDate), 1))
```

### BCRYPT

Para encriptarmos as senhas e informações sensíveis, utilizaremos o BCRYPT, URL GUIA:
<https://www.npmjs.com/package/bcrypt>

Instalando:

```js
npm i bcrypt
```

Importamos em users:

```js
import bcrypt from 'bcrypt'
```

Utilizando o BCRYPT como promise, e então apenas definimos em data que ele receberá o password, já criptografado:

```JS
const password = await bcrypt.hash(ctx.request.body.password, 10)
```

E para evitar que a senha seja exposta ou retornada, removeremos ela, desestruturando o retorno do try:

```js
try {
    const { password, ...user } 
    ...}
```

### Trabalhando com JWT

Instalando:

```js
npm i jsonwebtoken
```

Para carregar o nosso env, existe uma biblioteca chamada dotenv-safe, URL GUIA:
<https://www.npmjs.com/package/dotenv-safe>

Instalação:

```js
npm i dotenv-safe
```

Para rodarmos o server e utilizarmos o process.env. precisamos usar:

```js
node -r dotenv-safe/config server.js
```

Para não ter que ficar digitando isso todo o tempo, criamos um script no package.json:

```js
"scripts": {
    "start": "node -r dotenv-safe/config server.js"
  },
```

Agora para rodar basta usar:
`npm run start`

********

### AXIOS - Para trabalhar com requisições http no Frontend

URL GUIA do Axios:
<https://axios-http.com/ptbr/docs/intro>

Instalando:

```js
npm i axios
```

Também adicionamos uma biblioteca para manipularmos os formulários, o Formik e o yup que é para validação, URL GUIA:
<https://formik.org/docs/overview>

Instalação:

```js
npm i formik yup
```

Validação com o formik yup, URL GUIA:
<https://formik.org/docs/guides/validation>

********

E hospedamos na Vercel para tornar publico:
<https://vercel.com/>
