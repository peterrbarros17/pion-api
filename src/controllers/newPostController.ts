import { Request, Response } from "express";
import NewPost from "../models/newsMode.js";

class NewPostController {
  static async listarNewPost(_: Request, res: Response) {
    try {
      const newPostPage = await NewPost.find({});
      res.status(200).json(newPostPage);
    } catch (err) {
      if (err instanceof Error) {
        res
          .status(500)
          .json({ message: `${err.message} - falha na requisição` });
      }
    }
  }
  static async cadastrarNewPost(req: Request, res: Response) {
    const data = await req.body;
    try {
      if (Array.isArray(data)) {
        const newsPost = await NewPost.insertMany(data);
        res
          .status(201)
          .json({ message: "news post cadastrados!", NewPost: newsPost });
      } else {
        const newsPost = new NewPost(data);
        await newsPost.save();
        res.status(201).json({ newsPost });
      }
    } catch (err) {
      if (err instanceof Error) {
        res
          .status(500)
          .json({ message: `${err.message} - falha ao cadastrar new post` });
      }
    }
  }
  static async excluirNewPost(req: Request, res: Response) {
    try {
      const id = req.params.id;
      await NewPost.findByIdAndDelete(id);
      res.status(200).json({ message: "NewPost removida" });
    } catch (err) {
      if (err instanceof Error) {
        res
          .status(500)
          .json({ message: `${err.message} - falha ao excluir new post` });
      }
    }
  }
}

export default NewPostController;
