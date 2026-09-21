import { z } from "zod";

export const updateProfileSchema = z.object({
  fullName: z.string().trim().min(2).max(50).optional(),

  username: z
    .string()
    .trim()
    .toLowerCase()
    .min(3)
    .max(20)
    .regex(/^[a-zA-Z0-9_]+$/, "Only letters, numbers, and underscores")
    .optional(),

  height: z.number().min(50).max(300).optional(),

  currentWeight: z.number().min(10).max(500).optional(),

  measurementPreference: z.enum(["metric", "imperial"]).optional(),
});
