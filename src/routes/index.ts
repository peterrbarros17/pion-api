import { Application, Request, Response, json } from "express";
import home from "./homeRouter.js";
import newPost from "./newPost.js";

const routes = (app: Application) => {
  app
    .route("/")
    .get((_: Request, res: Response) => res.status(200).send("Home Page"));

  app.use(json(), home);
  app.use(json(), newPost);
};

export default routes;
