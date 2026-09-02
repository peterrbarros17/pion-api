import "dotenv/config.js";
import App from "./app/App.js";

const PORT = Number(process.env.PORT) || 3000;

const appInstance = new App();

if (!process.env.VERCEL) {
  appInstance.listen(PORT);
}

export default appInstance.app;
