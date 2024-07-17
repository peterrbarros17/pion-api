import { Response } from "express";

class ErrorBase extends Error {
  constructor(
    message: string = "Internal server error",
    public status: number = 500
  ) {
    super();
    this.message = message;
    this.status;
  }

  public sendResponse(res: Response): void {
    res.status(this.status).send({
      message: this.message,
      status: this.status,
    });
  }
}

export default ErrorBase;
