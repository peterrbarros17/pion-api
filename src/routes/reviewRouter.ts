import { Router } from "express";
import ReviewController from "../controllers/reviewsController.js";

const route = Router();

route.get("/reviewpage", ReviewController.listarReviews);
route.post("/reviewpage", ReviewController.cadastrarReviews);
route.delete("/reviewpage/:id", ReviewController.excluirReview);

export default route;
