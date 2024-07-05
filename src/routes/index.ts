import { Application, Request, Response, json } from "express";
import home from "./homeRouter.js";

const routes = (app: Application) => {
  app
    .route("/")
    .get((_: Request, res: Response) => res.status(200).send("Home Page"));

  app.use(json(), home);
};

export default routes;
