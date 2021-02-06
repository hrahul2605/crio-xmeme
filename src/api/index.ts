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
    if (err === "validation") {
      res.status(400);
      res.json({ message: "Request Validation Failed" });
    } else if (err === "internal") {
      res.status(500);
      res.send({
        message:
          "Did my code break? Or is it thy server? maybe DB?? AHHHHHH!!!!",
      });
    }
  });

  // Invalid Route Handler
  app.use((_, res) => {
    res.status(400).send({ message: "Invalid Route" });
  });
};
