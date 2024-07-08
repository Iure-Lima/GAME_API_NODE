import { Router } from "express";

const gameRouter = Router();

gameRouter.get("/");
gameRouter.get("/:id");
gameRouter.post("/");
gameRouter.put("/:id");
gameRouter.patch("/:id");
gameRouter.delete("/:id");

export default gameRouter;
