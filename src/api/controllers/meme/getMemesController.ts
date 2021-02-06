import { NextFunction, Request, RequestHandler, Response } from "express";
import { meme } from "../../../services";

const getMemesController: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await meme.getMemesService();
    res.json(result);
  } catch (err) {
    next("internal");
  }
};

export default getMemesController;
