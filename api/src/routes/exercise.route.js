import { Router } from "express";

import {
  getAllExercises,
  getExerciseBySlug,
  getAvailableCategories,
} from "../controllers/exercise.controller.js";

const router = Router();

router.get("/", getAllExercises);

router.get("/categories", getAvailableCategories);
router.get("/:slug", getExerciseBySlug);

export default router;
