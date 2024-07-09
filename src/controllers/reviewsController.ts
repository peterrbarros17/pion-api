import { Request, Response } from "express";
import Reviews from "../models/reviews.js";

class ReviewsController {
  static async getAll(_: Request, res: Response) {
    try {
      const reviews = await Reviews.find({});
      res.status(200).json(reviews);
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).json({ message: `${err.message} - failed request` });
      }
    }
  }
  static async create(req: Request, res: Response) {
    const data = await req.body;
    try {
      if (Array.isArray(data)) {
        const newReviews = await Reviews.insertMany(data);
        res.status(201).json({ message: "registered!", Review: newReviews });
      } else {
        const newReview = new Reviews(data);
        await newReview.save();
        res.status(201).json({ newReview });
      }
    } catch (err) {
      if (err instanceof Error) {
        res
          .status(500)
          .json({ message: `${err.message} - failed to register` });
      }
    }
  }
  static async update(req: Request, res: Response) {
    try {
      const id = req.params.id;
      await Reviews.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "updated" });
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).json({ message: `${err.message} - failed to update` });
      }
    }
  }
  static async delete(req: Request, res: Response) {
    try {
      const id = req.params.id;
      await Reviews.findByIdAndDelete(id);
      res.status(200).json({ message: "deleted" });
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).json({ message: `${err.message} - failed to deleted` });
      }
    }
  }
}

export default ReviewsController;
