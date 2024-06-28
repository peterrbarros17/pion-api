import "dotenv/config.js";
import app from "./src/app.js";

const PORT = process.env.PORT || process.env.DB_CONNECTION_STRING;

app.listen(PORT, () => {
  console.log("Server online");
});
