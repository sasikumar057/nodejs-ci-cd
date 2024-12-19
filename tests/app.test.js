const request = require("supertest");
const express = require("express");

const app = express();
app.get("/", (req, res) => res.send("Hello, World! Your Node.js app is running!"));

describe("GET /", () => {
  it("should return the expected message", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello, World! Your Node.js app is running!");
  });
});
