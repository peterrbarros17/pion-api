import e, { Application, NextFunction, Request, Response } from "express";
import dbConnect from "../config/dbConnect.js";
import Routes from "../routes/Routes.js";
import manipulation404 from "../middlewares/manipulation404.js";
import manipulationErrors from "../middlewares/manipulationErros.js";

class App {
  public app: Application;

  constructor() {
    this.app = e();
    this.setDatabaseMiddleware();
    this.setRoutes();
  }

  public listen(PORT: string | number): void {
    this.app.listen(PORT, async () => {
      console.log(`Server running in http://localhost:${PORT}`);
      try {
        await dbConnect();
        console.log("Conexão com o DB, ok!");
      } catch (err) {
        console.error("Erro ao conectar ao DB", err);
      }
    });
  }

  private setDatabaseMiddleware(): void {
    this.app.use(async (req: Request, res: Response, next: NextFunction) => {
      if (req.path === "/") {
        return next();
      }

      try {
        await dbConnect();
        next();
      } catch (err) {
        next(err);
      }
    });
  }

  private setRoutes(): void {
    new Routes(this.app).initRoutes();
    this.setManipulationErrors();
  }

  private setManipulationErrors(): void {
    this.app.use(manipulation404);
    this.app.use(manipulationErrors);
  }
}

export default App;
