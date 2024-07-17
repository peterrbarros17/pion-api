import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import IncorrectRequest from "../errs/IncorrectRequest.js";
import ValidationError from "../errs/ValidationError.js";
import NotFound from "../errs/NotFound.js";
import ErrorBase from "../errs/ErrorBase.js";

export default function manipulationErrors(
  erro: unknown,
  _: Request,
  res: Response,
  next: NextFunction
) {
  if (erro instanceof mongoose.Error.CastError) {
    res;
    new IncorrectRequest().sendResponse(res);
  } else if (erro instanceof mongoose.Error.ValidationError) {
    new ValidationError(erro).sendResponse(res);
  } else if (erro instanceof NotFound) {
    erro.sendResponse(res);
  } else {
    new ErrorBase().sendResponse(res);
  }
}
