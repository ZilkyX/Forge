import { z } from "zod";

export const categories = ["strength", "cardio", "mobility", "stretching"];

export const muscleGroups = [
  "chest",
  "back",
  "shoulders",
  "biceps",
  "triceps",
  "legs",
  "glutes",
  "core",
  "full-body",
];

const equipment = [
  "none",
  "barbell",
  "dumbbell",
  "machine",
  "cable",
  "bodyweight",
  "kettlebell",
  "band",
];

const difficulty = ["beginner", "intermediate", "advanced"];

export const createExerciseSchema = z.object({
  name: z.string().trim().min(3).max(100),

  category: z.enum(categories),

  muscleGroups: z
    .array(z.enum(muscleGroups))
    .min(1, "Select at least one muscle group."),
  equipment: z.enum(equipment),

  difficulty: z.enum(difficulty),

  preview: z
    .object({
      videoUrl: z.string().url().optional().or(z.literal("")),
      thumbnailUrl: z.string().url().optional().or(z.literal("")),
    })
    .optional(),

  instructions: z.object({
    setup: z.string().trim().min(5).max(500),
    execution: z.array(z.string().trim().min(3).max(200)).min(1).max(20),
    breathing: z.string().trim().max(200).optional().or(z.literal("")),
    tips: z.array(z.string().trim().max(200)).max(10).optional(),
  }),

  commonMistakes: z.array(z.string().trim().max(200)).max(10).optional(),

  targetMuscles: z.array(z.string().trim().max(50)).max(10).optional(),
});

export const updateExerciseSchema = createExerciseSchema.partial();
