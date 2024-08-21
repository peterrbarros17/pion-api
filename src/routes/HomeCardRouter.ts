import { Router } from "express";
import HomeCardController from "../controllers/HomeCardController.js";
import authenticateJwt from "../middlewares/authenticateJwt.js";

class HomeCardRouter {
  private app: Router;

  constructor() {
    this.app = Router();
    this.initRoutes();
  }

  private initRoutes(): void {
    this.app.get("/homepage", HomeCardController.getAll);
    this.app.get("/homepage/:id", HomeCardController.getById);
    this.app.post("/homepage", authenticateJwt, HomeCardController.create);
    this.app.put("/homepage/:id", authenticateJwt, HomeCardController.update);
    this.app.delete(
      "/homepage/:id",
      authenticateJwt,
      HomeCardController.delete
    );
    this.app.get("/search", HomeCardController.search);
  }

  public getRouterHomeCard(): Router {
    return this.app;
  }
}

export default HomeCardRouter;
