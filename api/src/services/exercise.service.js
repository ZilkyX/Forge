import exercises from "../../data/exercises-dataset/data/exercises.json" with { type: "json" };
import slugify from "slugify";

const BASE_URL = process.env.API_URL || "http://localhost:5000";

const exerciseData = exercises.map((exercise) => ({
  ...exercise,
  slug: slugify(exercise.name, {
    lower: true,
    strict: true,
  }),
  searchText:
    `${exercise.name} ${exercise.target} ${exercise.equipment}`.toLowerCase(),

  image: `${BASE_URL}/exercise-images/${exercise.image.replace("images/", "")}`,
  gif_url: `${BASE_URL}/exercise-videos/${exercise.gif_url.replace("videos/", "")}`,
}));

const exerciseBySlug = new Map(
  exerciseData.map((exercise) => [exercise.slug, exercise]),
);

const categoryMap = new Map();
const equipmentMap = new Map();
const targetMap = new Map();

const categorySet = new Set();
const equipmentSet = new Set();
const targetSet = new Set();

for (const exercise of exerciseData) {
  categorySet.add(exercise.category);
  equipmentSet.add(exercise.equipment);
  targetSet.add(exercise.target);

  if (!categoryMap.has(exercise.category)) {
    categoryMap.set(exercise.category, []);
  }
  categoryMap.get(exercise.category).push(exercise);

  if (!equipmentMap.has(exercise.equipment)) {
    equipmentMap.set(exercise.equipment, []);
  }
  equipmentMap.get(exercise.equipment).push(exercise);

  if (!targetMap.has(exercise.target)) {
    targetMap.set(exercise.target, []);
  }
  targetMap.get(exercise.target).push(exercise);
}

const sorters = {
  name: (a, b) => a.name.localeCompare(b.name),
};

export const getAllExercises = ({
  q,
  category,
  equipment,
  target,
  page = 1,
  limit = 20,
  sort = "name",
} = {}) => {
  page = Math.max(1, Number(page) || 1);
  limit = Math.min(50, Math.max(1, Number(limit) || 20));

  let results = exerciseData;

  if (category) {
    results = categoryMap.get(category.toLowerCase()) ?? [];
  } else if (equipment) {
    results = equipmentMap.get(equipment.toLowerCase()) ?? [];
  } else if (target) {
    results = targetMap.get(target.toLowerCase()) ?? [];
  }

  if (category && results !== categoryMap.get(category.toLowerCase())) {
    results = results.filter(
      (exercise) => exercise.category === category.toLowerCase(),
    );
  }

  if (equipment) {
    results = results.filter(
      (exercise) => exercise.equipment === equipment.toLowerCase(),
    );
  }

  if (target) {
    results = results.filter(
      (exercise) => exercise.target === target.toLowerCase(),
    );
  }

  if (q?.trim()) {
    const query = q.toLowerCase().trim();

    results = results.filter((exercise) => exercise.searchText.includes(query));
  }

  results = [...results].sort(sorters[sort] || sorters.name);

  const total = results.length;
  const totalPages = Math.ceil(total / limit) || 1;

  const exercises = results.slice((page - 1) * limit, page * limit);

  return {
    exercises,
    pagination: {
      page,
      limit,
      total,
      totalPages,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1,
    },
  };
};

export const getExerciseBySlug = (slug) => exerciseBySlug.get(slug);

export const isValidCategory = (category) =>
  categorySet.has(category.toLowerCase());

export const isValidEquipment = (equipment) =>
  equipmentSet.has(equipment.toLowerCase());

export const isValidTarget = (target) => targetSet.has(target.toLowerCase());

export const getAvailableCategories = () => [...categorySet].sort();

export const getAvailableEquipment = () => [...equipmentSet].sort();

export const getAvailableTargets = () => [...targetSet].sort();
