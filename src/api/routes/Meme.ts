import { Router } from "express";
import { meme } from "../controllers";
import { validators } from "../middlewares";

const router = Router();

router.post("/", validators.postMemeValidate, meme.postMemeController);
router.get("/");
router.get("/:id");

export default router;
