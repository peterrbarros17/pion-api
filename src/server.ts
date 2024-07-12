import "dotenv/config.js";
import App from "./app/App.js";

const PORT = 3000 || process.env.DB_CONNECTION_STRING;

const appInstance = new App();

appInstance.listen(PORT);
