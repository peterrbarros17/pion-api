import { Request, Response } from "express";
import News from "../models/NewsModel.js";

class NewsController {
  public static async getAll(_: Request, res: Response): Promise<void> {
    try {
      const news = await News.find({});
      res.status(200).json(news);
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).json({ message: `${err.message} - fail request` });
      }
    }
  }
  public static async create(req: Request, res: Response): Promise<void> {
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
      if (err instanceof Error) {
        res
          .status(500)
          .json({ message: `${err.message} - failed to register` });
      }
    }
  }
  public static async update(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      await News.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "updated" });
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).json({ message: `${err.message} - failed to update` });
      }
    }
  }
  public static async delete(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      await News.findByIdAndDelete(id);
      res.status(200).json({ message: "deleted" });
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).json({ message: `${err.message} - failed to deleted` });
      }
    }
  }
}

export default NewsController;
