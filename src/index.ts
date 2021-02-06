import express from "express";
import morgan from "morgan";
import "reflect-metadata";
import config from "./config";
import loaders from "./loaders";
import initRoutes from "./api";

const server = async () => {
  const app = express();
  app.use(morgan("dev"));

  await loaders(app);
  initRoutes(app);
  app.listen(config.PORT, () => {
    console.log(`Server started at http://localhost:${config.PORT}`);
  });
};

server();
