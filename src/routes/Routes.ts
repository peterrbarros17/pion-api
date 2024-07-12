import { Application, Request, Response, json } from "express";
import HomeCardRouter from "./HomeCardRouter.js";
import NewsRouter from "./NewsRouter.js";
import ReviewsRouter from "./ReviewsRouter.js";

class Routes {
  constructor(private app: Application) {}

  private setupRoutes(): void {
    this.app.route("/").get(this.handleRootRequest);
    this.app.use(json(), new HomeCardRouter().getRouterHomeCard());
    this.app.use(json(), new NewsRouter().getRouterNews());
    this.app.use(json(), new ReviewsRouter().getRouterReviews());
  }

  private handleRootRequest(_: Request, res: Response): void {
    const htmlResponse = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Links Page</title>
    </head>
    <body>
        <h1>Welcome</h1>
        <p>Click the links below:</p>
        <ul>
            <li><a href="/homepage">Homepage</a></li>
            <li><a href="/newspage">Newspage</a></li>
            <li><a href="/reviewspage">Reviewspage</a></li>
        </ul>
    </body>
    </html>
  `;
    res.status(200).send(htmlResponse);
  }

  public initRoutes() {
    this.setupRoutes();
  }
}
export default Routes;
