import { Request, Response } from "express";
import DogsService from "../services/dogs.service";
import logger from "../../logger";



class DogsController {
    async getAllDogs(req: Request, res: Response) {
        const dogs = await DogsService.getAllDogs({ ...req.query });
        res.status(200).json(dogs);
    }
}

export default new DogsController();