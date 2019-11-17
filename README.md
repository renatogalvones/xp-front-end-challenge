# XP - Front end Challenge

## Descrição

Desafio de criação de plataforma "Spotifylike" do zero até a aplicação final proposta pela XP Investimentos.

## Tecnologias

- Webpack;
- React;
- Redux;
- Styled-components;
- Axios;
- Storybook;
- Jest;
- Eslint;
- Prettier;
- etc;

## Requisitos

- [Node 10](https://nodejs.org/en/docs/);
- [Yarn](https://yarnpkg.com/lang/en/);

## Passos para rodar o projeto

```
git clone git@github.com:renatogalvones/xp-front-end-challenge.git
cd xp-front-end-challenge
nvm use
yarn
yarn start
```
Você poderá acessar em [localhost](http://localhost:8080);


## Storybook
Criei alguns componentes separados para facilitar a criação do projeto e os disponibilizei num storybook.
Para visualizá-los:
```
yarn storybook
```

## Rodando os testes
Criei alguns testes unitários para os componentes isolados.
Para rodá-los:
```
yarn test
```

## Criando a build de produção
Os arquivos buildados ficarão disponíveis na pasta `/dist`.
Para criar a build:
```
yarn build
```
