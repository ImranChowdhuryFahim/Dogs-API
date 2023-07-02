import CustomError from "../../utils/custom-error";
import { Request, Response, NextFunction, ErrorRequestHandler } from "express";

export const globalErrorHandler: ErrorRequestHandler = (err: unknown, req: Request, res: Response, next: NextFunction) => {

    if (err instanceof CustomError) {
        res.status(err.statusCode).json({ message: err.message });
    } else {
        res.status(500).json({ message: "Something went wrong" });
    }
};