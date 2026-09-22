import Exercise from "../models/exercise.model.js";
import { AppError } from "../utils/app-error.js";
import {
  categories,
  muscleGroups,
} from "../validations/exercise.validation.js";

export const createExercise = async (req, res, next) => {
  try {
    const {
      name,
      category,
      muscleGroups,
      equipment,
      difficulty,
      instructions,
      commonMistakes,
      targetMuscles,
    } = req.body;

    const existingExercise = await Exercise.findOne({ name });

    if (existingExercise) throw new AppError("Exercise already exists.", 409);

    let preview = {};

    if (req.files?.video) {
      const video = await uploadToCloudinary(
        req.files.video,
        "exercise-videos",
      );

      preview.videoUrl = video.secure_url;
      preview.videoPublicId = video.public_id;
    }

    if (req.files?.thumbnail) {
      const thumbnail = await uploadToCloudinary(
        req.files.thumbnail,
        "exercise-thumbnails",
      );

      preview.thumbnailUrl = thumbnail.secure_url;
    }

    const exercise = await Exercise.create({
      name,
      category,
      muscleGroups,
      equipment,
      difficulty,
      instructions,
      commonMistakes,
      targetMuscles,
      preview,
    });

    return res.status(201).json({
      success: true,
      message: "Exercise created successfully.",
      exercise,
    });
  } catch (error) {
    next(error);
  }
};

export const updateExercise = async (req, res, next) => {
  try {
    const { id } = req.params;

    const exercise = await Exercise.findById(id);

    if (!exercise) throw new AppError("Exercise not found.", 404);

    Object.assign(exercise, req.body);

    if (req.body.name) {
      exercise.slug = undefined;
    }

    await exercise.save();

    res.status(200).json({
      success: true,
      exercise,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteExercise = async (req, res, next) => {
  try {
    const { id } = req.params;

    const exercise = await Exercise.findById(id);

    if (!exercise) throw new AppError("Exercise not found.", 404);
    //todo: delete to cloudinary

    await Exercise.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "Exercise deleted successfully.",
    });
  } catch (error) {
    next(error);
  }
};

export const getAllExercises = async (req, res, next) => {
  try {
    const exercises = await Exercise.find().sort({ name: 1 });

    return res.status(200).json({
      success: true,
      count: exercises.length,
      exercises,
    });
  } catch (error) {
    next(error);
  }
};

export const getExerciseBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;

    const exercise = await Exercise.findOne({ slug });

    if (!exercise) throw new AppError("Exercise not found.", 404);

    res.status(200).json({
      success: true,
      exercise,
    });
  } catch (error) {
    next(error);
  }
};

export const searchExercise = async (req, res, next) => {
  try {
    const { q } = req.query;

    if (!q?.trim()) throw new AppError("Search query is required.", 400);

    const exercises = await Exercise.find({
      $or: [
        { name: { $regex: q.trim(), $options: "i" } },
        { muscleGroups: { $regex: q.trim(), $options: "i" } },
        { equipment: { $regex: q.trim(), $options: "i" } },
      ],
    })
      .sort({ name: 1 })
      .limit(20);

    return res.status(200).json({
      success: true,
      count: exercises.length,
      exercises,
    });
  } catch (error) {
    next(error);
  }
};
export const getExercisesByMuscleGroup = async (req, res, next) => {
  try {
    const { muscleGroup } = req.params;

    if (!muscleGroups.includes(muscleGroup)) {
      throw new AppError("Invalid muscle group.", 400);
    }

    const exercises = await Exercise.find({ muscleGroups: muscleGroup }).sort({
      name: 1,
    });

    res.status(200).json({
      success: true,
      count: exercises.length,
      exercises,
    });
  } catch (error) {
    next(error);
  }
};

export const getExercisesByCategory = async (req, res, next) => {
  try {
    const { category } = req.params;

    if (!categories.includes(category)) {
      throw new AppError("Invalid category.", 400);
    }

    const exercises = await Exercise.find({ category })
      .sort({ name: 1 })
      .lean();

    return res.status(200).json({
      success: true,
      count: exercises.length,
      exercises,
    });
  } catch (error) {
    next(error);
  }
};
