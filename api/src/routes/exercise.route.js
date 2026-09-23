import { Router } from "express";

import {
  getAllExercises,
  getExerciseBySlug,
  getAvailableCategories,
  getAvailableEquipment,
  getAvailableTargets,
} from "../controllers/exercise.controller.js";

const router = Router();

router.get("/", getAllExercises);

router.get("/categories", getAvailableCategories);
router.get("/equipment", getAvailableEquipment);
router.get("/targets", getAvailableTargets);

router.get("/:slug", getExerciseBySlug);

export default router;