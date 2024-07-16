import { Router } from "express";
import HomeCardController from "../controllers/HomeCardController.js";

class HomeCardRouter {
  private app: Router;

  constructor() {
    this.app = Router();
    this.initRoutes();
  }

  private initRoutes(): void {
    this.app.get("/homepage", HomeCardController.getAll);
    this.app.get("/homepage/:id", HomeCardController.getById);
    this.app.post("/homepage", HomeCardController.create);
    this.app.put("/homepage/:id", HomeCardController.update);
    this.app.delete("/homepage/:id", HomeCardController.delete);
  }

  public getRouterHomeCard(): Router {
    return this.app;
  }
}

export default HomeCardRouter;
