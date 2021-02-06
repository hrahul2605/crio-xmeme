import { NextFunction, Request, RequestHandler, Response } from "express";
import { meme } from "../../../services";

const getMemeController: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const result = await meme.getMemeService(parseInt(id, 10));
    if (result) res.json({ ...result });
    else res.status(404).json({ message: `Meme ID: ${id}, doesn't exist.` });
  } catch (err) {
    next("internal");
  }
};

export default getMemeController;
