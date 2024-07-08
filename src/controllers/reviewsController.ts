import { Request, Response } from "express";
import Review from "../models/reviewsModel.js";

class ReviewController {
  static async listarReviews(_: Request, res: Response) {
    try {
      const reviewPage = await Review.find({});
      res.status(200).json(reviewPage);
    } catch (err) {
      if (err instanceof Error) {
        res
          .status(500)
          .json({ message: `${err.message} - falha na requisição` });
      }
    }
  }
  static async cadastrarReviews(req: Request, res: Response) {
    const data = await req.body;
    try {
      if (Array.isArray(data)) {
        const novasReviews = await Review.insertMany(data);
        res
          .status(201)
          .json({ message: "reviews cadastradas!", Review: novasReviews });
      } else {
        const novoReview = new Review(data);
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
      await Review.findByIdAndDelete(id);
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

export default ReviewController;
