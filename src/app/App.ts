import e, { Application } from "express";
import dbConnect from "../config/dbConnect.js";
import Routes from "../routes/Routes.js";

class App {
  private app: Application;

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
