import { Request, Response } from "express";
import HomeCard from "../models/homeCard.js";

class HomeCardController {
  static async getAll(_: Request, res: Response) {
    try {
      const homeCards = await HomeCard.find({});
      res.status(200).json(homeCards);
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).json({ message: `${err.message} - fail request` });
      }
    }
  }
  static async create(req: Request, res: Response) {
    try {
      const newHomeCard = await HomeCard.create(req.body);
      res.status(201).json({ message: "registered", HomeCard: newHomeCard });
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
      await HomeCard.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "updated" });
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).json({ message: `${err.message} - failed to updated` });
      }
    }
  }
  static async delete(req: Request, res: Response) {
    try {
      const id = req.params.id;
      await HomeCard.findByIdAndDelete(id);
      res.status(200).json({ message: "deleted" });
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).json({ message: `${err.message} - failed to deleted` });
      }
    }
  }
}

export default HomeCardController;
