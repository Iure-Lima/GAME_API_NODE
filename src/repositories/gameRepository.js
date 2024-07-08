import gameModel from "../models/gameModel.js";

class GameRepository {
  async findAll() {
    return await gameModel.find({});
  }

  async findById(id) {
    return await gameModel.findById(id);
  }

  async create(game) {
    const gameToSave = new gameModel(game);
    return await gameToSave.save();
  }

  async update(id, game) {
    return await gameModel.findByIdAndUpdate(id, game, { new: true });
  }

  async patch(id, updateData) {
    return await gameModel.findOneAndUpdate({ _id: id }, updateData, {
      new: true,
    });
  }

  async delete(id) {
    return await gameModel.findByIdAndDelete(id);
  }
}

export default GameRepository;
