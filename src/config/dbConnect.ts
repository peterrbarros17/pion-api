import mongoose, { connect, Connection, Error } from "mongoose";

async function dbConnect(): Promise<Connection> {
  try {
    connect(process.env.DB_CONNECTION_STRING as string);

    return mongoose.connection;
  } catch (err) {
    throw new Error("Erro ao conectar ao DB");
  }
}

export default dbConnect;
