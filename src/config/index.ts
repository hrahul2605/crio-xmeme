import dotenv from "dotenv";

dotenv.config();

export default {
  PORT: parseInt(process.env.PORT,10) || 8081,
  DB_CONNECTION_NAME:
    process.env.NODE_ENV === "production" ? "production" : "default",
};
