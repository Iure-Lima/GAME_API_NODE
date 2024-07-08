import env from "./config/env.js";
import express from "express";

const app = express();

app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
  console.log(`Link: http://localhost:${env.PORT}`);
});
