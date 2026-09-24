export interface ExerciseParams {
  q?: string;
  category?: string;
  equipment?: string;
  target?: string;
  page?: number;
  limit?: number;
  sort?: string;
}

export interface ExerciseData {
  id: string;
  slug: string;

  name: string;
  category: string;
  body_part: string;
  target: string;
  equipment: string;

  instructions: ExerciseInstructions;
  instruction_steps: ExerciseInstructionSteps;

  muscle_group: string;
  secondary_muscles: string[];

  image: string;
  gif_url: string;
  media_id: string;

  created_at: string;
  attribution: string;
}

export interface ExerciseInstructions {
  en: string;
  it: string;
  tr: string;
  es: string;
  ru: string;
  zh: string;
  hi: string;
  pl: string;
  ko: string;
  fr: string;
}

export interface ExerciseInstructionSteps {
  en: string[];
  it: string[];
  tr: string[];
  es: string[];
  ru: string[];
  zh: string[];
  hi: string[];
  pl: string[];
  ko: string[];
  fr: string[];
}

export interface ExercisePagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface ExerciseResponse {
  success: boolean;
  exercises: ExerciseData[];
  pagination: ExercisePagination;
}
