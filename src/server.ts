import "dotenv/config.js";
import app from "./app/app.js";

const PORT: string | number = process.env.DB_CONNECTION_STRING || 3000;

app.listen(PORT, () => {
  console.log(`Server running in http://localhost${PORT}/`);
});
