import { Router } from "express";
import PingRoute from './ping.route';

const router = Router();

router.use("/ping", PingRoute);

export default router;