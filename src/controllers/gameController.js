import GameService from "../services/gameService.js";

const gameService = new GameService();

const createdGame = async (req, res) => {
  const game = req.body;
  const newGame = await gameService.createGame(game);
  const { _id, name, description, genre, platform } = newGame;
  res.status(201).json({ id: _id, name, description, genre, platform });
};

const getAllGame = async (req, res) => {
  const games = (await gameService.getAllGames()).map((game) => ({
    id: game._id,
    name: game.name,
    description: game.description,
    genre: game.genre,
    platform: game.platform,
  }));

  res.status(200).json(games);
};

const getGameByID = async (req, res) => {
  const gameId = req.params.id;
  const getGameByID = await gameService.getGameById(gameId);
  if (!getGameByID) {
    res.status(400).json({ message: "Game not found" });
  }
  const { _id, name, description, genre, platform } = getGameByID;

  res.status(200).json({ id: _id, name, description, genre, platform });
};

const updateGame = async (req, res) => {
  const gameId = req.params.id;
  const updatedGame = req.body;
  const updatedGameData = await gameService.updateGame(gameId, updatedGame);
  if (!updatedGameData) {
    res.status(400).json({ message: "Game not found" });
  }
  const { _id, name, description, genre, platform } = updatedGameData;
  res.status(200).json({ id: _id, name, description, genre, platform });
};

const partialUpdateGame = async (req, res) => {
  const gameId = req.params.id;
  const updateData = req.body;
  const updatedGameData = await gameService.patchGame(gameId, updateData);
  if (!updatedGameData) {
    res.status(400).json({ message: "Game not found" });
  }
  const { _id, name, description, genre, platform } = updatedGameData;
  res.status(200).json({ id: _id, name, description, genre, platform });
};

const deleteGame = async (req, res) => {
  const gameId = req.params.id;
  const deletedGame = await gameService.deleteGame(gameId);
  if (!deletedGame) {
    res.status(400).json({ message: "Game not found" });
  }
  res.status(200).json({ message: "This game is deleted", ...deleteGame });
};

export default {
  createdGame,
  getAllGame,
  getGameByID,
  updateGame,
  partialUpdateGame,
  deleteGame,
};
