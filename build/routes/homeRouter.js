import { Router } from "express";
import HomeController from "../controllers/homeController.js";
const route = Router();
route.get("/homepage", HomeController.listarReview);
route.post("/homepage", HomeController.cadastrarReview);
route.delete("/homepage/:id", HomeController.excluirReview);
export default route;
