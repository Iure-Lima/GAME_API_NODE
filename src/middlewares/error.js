const errorMiddleware = (err, req, res, next) => {
  if (err.message === "Invalid game data") {
    return res.status(400).json({ message: err.message });
  }
  res.status(500).json({ message: err.message });
};

export default errorMiddleware;
