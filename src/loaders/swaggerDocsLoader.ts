import { Application } from "express";
import cors from "cors";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import config from "../config";

export default async (app: Application) => {
  app.use(cors());
  const specs = swaggerJsDoc(config.SWAGGER_CONFIG);
  app.use("/swagger-ui", swaggerUi.serve, swaggerUi.setup(specs));
};
