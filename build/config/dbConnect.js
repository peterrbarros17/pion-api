import mongoose, { connect, Error } from "mongoose";
async function dbConnect() {
    try {
        connect(process.env.DB_CONNECTION_STRING);
        return mongoose.connection;
    }
    catch (err) {
        throw new Error("Erro ao conectar ao DB");
    }
}
export default dbConnect;
