import { check, validationResult } from "express-validator";

const validateGame = [
  check("name").isString().notEmpty(),
  check("description").isString().notEmpty(),
  check("genre").isString().notEmpty(),
  check("platform").isString().notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new TypeError("Invalid game data");
    }
    next();
  },
];

export default validateGame;
