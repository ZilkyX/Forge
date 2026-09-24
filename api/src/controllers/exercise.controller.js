import * as ExerciseService from "../services/exercise.service.js";
import { AppError } from "../utils/app-error.js";

const ALLOWED_SORTS = new Set(["name"]);

export const getAllExercises = (req, res, next) => {
  try {
    const {
      q,
      category,
      equipment,
      target,
      page = "1",
      limit = "20",
      sort = "name",
    } = req.query;

    if (!ALLOWED_SORTS.has(sort)) {
      throw new AppError("Invalid sort option.", 400);
    }

    const result = ExerciseService.getAllExercises({
      q,
      category,
      equipment,
      target,
      page: Number(page),
      limit: Number(limit),
      sort,
    });


    return res.status(200).json({
      success: true,
      ...result,
    });
  } catch (error) {
    next(error);
  }
};

export const getExerciseBySlug = (req, res, next) => {
  try {
    const { slug } = req.params;

    const exercise = ExerciseService.getExerciseBySlug(slug);

    if (!exercise) throw new AppError("Exercise not found.", 404);

    return res.status(200).json({ success: true, exercise });
  } catch (error) {
    next(error);
  }
};

export const getAvailableCategories = (req, res, next) => {
  try {
    const categories = ExerciseService.getAvailableCategories();
    return res.status(200).json({
      success: true,
      count: categories.length,
      categories,
    });
  } catch (error) {
    next(error);
  }
};

export const getAvailableTargets = (req, res, next) => {
  try {
    const targets = ExerciseService.getAvailableTargets();
    return res.status(200).json({
      success: true,
      count: targets.length,
      targets,
    });
  } catch (error) {
    next(error);
  }
};

export const getAvailableEquipment = (req, res, next) => {
  try {
    const equipment = ExerciseService.getAvailableEquipment();
    return res.status(200).json({
      success: true,
      count: equipment.length,
      equipment,
    });
  } catch (error) {
    next(error);
  }
};
