import { createDog, getAllDogs } from "../controllers/dog.controller";
import { Router } from "express";
import { validate } from "../middlewares/validator.middleware";
import { createDogSchema, getAllDogsSchema } from '../validation';

const router = Router();


router.post("/dog", validate(createDogSchema), createDog);

router.get("/dogs", validate(getAllDogsSchema), getAllDogs);

export default router;