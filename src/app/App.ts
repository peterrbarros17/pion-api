import e, { Application } from "express";
import dbConnect from "../config/dbConnect.js";
import Routes from "../routes/Routes.js";

class App {
  private app: Application;

  constructor() {
    this.app = e();
    this.setRoutes();
  }

  public listen(PORT: string | number): void {
    this.app.listen(PORT, () =>
      console.log(`Server running in http://localhost:${PORT}`)
    );
  }

  private setRoutes(): void {
    new Routes(this.app).initRoutes();
  }
}

export default App;

const conexao = await dbConnect();

conexao.on("error", () => {
  console.log("Erro ao conectar ao DB");
});

conexao.once("open", () => {
  console.log("Conexão com o DB, ok!");
});
