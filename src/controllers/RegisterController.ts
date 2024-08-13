import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import User from "../models/UserModel.js";

class RegisterController {
  public async register(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        res.status(400).send("Username and password are required!");
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ username, password: hashedPassword });
      await user.save();

      res.status(201).send("User registered");
    } catch (error) {
      next(error);
    }
  }
}

export default RegisterController;
