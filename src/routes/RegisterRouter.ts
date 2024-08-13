import { Router } from "express";
import authenticateJwt from "../middlewares/authenticateJwt.js";
import RegisterController from "../controllers/RegisterController.js";

class RegisterRouter {
  private app: Router;

  constructor() {
    this.app = Router();
    this.initRoutes();
  }

  private initRoutes(): void {
    this.app.post("/register", new RegisterController().register);
  }

  public getRouterRegister(): Router {
    return this.app;
  }
}

export default RegisterRouter;
