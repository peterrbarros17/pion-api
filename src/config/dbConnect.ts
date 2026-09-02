import mongoose, { Connection } from "mongoose";

const SERVER_SELECTION_MS = 5000;

type MongooseCache = {
  conn: Connection | null;
  promise: Promise<Connection> | null;
};

const globalForMongoose = globalThis as typeof globalThis & {
  mongooseCache?: MongooseCache;
};

const cache: MongooseCache = globalForMongoose.mongooseCache ?? {
  conn: null,
  promise: null,
};

globalForMongoose.mongooseCache = cache;

async function dbConnect(): Promise<Connection> {
  const uri = process.env.DB_CONNECTION_STRING;

  if (!uri) {
    throw new Error("DB_CONNECTION_STRING is not defined");
  }

  if (cache.conn?.readyState === 1) {
    return cache.conn;
  }

  if (!cache.promise) {
    cache.promise = mongoose
      .connect(uri, {
        bufferCommands: false,
        serverSelectionTimeoutMS: SERVER_SELECTION_MS,
        connectTimeoutMS: SERVER_SELECTION_MS,
      })
      .then((instance) => instance.connection);
  }

  try {
    cache.conn = await cache.promise;
    return cache.conn;
  } catch (err) {
    cache.promise = null;
    cache.conn = null;
    throw err;
  }
}

export default dbConnect;
