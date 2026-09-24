import { axiosInstance } from "@/lib/axios";
import type { ExerciseParams } from "@/types/exercise.types";

export const getExercises = async (params: ExerciseParams) => {
  const { data } = await axiosInstance.get("/exercise", { params });
  return data;
};

export const getAvailableCategories = async () => {
  const { data } = await axiosInstance.get("/exercise/categories");
  return data;
};
