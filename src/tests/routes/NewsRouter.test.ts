import "dotenv/config.js";
import request from "supertest";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import App from "../../app/App.js";

let server: App;
let httpServer: any;

beforeEach(() => {
  const PORT = 3000;
  server = new App();
  httpServer = server.app.listen(PORT);
});

afterEach(() => {
  httpServer.close();
});

describe("Method GET post on /newspage", () => {
  it("return a list of news", async () => {
    const res = await request(server.app)
      .get("/newspage")
      .set("Accept", "application/json")
      .expect("content-type", /json/)
      .expect(200);
    expect(res.body[0].slug).toEqual("diablo");
  });
});

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmJiYzIzZDQ5NTI1ODQ2MzFjYzFlNzgiLCJpYXQiOjE3MjY4NDQ0NDYsImV4cCI6MTcyNjg0ODA0Nn0.gF_bgS1WdfPIj9xGJLlwzUr4xutw4QzdIXaJSOwo1n4";

let idResponse: string;
describe("Method POST on /newspage", () => {
  it("create a new post", async () => {
    const res = await request(server.app)
      .post("/newspage")
      .set("Authorization", `Bearer ${token}`)
      .send({
        title: "Frost Punk 2",
        description:
          "Descubra um jogo de sobrevivência de cidade ambientado 30 anos após uma nevasca apocalíptica que devastou a Terra.",
        slug: "frost-punk-2",
      })
      .expect(201);

    idResponse = res.body.news._id;
  });
  it("not add anything when passing the empty body", async () => {
    await request(server.app)
      .post("/newspage")
      .set("Authorization", `Bearer ${token}`)
      .send({})
      .expect(400);
  });
});

describe("Method GET on /newspage/id", () => {
  it("return the post selected", async () => {
    await request(server.app).get(`/newspage/${idResponse}`).expect(200);
  });
});

describe("Method DELETE on /newspage/id", () => {
  it("delete new post added", async () => {
    await request(server.app)
      .delete(`/newspage/${idResponse}`)
      .set("Authorization", `Bearer ${token}`)
      .expect(200);
  });
});
