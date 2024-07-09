import { Router } from "express";
import gameController from "../controllers/gameController.js";
import validation from "../middlewares/validation.js";
import {
  validateKeysPath,
  validateDataPath,
} from "../middlewares/patchValidation.js";
import validateId from "../middlewares/validationGameId.js";

const gameRouter = Router();

gameRouter.get("/", gameController.getAllGame);
gameRouter.get("/:id", validateId, gameController.getGameByID);
gameRouter.post("/", validation, gameController.createdGame);
gameRouter.put("/:id", validateId, validation, gameController.updateGame);
gameRouter.patch(
  "/:id",
  validateId,
  validateKeysPath,
  validateDataPath,
  gameController.partialUpdateGame
);
gameRouter.delete("/:id", gameController.deleteGame);

export default gameRouter;
