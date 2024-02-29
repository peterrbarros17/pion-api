import express from "express";
import home from "./homeRouter.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Home Page"));

  app.use(express.json(), home);
};

export default routes;
