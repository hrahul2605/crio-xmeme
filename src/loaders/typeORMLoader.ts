import 'reflect-metadata';
import { Connection, createConnection } from "typeorm";

export default async () => {
  try {
    const connection: Connection = await createConnection();
    console.log("DB Connected");
  } catch (err) {
    console.log("DB Connection Failed.");
  }
};
