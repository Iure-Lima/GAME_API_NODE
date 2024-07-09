import { check, validationResult } from "express-validator";

const validateKeysPath = (req, res, next) => {
  const keys = ["name", "description", "genre", "platform"];
  Object.keys(req.body).forEach((key) => {
    if (!keys.includes(key)) {
      throw new TypeError("Invalid key");
    }
  });
  next();
};

const validateDataPath = [
  check("name").isString().notEmpty().optional(),
  check("description").isString().notEmpty().optional(),
  check("genre").isString().notEmpty().optional(),
  check("platform").isString().notEmpty().optional(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new TypeError("Invalid game data");
    }
    next();
  },
];

export { validateKeysPath, validateDataPath };
