import { NextFunction, Request, RequestHandler, Response } from "express";
import Joi from "joi";

const schema = Joi.object({
  id: Joi.number().required(),
});

const getMemeValidate: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    await schema.validateAsync({ id });
    next();
  } catch (err) {
    next("validation");
  }
};

export default getMemeValidate;
