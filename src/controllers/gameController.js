import GameService from "../services/gameService.js";

const gameService = new GameService();

const createdGame = async (req, res) => {
  try {
    const game = req.body;
    const newGame = await gameService.createGame(game);
    const { _id, name, description, genre, platform } = newGame;
    res.status(201).json({ id: _id, name, description, genre, platform });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getAllGame = async (req, res) => {
  try {
    const games = (await gameService.getAllGames()).map((game) => ({
      id: game._id,
      name: game.name,
      description: game.description,
      genre: game.genre,
      platform: game.platform,
    }));

    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getGameByID = async (req, res) => {
  try {
    const gameId = req.params.id;
    const getGameByID = await gameService.getGameById(gameId);
    if (!getGameByID) {
      res.status(400).json({ message: "Game not found" });
      return;
    }
    const { _id, name, description, genre, platform } = getGameByID;

    res.status(200).json({ id: _id, name, description, genre, platform });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const updateGame = async (req, res) => {
  try {
    const gameId = req.params.id;
    const updatedGame = req.body;
    const updatedGameData = await gameService.updateGame(gameId, updatedGame);
    if (!updatedGameData) {
      res.status(400).json({ message: "Game not found" });
      return;
    }
    const { _id, name, description, genre, platform } = updatedGameData;
    res.status(200).json({ id: _id, name, description, genre, platform });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const partialUpdateGame = async (req, res) => {
  try {
    const gameId = req.params.id;
    const updateData = req.body;
    const updatedGameData = await gameService.patchGame(gameId, updateData);
    if (!updatedGameData) {
      res.status(400).json({ message: "Game not found" });
      return;
    }
    const { _id, name, description, genre, platform } = updatedGameData;
    res.status(200).json({ id: _id, name, description, genre, platform });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const deleteGame = async (req, res) => {
  try {
    const gameId = req.params.id;
    const deletedGame = await gameService.deleteGame(gameId);
    if (!deletedGame) {
      res.status(400).json({ message: "Game not found" });
      return;
    }
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export default {
  createdGame,
  getAllGame,
  getGameByID,
  updateGame,
  partialUpdateGame,
  deleteGame,
};
