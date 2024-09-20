import { NextFunction, Request, Response } from "express";
import { News } from "../models/index.js";
import NotFound from "../errs/NotFound.js";

class NewsController {
  public static async getAll(
    _: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const news = await News.find({});
      res.status(200).json(news);
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
      const news = await News.findById(id);
      if (news !== null) {
        res.status(200).json({ news });
      } else {
        next(new NotFound("news id not found"));
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
        const news = await News.insertMany(data);
        res.status(201).json({ message: "registered", News: news });
      } else {
        const news = new News(data);
        await news.save();
        res.status(201).json({ news });
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
      const resNews = await News.findByIdAndUpdate(id, req.body);
      if (resNews !== null) {
        res.status(204).json({ message: "updated" });
      } else {
        next(new NotFound("news id not found"));
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
      const resNews = await News.findByIdAndDelete(id);
      if (resNews !== null) {
        res.status(200).json({ message: "deleted" });
      } else {
        next(new NotFound("news id not found"));
      }
    } catch (err) {
      next(err);
    }
  }
}

export default NewsController;
