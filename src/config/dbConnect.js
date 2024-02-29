import mongoose from "mongoose";

async function dbConnect() {
  try {
    mongoose.connect(process.env.DB_CONNECTION_STRING);

    return mongoose.connection;
  } catch (error) {
    throw new Error("Erro ao conectar ao DB", error);
  }
}

export default dbConnect;
