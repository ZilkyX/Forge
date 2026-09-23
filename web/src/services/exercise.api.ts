import { axiosInstance } from "@/lib/axios";

export const getExercises = async (params: any) => {
  const { data } = await axiosInstance.get("/exercise", { params });
  return data;
};
