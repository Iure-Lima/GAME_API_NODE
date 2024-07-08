import { Router } from "express";
import gameController from "../controllers/gameController.js";

const gameRouter = Router();

gameRouter.get("/", gameController.getAllGame);
gameRouter.get("/:id", gameController.getGameByID);
gameRouter.post("/", gameController.createdGame);
gameRouter.put("/:id", gameController.updateGame);
gameRouter.patch("/:id", gameController.partialUpdateGame);
gameRouter.delete("/:id", gameController.deleteGame);

export default gameRouter;
