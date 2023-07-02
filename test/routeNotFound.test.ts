import request from "supertest";
import app from "../src/api/app";

describe("test route not found handler",()=>{
    test("should return route not found message",async ()=>{
        const res = await request(app).get("/random");
        expect(res.status).toEqual(404);
        expect(res.body).toEqual({ message: `Cant find /random on this server!` });

    })
})