import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";
export const validate = (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
    const { error } = req.method == 'GET' ? schema.validate(req.query) : schema.validate(req.body);

    if (error) {
        res.status(422).json({message: error.details[0].message});
    } else {
        next();
    }
};