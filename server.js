import "dotenv/config.js";
import app from "./src/app.js";

const PORT = process.env.DB_CONNECTION_STRING || 3000;

app.listen(PORT, () => {
  console.log("Server online");
});
