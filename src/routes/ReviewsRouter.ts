import { Router } from "express";
import ReviewsController from "../controllers/ReviewsController.js";

class ReviewsRouter {
  private app: Router;

  constructor() {
    this.app = Router();
    this.initRoutes();
  }

  private initRoutes(): void {
    this.app.get("/reviewspage", ReviewsController.filter);
    this.app.get("/reviewspage/:id", ReviewsController.getById);
    this.app.post("/reviewspage", ReviewsController.create);
    this.app.put("/reviewspage/:id", ReviewsController.update);
    this.app.delete("/reviewspage/:id", ReviewsController.delete);
  }

  public getRouterReviews(): Router {
    return this.app;
  }
}

export default ReviewsRouter;
