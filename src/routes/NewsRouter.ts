import { Router } from "express";
import NewsController from "../controllers/NewsController.js";
import authenticateJwt from "../middlewares/authenticateJwt.js";

class NewsRouter {
  private app: Router;

  constructor() {
    this.app = Router();
    this.initRoutes();
  }

  private initRoutes(): void {
    this.app.get("/newspage", NewsController.getAll);
    this.app.get("/newspage/:id", NewsController.getById);
    this.app.post("/newspage", authenticateJwt, NewsController.create);
    this.app.put("/newspage/:id", authenticateJwt, NewsController.update);
    this.app.delete("/newspage/:id", authenticateJwt, NewsController.delete);
  }

  public getRouterNews(): Router {
    return this.app;
  }
}

export default NewsRouter;
