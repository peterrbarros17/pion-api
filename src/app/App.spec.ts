import "dotenv/config";
import { describe, it, expect, beforeEach } from "vitest";
import App from "./App";

describe("App", () => {
  let appInstance: App;

  beforeEach(() => {
    appInstance = new App();
  });
  it("should instantiate the express app", () => {
    expect(appInstance).toBeInstanceOf(App);
  });
});
