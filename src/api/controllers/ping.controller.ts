import { Request,Response } from "express";

class PingController {
    getPing(req:Request,res:Response)
    {
        res.status(200).json("Dogshouseservice.Version1.0.1");
    }
}

export default new PingController();