import express from "express";
import morgan from "morgan";
import path from "path";
import "reflect-metadata";

import config from "./config";
import loaders from "./loaders";
import initRoutes from "./api";

import loadSwaggerDocs from "./loaders/swaggerDocsLoader";


const server = async () => {
  const app = express(); // Express app initialisation

  app.use(morgan("dev")); // Logs
  app.use("/", express.static(path.join(__dirname, "../client"))); // Static Frontend served

  await loaders(app); // Loading necessary dependancies
  initRoutes(app); // Initialising routes

  // Server starting
  app.listen(config.PORT, () => {
    console.log(`Server started at http://localhost:${config.PORT}`);
  });
};

server();

const swaggerServer = async () => {
  const swaggerApp = express();
  await loadSwaggerDocs(swaggerApp);

  // SwaggerDocs server starting
  swaggerApp.listen(config.SWAGGER_PORT, () => {
    console.log(
      `Swagger API Docs served at https://localhost:${config.SWAGGER_PORT}`
    );
  });
};

swaggerServer();
