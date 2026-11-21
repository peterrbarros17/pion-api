# Pion API

REST API that serves content for [Pion Review](https://github.com/peterrbarros17/pion-review), a Next.js blog about retro and current games.

It stores featured homepage posts, news, and reviews in MongoDB, and exposes them as JSON so the frontend can list, search, and render slug-based pages. Write operations are protected with JWT.

- Frontend: [pion-review](https://github.com/peterrbarros17/pion-review) · [live site](https://pion-review.vercel.app)
- API (this repo): [pion-api](https://github.com/peterrbarros17/pion-api) · [live API](https://pion-api.vercel.app)

## Purpose

Built as a personal / portfolio project to practice backend development: Express with TypeScript, MongoDB/Mongoose, JWT auth, CORS, error handling, and deploying a Node API on Vercel.

The blog UI is in Portuguese (`pt-BR`). This API is the content backend behind it.

## Features

- CRUD for homepage cards, news, and reviews
- Search across all collections by title (`GET /search?title=`)
- Review lookup by slug (`GET /reviewspage?slug=`)
- JWT login; create / update / delete routes require `Authorization: Bearer <token>`
- CORS limited to the Pion Review production origin
- Centralized 404 and error middleware

## Tech stack

| Area | Tools |
| --- | --- |
| Runtime | Node.js, TypeScript |
| Framework | Express 4 |
| Database | MongoDB + Mongoose |
| Auth | JWT (`jsonwebtoken`), password hashing with bcrypt |
| CORS | `cors` (origin: `https://pion-review.vercel.app`) |
| Tests | Vitest, Supertest |
| Dev | `tsx` (watch), dotenv |
| Deploy | Vercel (Express serverless) |

## Prerequisites

- Node.js 18 or later
- npm
- A MongoDB instance (local or Atlas) and its connection string

## Getting started

```bash
git clone https://github.com/peterrbarros17/pion-api.git
cd pion-api
npm install
```

Create a `.env` file in the project root:

```env
DB_CONNECTION_STRING=mongodb://localhost:27017/pion
```

Start the development server:

```bash
npm run dev
```

The API listens on [http://localhost:3000](http://localhost:3000). Open `/` for a simple index of the public list endpoints.

To run the blog against a local API, point `src/lib/getPosts.ts` in [pion-review](https://github.com/peterrbarros17/pion-review) at `http://localhost:3000`. CORS currently allows only the production frontend origin, so you may need to add `http://localhost:3000` (the Next.js origin) to `src/routes/Routes.ts` while developing locally.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the API with `tsx watch` (hot reload) |
| `npm run build` | Compile TypeScript to `./build` |
| `npm start` | Run the compiled server (`node ./build/server.js`) |
| `npm test` | Run tests with Vitest |
| `npm run test:coverage` | Run tests with coverage |

## Spec-driven development

This project uses [GitHub Spec Kit](https://github.com/github/spec-kit) to plan
bounded features against the existing API. Install its CLI with Python 3.11+
and [uv](https://docs.astral.sh/uv/), then initialize the Copilot integration
from the repository root:

```bash
uv tool install specify-cli
specify init --here --force --integration copilot
```

Review the generated files before accepting them. The initializer installs the
Spec Kit project files and Copilot skills; it may replace managed files such
as `.specify/memory/constitution.md`. If it does, use
`/speckit-constitution` to restore the project principles in that file. The
principles are also recorded in [Copilot instructions](.github/copilot-instructions.md).

For each feature, use the installed `/speckit-specify`, `/speckit-clarify`,
`/speckit-plan`, `/speckit-tasks`, `/speckit-analyze`, `/speckit-implement`,
and `/speckit-converge` skills in Copilot chat, reviewing each artifact before
moving on. Establish or update the project constitution with
`/speckit-constitution` when needed.

## Project structure

```
src/
  app/           # Express app bootstrap
  config/        # MongoDB connection
  controllers/   # Route handlers
  errs/          # Custom error classes
  middlewares/   # JWT auth, 404, error handling
  models/        # Mongoose schemas
  routes/        # Express routers
  tests/         # Vitest tests
  server.ts      # Entry point
```

## Endpoints

Unless noted, mutating routes require a Bearer token from `POST /login`.

### Auth

| Method | Path | Auth | Description |
| --- | --- | --- | --- |
| `POST` | `/login` | No | Body: `{ "username", "password" }`. Returns `{ "token" }`. |
| `POST` | `/register` | No | Body: `{ "username", "password" }`. Creates a user (password hashed with bcrypt) and returns `{ "username", "token" }`. |

### Homepage (featured posts)

| Method | Path | Auth | Description |
| --- | --- | --- | --- |
| `GET` | `/homepage` | No | List all homepage cards |
| `GET` | `/homepage/:id` | No | Get one card by MongoDB id |
| `POST` | `/homepage` | Yes | Create a card |
| `PUT` | `/homepage/:id` | Yes | Update a card |
| `DELETE` | `/homepage/:id` | Yes | Delete a card |

### News

| Method | Path | Auth | Description |
| --- | --- | --- | --- |
| `GET` | `/newspage` | No | List all news |
| `GET` | `/newspage/:id` | No | Get one news item by id |
| `POST` | `/newspage` | Yes | Create one item or insert many (array body) |
| `PUT` | `/newspage/:id` | Yes | Update a news item |
| `DELETE` | `/newspage/:id` | Yes | Delete a news item |

### Reviews

| Method | Path | Auth | Description |
| --- | --- | --- | --- |
| `GET` | `/reviewspage` | No | List all reviews |
| `GET` | `/reviewspage?slug=` | No | Get one review by slug |
| `GET` | `/reviewspage/:id` | No | Get one review by id |
| `POST` | `/reviewspage` | Yes | Create one review or insert many (array body) |
| `PUT` | `/reviewspage/:id` | Yes | Update a review |
| `DELETE` | `/reviewspage/:id` | Yes | Delete a review |

### Search

| Method | Path | Auth | Description |
| --- | --- | --- | --- |
| `GET` | `/search?title=` | No | Case-insensitive title search across homepage, news, and reviews |

## Resources used by the blog

[pion-review](https://github.com/peterrbarros17/pion-review) currently calls:

- `GET /homepage`
- `GET /newspage`
- `GET /reviewspage`
- `GET /search?title=`
- `GET /{page}?slug=` (review detail)

## Data models (high level)

**Homepage card / review:** `alt`, `url`, `title`, `description`, `slug`, `content[]` (`type`, `text`, `alt`, `src`), timestamps.

**News:** `title`, `description`, `slug`, timestamps.

**User:** `username` (unique), `password` (bcrypt hash). Used only for login.

## Deployment

The API is set up for [Vercel](https://vercel.com/) Express (zero-config). `src/server.ts` exports the Express app; locally it still listens on port 3000.

In the Vercel project:

1. Set `DB_CONNECTION_STRING` (Production and Preview) to a MongoDB Atlas URI. Localhost will not work on Vercel.
2. In Atlas **Network Access**, allow `0.0.0.0/0` (or Vercel’s egress IPs). If Atlas blocks the function, `/homepage` waits until Vercel returns **504 FUNCTION_INVOCATION_TIMEOUT**.
3. Redeploy after changing env vars.

The production frontend is allowed by CORS at `https://pion-review.vercel.app`.

## License

Private project — created for learning and portfolio use.
