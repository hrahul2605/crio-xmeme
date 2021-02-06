import { Router } from "express";
import { meme } from "../controllers";
import { validators } from "../middlewares";

const router = Router();

router.post("/", validators.postMemeValidate, meme.postMemeController);
router.get("/", meme.getMemesController);
router.get("/:id", validators.getMemeValidate, meme.getMemeController);
router.patch("/:id", meme.updateMemeController);

export default router;
