import { getAllDogs } from "../controllers/dogs.controller";
import { Router } from "express";
import { validate } from "../middlewares/validator.middleware";
import { getAllDogsSchema } from '../validation';

const router = Router();

router.get("",validate(getAllDogsSchema),getAllDogs);

export default router;