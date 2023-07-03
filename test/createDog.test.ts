import { DogsInstance } from "../src/api/models/dog.model";
import request from "supertest";
import app from "../src/api/app";

describe("test create dog", () => {



    test("should create db", async () => {

        const dogData =
        {
            name: "Doggy",
            color: "red",
            tail_length: 173,
            weight: 33
        };

        const mockCreateDog = jest.fn((): any => dogData);
        const mockGetDog = jest.fn((): any => null);
        jest
            .spyOn(DogsInstance, "findOne")
            .mockImplementation(mockGetDog());
        jest
            .spyOn(DogsInstance, "create")
            .mockImplementation(() => mockCreateDog());

        const res = (await request(app).post("/dog").send(dogData));

        expect(mockGetDog).toHaveBeenCalledTimes(1);
        expect(mockCreateDog).toHaveBeenCalledTimes(1);
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toEqual("Successfully created a new dog");
    });

    test("should handle invalid payload: tail_length is required", async () => {

        const dogData =
        {
            name: "Doggy",
            color: "red",
            weight: 33
        };


        const res = (await request(app).post("/dog").send(dogData));

        expect(res.status).toEqual(422);
    });

    test("should handle invalid payload: tail_length can't be negative", async () => {

        const dogData =
        {
            name: "Doggy",
            color: "red",
            weight: 33,
            tail_length: -33,
        };

        const res = (await request(app).post("/dog").send(dogData));

        expect(res.status).toEqual(422);
    });

    test("should handle invalid payload: weight can't be negative", async () => {

        const dogData =
        {
            name: "Doggy",
            color: "red",
            weight: -33,
            tail_length: 23,
        };


        const res = (await request(app).post("/dog").send(dogData));

        expect(res.status).toEqual(422);
    });

})

