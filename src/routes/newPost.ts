import { Router } from "express";
import NewPostController from "../controllers/newPostController.js";

const route = Router();

route.get("/newspage", NewPostController.listarNewPost);
route.post("/newspage", NewPostController.cadastrarNewPost);
route.delete("/newspage/:id", NewPostController.excluirNewPost);

export default route;
