import "dotenv/config.js";
import app from "./app/app.js";

const PORT: string | undefined =
  process.env.PORT || process.env.DB_CONNECTION_STRING;

app.listen(PORT, () => {
  console.log(`Server running in http://localhost${PORT}/`);
});
