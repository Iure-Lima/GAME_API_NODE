import mongoose from "mongoose";

const validateId = (req, res, next) => {
  const gameId = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(gameId)) {
    throw new Error("Invalid game ID");
  }
  next();
};

export default validateId;
