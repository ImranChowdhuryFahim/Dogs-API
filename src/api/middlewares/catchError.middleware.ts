import { NextFunction, RequestHandler,Request,Response } from "express";

export const catchErrors = (controller: RequestHandler) => {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        await controller(req, res, next);
      } catch (error) {
        next(error);
      }
    };
  };
  