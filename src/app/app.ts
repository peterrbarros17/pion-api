import e from "express";
import dbConnect from "../config/dbConnect.js";
import routes from "../routes/index.js";

const app = e();

const conexao = await dbConnect();

conexao.on("error", () => {
  console.log("Erro ao conectar ao DB");
});

conexao.once("open", () => {
  console.log("Conexão com o DB, ok!");
});

routes(app);

export default app;
