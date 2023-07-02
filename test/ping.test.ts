import request from "supertest";
import app from "../src/api/app";

describe("test ping route", () => {
    test("should return ping message", async () => {
        const res = await request(app).get("/ping");
        expect(res.body).toEqual("Dogshouseservice.Version1.0.1");
    })
})