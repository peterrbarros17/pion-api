import { Application, Request, Response, json } from "express";
import home from "./homeCardRouter.js";
import news from "./newsRouter.js";
import reviews from "./reviewsRouter.js";

const routes = (app: Application) => {
  const htmlResponse = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Links Page</title>
  </head>
  <body>
      <h1>Welcome</h1>
      <p>Click the links below:</p>
      <ul>
          <li><a href="/homepage">Homepage</a></li>
          <li><a href="/newspage">Newspage</a></li>
          <li><a href="/reviewspage">Reviewspage</a></li>
      </ul>
  </body>
  </html>
`;
  app
    .route("/")
    .get((_: Request, res: Response) => res.status(200).send(htmlResponse));

  app.use(json(), home);
  app.use(json(), news);
  app.use(json(), reviews);
};

export default routes;
