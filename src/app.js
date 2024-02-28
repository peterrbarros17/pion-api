import express from "express";
import dbConnect from "./config/dbConnect.js";

const app = express();

const conexao = await dbConnect();

conexao.on("error", () => {
  console.log("Erro ao conectar ao DB");
});

conexao.once("open", () => {
  console.log("Conexão com o DB, ok!");
});

app.get("/", (req, res) => {
  res.status(200).send("Pion API");
});

export default app;
