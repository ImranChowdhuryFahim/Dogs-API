import dogsController from "../controllers/dogs.controller";
import { Router } from "express";
import { validate } from "../middlewares/validator.middleware";
import { getAllDogs } from '../validation';

const router = Router();

router.get("",validate(getAllDogs),dogsController.getAllDogs);

export default router;