import { Router } from "express";
import {
  getAllExercises,
  searchExercise,
  getExercisesByCategory,
  getExercisesByMuscleGroup,
  getExerciseBySlug,
  createExercise,
  updateExercise,
  deleteExercise,
} from "../controllers/exercise.controller.js";
import { requireRole } from "../middlewares/role.middleware.js";
import { protectRoute } from "../middlewares/auth.middleware.js";
import {
  createExerciseSchema,
  updateExerciseSchema,
} from "../validations/exercise.validation.js";
import { validate } from "../middlewares/validate.middleware.js";

const router = Router();

router.get("/", getAllExercises);
router.get("/search", searchExercise);
router.get("/category/:category", getExercisesByCategory);
router.get("/muscle/:muscleGroup", getExercisesByMuscleGroup);
router.get("/:slug", getExerciseBySlug);
router.post(
  "/",
  protectRoute,
  requireRole("admin"),
  validate(createExerciseSchema),
  createExercise,
);
router.patch(
  "/:id",
  protectRoute,
  requireRole("admin"),
  validate(updateExerciseSchema),
  updateExercise,
);
router.delete("/:id", protectRoute, requireRole("admin"), deleteExercise);

export default router;
