import { Request, Response } from "express";
import DogsService from "../services/dogs.service";
import { catchErrors } from "../middlewares/catchError.middleware";




export const getAllDogs = catchErrors(
    async (req: Request, res: Response) => {
        const dogs = await DogsService.getAllDogs({ ...req.query });
        res.status(200).json(dogs);
    }
)

