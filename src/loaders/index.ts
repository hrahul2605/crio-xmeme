import { Application } from "express";
import expressLoader from "./expressLoader";
import typeORMLoader from "./typeORMLoader";

export default async (app: Application) => {
  await typeORMLoader();
  await expressLoader(app);
  console.log("Express initialised.");
};
