import { Error } from "mongoose";
import IncorrectRequest from "./IncorrectRequest.js";

class ValidationError extends IncorrectRequest {
  constructor(err: Error.ValidationError) {
    const erroMessage = Object.values(err.errors)
      .map((erro) => erro.message)
      .join("; ");
    super(`The errors below were found: ${erroMessage}`);
  }
}

export default ValidationError;
