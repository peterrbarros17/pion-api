import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";

const SALT_ROUNDS = 10;

function signToken(userId: string): string {
  return jwt.sign({ userId }, "secret_key", { expiresIn: "1h" });
}

class LoginController {
  public async login(req: Request, res: Response): Promise<any> {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).send("Invalid credentials");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).send("Invalid credentials");
    }

    res.send({ token: signToken(String(user._id)) });
  }

  public async register(req: Request, res: Response): Promise<any> {
    const username =
      typeof req.body?.username === "string" ? req.body.username.trim() : "";
    const password =
      typeof req.body?.password === "string" ? req.body.password : "";

    if (!username || !password) {
      return res.status(400).send("username and password are required");
    }
    if (password.length < 6) {
      return res.status(400).send("password must be at least 6 characters");
    }

    const existing = await User.findOne({ username });
    if (existing) {
      return res.status(409).send("username already taken");
    }

    const hash = await bcrypt.hash(password, SALT_ROUNDS);
    const user = await User.create({ username, password: hash });

    res.status(201).json({
      username: user.username,
      token: signToken(String(user._id)),
    });
  }
}

export default LoginController;
