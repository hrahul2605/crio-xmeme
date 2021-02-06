import { Application, Response } from "express";
import { Meme } from "./routes";

export default (app: Application) => {
  // Endpoints related to memes
  app.use("/memes", Meme);

  // Server running status
  app.get("/", (_, res: Response) => {
    res.send("Server Running");
  });

  // Error Handler
  app.use((err, _, res, _next) => {
    res.status(500).send({ message: err });
  });

  // Invalid Route Handler
  app.use((_, res) => {
    res.status(400).send({ message: "Invalid Route" });
  });
};
