import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
  name: String,
  description: String,
  genre: String,
  platform: String,
});
const gameModel = new mongoose.model("games", gameSchema);
export default gameModel;
