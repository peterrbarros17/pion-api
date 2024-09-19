import e, { Application } from "express";
import dbConnect from "../config/dbConnect.js";
import Routes from "../routes/Routes.js";
import manipulation404 from "../middlewares/manipulation404.js";
import manipulationErrors from "../middlewares/manipulationErros.js";

class App {
  public app: Application;

  constructor() {
    this.app = e();
    this.setRoutes();
    this.connectDataBase();
  }

  public listen(PORT: string | number): void {
    this.app.listen(PORT, () =>
      console.log(`Server running in http://localhost:${PORT}`)
    );
  }

  private setRoutes(): void {
    new Routes(this.app).initRoutes();
    this.setManipulationErrors();
  }

  private setManipulationErrors(): void {
    this.app.use(manipulation404);
    this.app.use(manipulationErrors);
  }

  private async connectDataBase(): Promise<any> {
    const connection = await dbConnect();

    connection.on("error", this.onDataBaseError);

    connection.once("open", this.onDataBaseOpen);
  }

  private onDataBaseError(): void {
    console.log("Erro ao conectar ao DB");
  }
  private onDataBaseOpen(): void {
    console.log("Conexão com o DB, ok!");
  }
}

export default App;
