import { Router } from "express";
import ReviewsController from "../controllers/ReviewsController.js";
import authenticateJwt from "../middlewares/authenticateJwt.js";

class ReviewsRouter {
  private app: Router;

  constructor() {
    this.app = Router();
    this.initRoutes();
  }

  private initRoutes(): void {
    this.app.get("/reviewspage", ReviewsController.filter);
    this.app.get("/reviewspage/:id", ReviewsController.getById);
    this.app.post("/reviewspage", authenticateJwt, ReviewsController.create);
    this.app.put("/reviewspage/:id", authenticateJwt, ReviewsController.update);
    this.app.delete(
      "/reviewspage/:id",
      authenticateJwt,
      ReviewsController.delete
    );
  }

  public getRouterReviews(): Router {
    return this.app;
  }
}

export default ReviewsRouter;
