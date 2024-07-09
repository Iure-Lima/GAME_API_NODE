import GameRepository from "../repositories/gameRepository.js";

class GameService {
  constructor() {
    this.gameRepository = new GameRepository();
  }

  async getAllGames() {
    return await this.gameRepository.findAll();
  }
  async createGame(game) {
    return await this.gameRepository.create(game);
  }

  async getGameById(id) {
    return await this.gameRepository.findById(id);
  }

  async deleteGame(id) {
    return await this.gameRepository.delete(id);
  }

  async updateGame(id, game) {
    return await this.gameRepository.update(id, game);
  }

  async patchGame(id, updateData) {
    return await this.gameRepository.patch(id, updateData);
  }
}

export default GameService;
