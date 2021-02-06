import { NextFunction, Request, RequestHandler, Response } from "express";
import { meme } from "../../../services";

const updateMemeController: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { url, caption } = req.body;
    const result = await meme.updateMemeService({ id, url, caption });

    if (result.duplicate) res.status(409).json({ message: "Duplicate Meme exist." });
    else if (result.updated)
      res.json({ message: "Meme Updated Successfully." });
    else res.status(404).json({ message: `Meme ID: ${id} doesnt exist.` });
  } catch (err) {
    next("internal");
  }
};

export default updateMemeController;
