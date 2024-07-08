import { config } from "dotenv";

config();

export default {
  PORT: process.env.PORT,
  PORT_DB: process.env.PORT_DB,
  USERNAME_DB: process.env.USERNAME_DB,
  PASSWORD_DB: process.env.PASSWORD_DB,
  DATABASE_NAME: process.env.DATABASE_NAME,
};
