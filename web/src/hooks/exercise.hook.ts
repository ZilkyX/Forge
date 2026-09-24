import { useQuery } from "@tanstack/react-query";
import { getAvailableCategories, getExercises } from "@/services/exercise.api";
import type { ExerciseParams } from "@/types/exercise.types";

export const useExercises = (params: ExerciseParams) => {
  return useQuery({
    queryKey: ["exercises", params],
    queryFn: () => getExercises(params),
    staleTime: 1000 * 60 * 10,
  });
};

export const useExerciseCategory = () => {
  return useQuery({
    queryKey: ["exercise-categories"],
    queryFn: getAvailableCategories,
    staleTime: 1000 * 60 * 10,
  });
};
