import { Request, Response } from "express";
import Home from "../models/homeModel.js";

class HomeController {
  static async listarReview(_: Request, res: Response) {
    try {
      const homePage = await Home.find({});
      res.status(200).json(homePage);
    } catch (err) {
      if (err instanceof Error) {
        res
          .status(500)
          .json({ message: `${err.message} - falha na requisição` });
      }
    }
  }
  static async cadastrarReview(req: Request, res: Response) {
    const data = await req.body;
    try {
      if (Array.isArray(data)) {
        const novasReviews = await Home.insertMany(data);
        res
          .status(201)
          .json({ message: "reviews cadastradas!", Home: novasReviews });
      } else {
        const novoReview = new Home(data);
        await novoReview.save();
        res.status(201).json({ novoReview });
      }
    } catch (err) {
      if (err instanceof Error) {
        res
          .status(500)
          .json({ message: `${err.message} - falha ao cadastrar review` });
      }
    }
  }
  static async excluirReview(req: Request, res: Response) {
    try {
      const id = req.params.id;
      await Home.findByIdAndDelete(id);
      res.status(200).json({ message: "Review removida" });
    } catch (err) {
      if (err instanceof Error) {
        res
          .status(500)
          .json({ message: `${err.message} - falha ao excluir review` });
      }
    }
  }
}

export default HomeController;
