import { Router } from "express";
import LoginController from "../controllers/LoginController.js";

class LoginRouter {
  private app: Router;

  constructor() {
    this.app = Router();
    this.initRoutes();
  }

  private initRoutes(): void {
    const controller = new LoginController();
    this.app.post("/login", controller.login);
    this.app.post("/register", controller.register);
  }

  public getRouterLogin(): Router {
    return this.app;
  }
}

export default LoginRouter;
