import { Router } from "express";
import gameRouter from "./game.js";

const router = Router();

router.use("/game", gameRouter);
router.all("*", (req, res) => {
  res.status(404).json({ message: "Page not found" });
});

export default router;
