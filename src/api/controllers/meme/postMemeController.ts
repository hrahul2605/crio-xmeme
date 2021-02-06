import { NextFunction, Request, RequestHandler, Response } from "express";
import { meme } from "../../../services";

const postMemeController: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, url, caption } = req.query;
    const { created, ...result } = await meme.createMemeService({
      name,
      url,
      caption,
    });
    if (created) res.status(201).send(result);
    else res.status(409).send({ message: "Meme already Exits" });
  } catch (err) {
    next("Did my code break? Or is it thy server? AHHHHHH!!!!");
  }
};

export default postMemeController;
