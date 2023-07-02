import { Request, Response } from "express";
export const routeNotFoundHandler = (req: Request, res: Response) => {
    res
        .status(404)
        .json({ message: `Cant find ${req.originalUrl} on this server!` });
}