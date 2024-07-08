import env from "./config/env.js";
import express from "express";
import router from "./routers/indexRouters.js";
import DBConnection from "./config/db.js";
DBConnection();

const app = express();
app.use(express.json());
app.use(router);

app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
  console.log(`Link: http://localhost:${env.PORT}`);
});
