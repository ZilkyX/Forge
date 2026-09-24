import type { ExerciseData } from "@/types/exercise.types";

interface ExerciseCardProps {
  exercise: ExerciseData;
}

const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  return (
    <div
      key={exercise.slug}
      className="group overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg hover:shadow-primary/10"
    >
      <img
        src={exercise.image}
        alt={exercise.name}
        className="aspect-square w-full object-cover"
      />

      <div className="p-5">
        <h3 className="font-semibold transition-colors group-hover:text-primary">
          {exercise.name.toUpperCase()}
        </h3>

        <p className="mt-1 text-sm text-muted-foreground">
          {exercise.target} • {exercise.equipment}
        </p>

        <button className="mt-4 text-sm font-medium text-primary transition hover:underline">
          View Exercise →
        </button>
      </div>
    </div>
  );
};

export default ExerciseCard;
