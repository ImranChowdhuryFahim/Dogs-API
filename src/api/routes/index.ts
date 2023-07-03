import { Router } from "express";
import PingRoute from './ping.route';
import DogsRoute from './dog.route';

const router = Router();

router.use("/ping", PingRoute);
router.use("", DogsRoute);

export default router;