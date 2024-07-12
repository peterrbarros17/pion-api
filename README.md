# Projeto Express com TypeScript e OOP

Este projeto é uma aplicação Node.js utilizando Express, TypeScript e Mongoose com uma abordagem orientada a objetos (OOP). A aplicação inclui um CRUD básico para um modelo de notícias para uma página web sobre reviews de jogos.

## Tecnologias Utilizadas

- Node.js
- Express
- TypeScript
- Mongoose
- MongoDB

## Uso

A aplicação inclui os seguintes endpoints:

/homepage
/newspage
/reviewspage

### Exemplos de Requisições

GET /homepage - Pega todos os itens em homepage

GET http://localhost:3000/homepage

POST /homepage - Cria um item em homepage

POST http://localhost:3000/homepage

"Content-Type: application/json" -d '{
"alt": "alt para imagem",
"url": "https://wallpapers.com/images/",
"title": "Nova Notícia",
"description": "Descrição da nova notícia",
"slug": "nova-noticia"
"textButton": "Leia mais...",  
}

PUT /newspage/:id

PUT http://localhost:3000/newspage/{id}

"Content-Type: application/json" -d '{
"title": "Notícia Atualizada",
"description": "Descrição atualizada",
"slug": "noticia-atualizada"
}'

DELETE /reviewspage/:id

DELETE http://localhost:3000/reviewspage/{id}

## Estrutura de Código

### Classe App

A classe App é responsável por configurar a aplicação Express, conectar ao banco de dados MongoDB e inicializar as rotas.

### Classe Routes

A classe Routes define as rotas principais da aplicação.

### Classe HomeCardRouter, NewsRouter, ReviewsRouter

A classe HomeCardRouter, NewsRouter, ReviewsRouter define as rotas para os modelos da aplicação, incluindo os métodos GET, POST, PUT e DELETE.

### Classe HomeCardController, NewsController, ReviewsController

A classe HomeCardController, NewsController, ReviewsController contém a lógica de manipulação de dados para os modelos.
