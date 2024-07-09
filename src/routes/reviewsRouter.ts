import { Router } from "express";
import ReviewsController from "../controllers/reviewsController.js";

const route = Router();

route.get("/reviewspage", ReviewsController.getAll);
route.post("/reviewspage", ReviewsController.create);
route.put("/reviews/:id", ReviewsController.update);
route.delete("/reviewspage/:id", ReviewsController.delete);

export default route;
