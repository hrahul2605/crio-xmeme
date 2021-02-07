import "reflect-metadata";
import { Connection, createConnection } from "typeorm";
import config from "../config";

export default async () => {
  try {
    console.log(config.DB_CONNECTION_NAME);
    const connection: Connection = await createConnection(
      config.DB_CONNECTION_NAME
    );
    console.log("DB Connected");
  } catch (err) {
    console.log(err);
    console.log("DB Connection Failed.");
  }
};
