import express from "express";
import morgan from "morgan";
import "reflect-metadata";
import config from "./config";
import loaders from "./loaders";
import initRoutes from "./api";

import path from "path";

const server = async () => {
  const app = express();      // Express app initialisation

  app.use(morgan("dev"));     // Logs 
  app.use("/", express.static(path.join(__dirname, "../client")));  // Static Frontend served
  
  await loaders(app);         // Loading necessary dependancies
  initRoutes(app);            // Initialising routes

  // Server starting
  app.listen(config.PORT, () => {
    console.log(`Server started at http://localhost:${config.PORT}`);
  });
};

server();
