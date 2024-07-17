import { Request, Response, NextFunction } from "express";
import NotFound from "../errs/NotFound.js";

function manipulation404(req: Request, res: Response, next: NextFunction) {
  const error404 = new NotFound();
  next(error404);
}
export default manipulation404;
