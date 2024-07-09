import { Router } from "express";
import HomeCardController from "../controllers/homeCardController.js";

const route = Router();

route.get("/homepage", HomeCardController.getAll);
route.post("/homepage", HomeCardController.create);
route.put("/homepage/:id", HomeCardController.update);
route.delete("/homepage/:id", HomeCardController.delete);

export default route;
