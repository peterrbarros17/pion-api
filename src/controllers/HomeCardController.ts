import { NextFunction, Request, Response } from "express";
import { HomeCard } from "../models/index.js";
import NotFound from "../errs/NotFound.js";

class HomeCardController {
  public static async getAll(
    _: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const homeCards = await HomeCard.find({});
      res.status(200).json(homeCards);
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
      const homeCardID = req.params.id;
      const homeCard = await HomeCard.findById(homeCardID);
      if (homeCard !== null) {
        res.status(200).json({ homeCard });
      } else {
        next(new NotFound("homecard id not found"));
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
    try {
      const newHomeCard = await HomeCard.create(req.body);
      res.status(201).json({ message: "registered", HomeCard: newHomeCard });
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
      const resHomecard = await HomeCard.findByIdAndUpdate(id, req.body);
      if (resHomecard !== null) {
        res.status(200).json({ message: "updated" });
      } else {
        next(new NotFound("home card id not found"));
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
      const resHomeCard = await HomeCard.findByIdAndDelete(id);
      if (resHomeCard !== null) {
        res.status(200).json({ message: "deleted" });
      } else {
        next(new NotFound("home card id not found"));
      }
    } catch (err) {
      next(err);
    }
  }
}

export default HomeCardController;
