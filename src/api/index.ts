import { Application, Response } from "express";
import { Meme } from "./routes";

export default (app: Application) => {
  // Endpoints related to memes
  app.use("/memes", Meme);

  // Server running status
  app.get("/", (_, res: Response) => {
    res.send("Server Running");
  });
};
