import mongoose from "mongoose";
import env from "./env.js";

const DBConnection = async () => {
  try {
    await mongoose.connect(
      `mongodb://localhost:${env.PORT_DB}/${env.DATABASE_NAME}`,
      {
        authSource: "admin",
        user: env.USERNAME_DB,
        pass: env.PASSWORD_DB,
      }
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connection with the MongoDB:", error);
  }
};

export default DBConnection;
