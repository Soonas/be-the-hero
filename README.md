<<<<<<< HEAD
<h1 align="center">
  <img src=".github/logo.svg" alt="Be The Hero">
</h1>

<h3 align="center">
  Be The Hero - Conecte sua ONG com pessoas que desejam lhe ajudar.
</h3> 

<p align="center">
  <a href="#%EF%B8%8F-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-semana-omnistack-110">Semana OmniStack 11.0</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instalação-execução-e-desenvolvimento">Instalação, execução e desenvolvimento</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Agradecimentos</a>
</p>
 
<img alt="Layout" src="https://res.cloudinary.com/eliasgcf/image/upload/v1585345367/be-the-hero/mockup_uf7cxb.png">

### 

## 📖Projeto

A aplicação busca auxiliar as ONGs por intermedio de pessoas que estejam interessadas em ajudar e ser um herói, como o proprio nome diz "Be The Hero".
O projeto inclui interfaces Web e Mobile, simples e bonita, utilizando tecnologias de ponta.

- Possui sistema de encaminhamento de Email e WhatsApp

<details><summary>Layout do Projeto</summary>
  <img alt="Cadastro" src="https://res.cloudinary.com/eliasgcf/image/upload/v1585335838/be-the-hero/Cadastro_g45xr9.png">
  <img alt="Login" src="https://res.cloudinary.com/eliasgcf/image/upload/v1585335849/be-the-hero/Login_bhx9xu.png">
  <img alt="Cadastro de Caso" src="https://res.cloudinary.com/eliasgcf/image/upload/v1585335831/be-the-hero/Cadastrar_novo_caso_edgbbs.png">
  <img alt="Lista de Casos" src="https://res.cloudinary.com/eliasgcf/image/upload/v1585335843/be-the-hero/Lista_iti7gz.png">
  <img alt="Mobile" src="https://res.cloudinary.com/eliasgcf/image/upload/v1585335852/be-the-hero/mobile_loaoyj.png">
</details>

## 🔧Tecnologias

Esta aplicação foi desenvolvida com as tecnologias abaixo:

- [Node.js](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)
- [Express](https://expressjs.com/pt-br/)
- [Celebrate](https://github.com/arb/celebrate)
- [Sequelize](https://sequelize.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [SQLite](https://www.sqlite.org/)
- [Jest](https://jestjs.io/)
- [SuperTest](https://github.com/visionmedia/supertest)
- [Nodemon](https://nodemon.io/)
- [Sucrase](https://github.com/alangpierce/sucrase)
- [React Router DOM](https://reacttraining.com/react-router/)
- [React Navigation](https://reactnavigation.org/)
- [React Icons](https://react-icons.netlify.com/#/)
- [UnForm](https://unform.dev/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://github.com/axios/axios)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 🚀Semana OmniStack 11.0

A [Semana OmniStack](https://rocketseat.com.br/week/inscricao/11.0) é um evento 100% online e gratuito, onde a [Rocketseat](https://github.com/rocketseat) junto com seu CTO [Diego Fernandes](https://github.com/diego3g) e mais toda a comunidade, desenvolvem uma aplicação completa, desde o banco de dados, back-end, até o front-end web e mobile, tudo isso utilizando a stack JavaScript, ou seja, Node.js no back-end, ReactJS para web e React Native para mobile.

## 💻Instalação, execução e desenvolvimento

_Faça um clone desse repositório._

### Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [Yarn](https://yarnpkg.com/) ou [npm](https://www.npmjs.com/)
- [Expo](https://expo.io/)

### Backend

- A partir da raiz do projeto, entre na pasta rodando `cd server`;
- Rode `yarn` para instalar sua dependências;
- Rode `cp .env.example .env` e preencha o arquivo `.env` com SUAS variáveis ambiente;
- Caso não tenha criado o banco de dados rode `yarn sequelize db:create`;
- Rode `yarn sequelize db:migrate` para executar as migrations;
- Importe o arquivo `Insomnia.json` no Insomnia ou clique no botão [Run in Insomnia](#insomniaButton);

### Web

_Antes de executar é necessario iniciar o backend deste projeto. No diretório onde está o backend de_ `npm start`;

- A partir da raiz do projeto, entre na pasta do frontend web rodando `cd web`;
- Rode `yarn` para instalar as dependências;
- Rode `yarn start` para iniciar o client web;

### Mobile

_Antes de executar é necessario iniciar o backend deste projeto. No diretório onde está o backend de_ `npm start`;

- A partir da raiz do projeto, entre na pasta do frontend web rodando `cd mobile`;
- Rode `yarn` para instalar as dependências;
- Rode `yarn start` ou `expo start` para iniciar o bundle com o expo;
- Caso vá utilizar emulador, basta clicar na opção `Run on ...`;
- Caso vá utilizar seu smartphone, com o app do expo escanei o QRCODE;


## 💁‍♀️Agradecimentos:


###### Por proporcionarem os primeiros passos de minha longa caminhada! >[Rocketseat](https://github.com/Rocketseat) 

###### Por me auxiliar nos bugs que em grande maioria era palavras cmidas! >[Elias Gabriel](https://github.com/EliasGcf)

```
Feito com 💜 by [Soonas](https://www.linkedin.com/in/soonas/)
```