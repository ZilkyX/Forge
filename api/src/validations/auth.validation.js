import { z } from "zod";

const usernameRegex = /^[a-zA-Z0-9_]+$/;

export const registerSchema = z.object({
  fullName: z.string().trim().min(2).max(50),

  username: z
    .string()
    .trim()
    .toLowerCase()
    .min(3)
    .max(20)
    .regex(usernameRegex, "Only letters, numbers, and underscores"),
});
