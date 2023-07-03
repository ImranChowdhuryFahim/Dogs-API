import { Router } from "express";
import PingController from "../controllers/ping.controller";

const router = Router();

router.get("", PingController.getPing);

export default router;

