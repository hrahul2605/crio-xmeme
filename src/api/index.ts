import { Application, Response } from "express";

export default (app: Application) => {
  // Server running status
  app.get("/", (_, res: Response) => {
    res.send("Server Running");
  });
};
