import { useQuery } from "@tanstack/react-query";
import { getExercises } from "@/services/exercise.api";

export const useExercises = (params: any) => {
  return useQuery({
    queryKey: ["exercises", params],
    queryFn: () => getExercises(params),
    staleTime: 1000 * 60 * 10,
  });
};
