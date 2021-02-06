import {
  Request,
  Response,
  Router,
  ErrorRequestHandler,
  Errback,
} from "express";
import { meme } from "../controllers";
import { validators } from "../middlewares";

const router = Router();

router.post("/", validators.postMemeValidate, meme.postMemeController);
router.get("/");
router.get("/:id");
router.use((err, req, res, next) => {
  res.status(500).send({ message: err });
});

export default router;
