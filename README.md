# Projeto Express com TypeScript e OOP

Este projeto é uma aplicação Node.js utilizando Express, TypeScript e Mongoose com uma abordagem orientada a objetos (OOP). A aplicação inclui um CRUD básico para um modelo de notícias sobre  jogos.

Projeto na vercel: https://pion-api.vercel.app/
## Tecnologias Utilizadas

- Node.js
- Express
- TypeScript
- Mongoose
- MongoDB

## Estrutura de Código

### Classe App

A classe App é responsável por configurar a aplicação Express, conectar ao banco de dados MongoDB e inicializar as rotas.

### Classes HomeCardModel, NewsModel e ReviewsModel

As classes HomeCardModel, NewsModel e ReviewsModel contêm os modelos de ODM (Object Document Mapping) para o nosso banco de dados baseado em documentos, como o MongoDB.

### Classe Routes

A classe Routes define as rotas principais da aplicação onde também estamos usando o middleware json() para transformar os dados enviados e recebidos pelas rotas em formato JSON.

### Classe HomeCardRouter, NewsRouter, ReviewsRouter

As classes HomeCardRouter, NewsRouter, ReviewsRouter define as rotas, incluindo os métodos GET, POST, PUT e DELETE.

### Classe HomeCardController, NewsController, ReviewsController

As classes HomeCardController, NewsController, ReviewsController contém a lógica de manipulação com os Status das Respostas HTTP e Tratamento de Erros

- Se a busca for bem-sucedida, ele retorna um status HTTP 200 (OK) com os dados em formato JSON.
- Se ocorrer um erro (por exemplo, falha na conexão com o banco de dados), ele retorna um status HTTP 500 (Internal Server Error) com uma mensagem de erro.
- O retorno dos dados em formato JSON segue o padrão RESTful, tornando a API mais interoperável e fácil de consumir por outros serviços.
- O bloco try-catch lida com exceções que podem ocorrer durante a busca no banco de dados.

## Uso

A aplicação inclui os seguintes endpoints:

/homepage <br>
/newspage <br>
/reviewspage <br>

### Exemplos de Requisições

GET /homepage - Pega todos os itens em homepage

GET http://localhost:3000/homepage
## 
POST /homepage - Cria um item em homepage

POST http://localhost:3000/homepage <br>

{ <br>
"alt": "alt para imagem", <br>
"url": "https://wallpapers.com/images/", <br>
"title": "Nova Notícia", <br>
"description": "Descrição da nova notícia", <br>
"slug": "nova-noticia" <br>
"textButton": "Leia mais...",   <br>
}
##
PUT /newspage/:id - Atualiza dados de um item selecionado

PUT http://localhost:3000/newspage/{id}

{ <br>
"title": "Notícia Atualizada", <br>
"description": "Descrição atualizada", <br>
"slug": "noticia-atualizada" <br>
}
##
DELETE /reviewspage/:id - Delete um item selecionado

DELETE http://localhost:3000/reviewspage/{id}
