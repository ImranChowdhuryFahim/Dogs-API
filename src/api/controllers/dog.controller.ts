import { Request, Response } from "express";
import DogsService from "../services/dog.service";
import { catchErrors } from "../middlewares/catchError.middleware";




export const getAllDogs = catchErrors(
    async (req: Request, res: Response) => {
        const dogs = await DogsService.getAllDogs({ ...req.query });
        res.status(200).json(dogs);
    }
)

export const createDog = catchErrors(
    async (req: Request, res: Response) => {
        console.log("df"+req);
        await DogsService.createDog(req.body);
        res.status(201).json({ message: "Successfully created a new dog" });
    }
)

