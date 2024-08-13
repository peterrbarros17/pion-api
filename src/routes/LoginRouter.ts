import { Router } from "express";
import LoginController from "../controllers/LoginController.js";

class LoginRouter {
  private app: Router;

  constructor() {
    this.app = Router();
    this.initRoutes();
  }

  private initRoutes(): void {
    this.app.post("/login", new LoginController().login);
  }

  public getRouterLogin(): Router {
    return this.app;
  }
}

export default LoginRouter;
