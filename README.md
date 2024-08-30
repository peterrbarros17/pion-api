# Pion API

API desenvolvida para o blog de reviews de jogos digitais.

## Descrição

Este projeto é uma API RESTful construída com Node.js, Express, TypeScript, MongoDB e Mongoose. Ele oferece endpoints para gerenciar conteúdo de um blog de jogos, permitindo operações CRUD (Create, Read, Update, Delete) em várias páginas, como a homepage e a página de notícias.

## Funcionalidades

- **OOP:** Implementação de modelo orientado a objetos.
- **ODM:** Utilização do Mongoose para modelagem de dados no MongoDB.
- **Middlewares:** Tratamento de requisições, parsing de JSON e gerenciamento de erros.
- **Autenticação:** Integração com JWT para proteção de rotas e controle de acesso.
- **Deploy:** Hospedagem na Vercel.

## Endpoints

- `GET /homepage`: Retorna todos os itens da homepage.
- `GET /homepage/:id`: Retorna um item específico da homepage pelo ID.
- `POST /homepage`: Cria um novo item na homepage.
- `PUT /newspage/:id`: Atualiza um item na página de notícias.
- `DELETE /reviewspage/:id`: Deleta um item na página de reviews.

## Instalação

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/peterrbarros17/pion-api.git
3. ```bash
   cd-pion-api
4. ```bash
   npm install

5. Configure as variáveis de ambiente (MongoDB URI, JWT Secret, etc.).

6. Inicie o servidor:
```bash
   npm run dev
