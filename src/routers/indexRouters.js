import { Router } from "express";
import gameRouter from "./game.js";

const router = Router();

router.use("/game", gameRouter);

export default router;
