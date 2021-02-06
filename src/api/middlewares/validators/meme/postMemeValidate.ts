import { NextFunction, Request, RequestHandler, Response } from "express";
import Joi from "joi";

const schema = Joi.object({
  name: Joi.string().required(),
  url: Joi.string().required(),
  caption: Joi.string().required(),
});

const postMemeValidate: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, url, caption } = req.query;
    await schema.validateAsync({ name, url, caption });
    next();
  } catch (err) {
    res.status(400);
    res.json({ message: "Request Validation Failed" });
  }
};

export default postMemeValidate;
