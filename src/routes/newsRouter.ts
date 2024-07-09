import { Router } from "express";
import NewsController from "../controllers/newsController.js";

const route = Router();

route.get("/newspage", NewsController.getAll);
route.post("/newspage", NewsController.create);
route.put("/newspage/:id", NewsController.update);
route.delete("/newspage/:id", NewsController.delete);

export default route;
