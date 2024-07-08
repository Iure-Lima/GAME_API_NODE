import { Router } from "express";

const gameRouter = Router();

gameRouter.get("/", (req, res) => {
  res.json({ message: "Welcome to the game!" });
});

export default gameRouter;
