import { NextFunction, Request, Response } from "express";
import { Reviews } from "../models/index.js";
import NotFound from "../errs/NotFound.js";

class ReviewsController {
  public static async getAll(
    _: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const reviews = await Reviews.find({});
      res.status(200).json(reviews);
    } catch (err) {
      next(err);
    }
  }
  public static async getById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const id = req.params.id;
      const review = await Reviews.findById(id);
      if (review !== null) {
        res.status(200).json({ review });
      } else {
        next(new NotFound("review id not found"));
      }
    } catch (err) {
      next(err);
    }
  }
  public static async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
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
      next(err);
    }
  }
  public static async update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const id = req.params.id;
      const resReviews = await Reviews.findByIdAndUpdate(id, req.body);
      if (resReviews !== null) {
        res.status(200).json({ message: "updated" });
      } else {
        next(new NotFound("reviews id not found"));
      }
    } catch (err) {
      next(err);
    }
  }
  public static async delete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const id = req.params.id;
      const resReviews = await Reviews.findByIdAndDelete(id);
      if (resReviews !== null) {
        res.status(200).json({ message: "deleted" });
      } else {
        next(new NotFound("reviews id not found"));
      }
    } catch (err) {
      next(err);
    }
  }
}

export default ReviewsController;
