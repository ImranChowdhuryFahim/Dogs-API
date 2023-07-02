import { Router } from "express";
import PingRoute from './ping.route';
import DogsRoute from './dogs.route';

const router = Router();

router.use("/ping", PingRoute);
router.use("/dogs",DogsRoute);

export default router;