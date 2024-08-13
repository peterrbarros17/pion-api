import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const authenticateJwt = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, "secret_key", (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    user;
    next();
  });
};

export default authenticateJwt;
