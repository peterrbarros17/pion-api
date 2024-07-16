import { Router } from "express";
import NewsController from "../controllers/NewsController.js";

class NewsRouter {
  private app: Router;

  constructor() {
    this.app = Router();
    this.initRoutes();
  }

  private initRoutes(): void {
    this.app.get("/newspage", NewsController.getAll);
    this.app.get("/newspage/:id", NewsController.getById);
    this.app.post("/newspage", NewsController.create);
    this.app.put("/newspage/:id", NewsController.update);
    this.app.delete("/newspage/:id", NewsController.delete);
  }

  public getRouterNews(): Router {
    return this.app;
  }
}

export default NewsRouter;
