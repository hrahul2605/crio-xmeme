import dotenv from "dotenv";

dotenv.config();

export default {
  PORT: process.env.PORT || 5000,
  DB_CONNECTION_NAME:
    process.env.NODE_ENV === "production" ? "production" : "default",
};
