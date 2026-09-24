import { useEffect, useState } from "react";
import { Show } from "@clerk/react";

import { useExerciseCategory, useExercises } from "@/hooks/exercise.hook";
import type { ExerciseData } from "@/types/exercise.types";

import ExerciseCard from "./components/ExerciseCard";
import PublicHeader from "./components/PublicHeader";
import MemberCTA from "./components/MemberCTA";
import GuestCTA from "./components/GuestCTA";
import EmptyState from "./components/EmptyState";
import PublicExerciseLibrarySkeleton from "./components/skeletons/PublicExerciseLibrarySkeleton";
import PublicExerciseLibraryError from "./components/PublicExerciseLibraryError";
import Searchbar from "./components/Searchbar";
import CategoryChips from "./components/CategoryChips";
import PublicExercisePagination from "./components/PublicExercisePagination";

const PublicExerciseLibrary = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");


  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  const { data, isLoading, isError } = useExercises({
    q: debouncedSearch || undefined,
    category: selectedCategory === "All" ? undefined : selectedCategory,
    page,
    limit: 8,
    sort: "name",
  });

  const { data: categoryData, isLoading: categoryLoading } =
    useExerciseCategory();

  const getVisiblePages = (current: number, total: number) => {
    if (total <= 5) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    if (current <= 3) {
      return [1, 2, 3, 4, 5];
    }

    if (current >= total - 2) {
      return [total - 4, total - 3, total - 2, total - 1, total];
    }

    return [current - 2, current - 1, current, current + 1, current + 2];
  };
  if (isLoading) {
    return <PublicExerciseLibrarySkeleton />;
  }

  if (isError || !data) {
    return <PublicExerciseLibraryError />;
  }

  const visiblePages = getVisiblePages(
    data.pagination.page,
    data.pagination.totalPages,
  );

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <PublicHeader />

        <Searchbar onChange={setSearch} value={search} />

        <CategoryChips
          categoryData={categoryData?.categories ?? []}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setPage={setPage}
          categoryLoading={categoryLoading}
        />

        <section>
          <div className="mb-5 flex items-center justify-between">
            <p className="text-muted-foreground">
              {debouncedSearch
                ? `Results for "${debouncedSearch}" • ${data.pagination.total} found`
                : selectedCategory !== "All"
                  ? `${selectedCategory} • ${data.pagination.total} exercises`
                  : `Exercises • Showing ${data.exercises.length} of ${data.pagination.total}`}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {data.exercises.map((exercise: ExerciseData) => (
              <ExerciseCard key={exercise.slug} exercise={exercise} />
            ))}
          </div>

          {data.exercises.length === 0 && <EmptyState />}

          <PublicExercisePagination
            page={page}
            setPage={setPage}
            pagination={data.pagination}
            visiblePages={visiblePages}
          />

          <Show when="signed-out">
            <GuestCTA />
          </Show>

          <Show when="signed-in">
            <MemberCTA />
          </Show>
        </section>
      </div>
    </main>
  );
};

export default PublicExerciseLibrary;
