import { z } from "zod";

const usernameRegex = /^[a-zA-Z0-9_]+$/;

export const registerSchema = z
  .object({
    fullName: z.string().trim().min(2).max(50),

    username: z
      .string()
      .trim()
      .toLowerCase()
      .min(3)
      .max(20)
      .regex(usernameRegex, "Only letters, numbers, and underscores"),

    email: z.email().trim().toLowerCase(),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(100),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export const loginSchema = z.object({
  email: z.email().trim().toLowerCase(),
  password: z.string().min(1, "Password is required"),
});

export const refreshTokenSchema = z.object({
  refreshToken: z.string().min(1),
});
