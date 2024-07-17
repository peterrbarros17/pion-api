# Sistema de CRUD com MongoDB e API RESTful

Este projeto é uma aplicação Node.js utilizando Express, TypeScript, MongoDB e Mongoose.

A aplicação inclui:

- Modelo orientado a objetos (OOP).
- ODM (Object Data Modeling) para documentos MongoDB.
- Rotas que incluem os métodos GET, POST, PUT e DELETE com seus respectivos endpoints.
- Middlewares que lidam com as requisições, fazendo o parsing de JSON e tratamento de erros nas rotas.

## Deployment

Vercel: https://pion-api.vercel.app/

### Exemplos de Requisições

A aplicação inclui os seguintes endpoints:

/homepage <br>
/newspage <br>
/reviewspage <br>

GET /homepage - **Pega todos os itens em homepage**

GET http://localhost:3000/homepage

GET /homepage/:id - **Pega o item em homepage por ID**

GET http://localhost:3000/homepage/:id

##

POST /homepage - **Cria um item em homepage**

POST http://localhost:3000/homepage <br>

{ <br>
"alt": "alt para imagem", <br>
"url": "https://imagem.com", <br>
"title": "Nova Notícia", <br>
"description": "Descrição da nova notícia", <br>
"slug": "nova-noticia" <br>
"textButton": "Leia mais...", <br>
}

##

PUT /newspage/:id - **Atualiza dados de um item selecionado**

PUT http://localhost:3000/newspage/:id

{ <br>
"title": "Notícia Atualizada", <br>
"description": "Descrição atualizada", <br>
"slug": "noticia-atualizada" <br>
}

##

DELETE /reviewspage/:id - **Deleta um item selecionado**

DELETE http://localhost:3000/reviewspage/:id
