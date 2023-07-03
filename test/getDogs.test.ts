import { DogsInstance } from "../src/api/models/dog.model";
import request from "supertest";
import app from "../src/api/app";

describe("test get dog", () => {

    const dogsData = [
        {
            name: "Neo",
            color: "red&amber",
            tail_length: 22,
            weight: 32
        },
        {
            name: "Jessy",
            color: "black&white",
            tail_length: 7,
            weight: 14
        }
    ];

    test("should return all dogs", async () => {

        const mockGetAllDogs = jest.fn((): any => dogsData);
        jest
            .spyOn(DogsInstance, "findAll")
            .mockImplementation(() => mockGetAllDogs());

        const res = await request(app).get("/dogs");

        expect(mockGetAllDogs).toHaveBeenCalledTimes(1);
        expect(res.body).toEqual(dogsData);
    });

    test("should handle request query:invalid pageNumber", async () => {

        const mockGetAllDogs = jest.fn((): any => dogsData);
        jest
            .spyOn(DogsInstance, "findAll")
            .mockImplementation(() => mockGetAllDogs());

        const res = await request(app).get("/dogs?pageNumber=0&pageSize=1");
        expect(mockGetAllDogs).toHaveBeenCalledTimes(0);
        expect(res.status).toEqual(422);
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toEqual("\"pageNumber\" must be greater than or equal to 1");
    });

    test("should handle request query:invalid attribute", async () => {

        const mockGetAllDogs = jest.fn((): any => dogsData);
        jest
            .spyOn(DogsInstance, "findAll")
            .mockImplementation(() => mockGetAllDogs());

        const res = await request(app).get("/dogs?attribute=clr&order=asc");
        expect(mockGetAllDogs).toHaveBeenCalledTimes(0);
        expect(res.status).toEqual(422);
    });

    test("should handle request query:invalid order", async () => {

        const mockGetAllDogs = jest.fn((): any => dogsData);
        jest
            .spyOn(DogsInstance, "findAll")
            .mockImplementation(() => mockGetAllDogs());

        const res = await request(app).get("/dogs?attribute=color&order=ascii");
        expect(mockGetAllDogs).toHaveBeenCalledTimes(0);
        expect(res.status).toEqual(422);
    });

    test("should handle request query:invalid query params", async () => {

        const mockGetAllDogs = jest.fn((): any => dogsData);
        jest
            .spyOn(DogsInstance, "findAll")
            .mockImplementation(() => mockGetAllDogs());

        const res = await request(app).get("/dogs?attributed=color&order=asc");
        expect(mockGetAllDogs).toHaveBeenCalledTimes(0);
        expect(res.status).toEqual(422);
    });
})

