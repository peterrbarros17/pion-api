import { json } from "express";
import home from "./homeRouter.js";
const routes = (app) => {
    app
        .route("/")
        .get((_, res) => res.status(200).send("Home Page"));
    app.use(json(), home);
};
export default routes;
