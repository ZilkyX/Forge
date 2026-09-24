import { useEffect, useState } from "react";
import { Show } from "@clerk/react";
import { Search } from "lucide-react";

import { useExerciseCategory, useExercises } from "@/hooks/exercise.hook";
import type { ExerciseData } from "@/types/exercise.types";

import ExerciseCard from "./components/ExerciseCard";
import PublicHeader from "./components/PublicHeader";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import MemberCTA from "./components/MemberCTA";
import GuestCTA from "./components/GuestCTA";
import EmptyState from "./components/EmptyState";
import PublicExerciseLibrarySkeleton from "./components/skeletons/PublicExerciseLibrarySkeleton";
import PublicExerciseLibraryError from "./components/PublicExerciseLibraryError";

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

        <section className="mb-6">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
              size={20}
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search over 1,300 exercises..."
              className="w-full rounded-2xl border border-border bg-card py-4 pl-12 pr-4 outline-none transition focus:border-primary"
            />
          </div>
        </section>

        {/* Category Chips */}
        <section className="mb-8 flex gap-3 overflow-x-auto pb-2">
          <button
            onClick={() => {
              setSelectedCategory("All");
              setPage(1);
            }}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              selectedCategory === "All"
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-card text-muted-foreground hover:border-primary hover:text-foreground"
            }`}
          >
            All
          </button>

          {!categoryLoading &&
            categoryData.categories.map((category: string) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setPage(1);
                }}
                className={`rounded-full px-5 py-2 text-sm font-medium capitalize transition ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-card text-muted-foreground hover:border-primary hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
        </section>

        {/* Exercise Grid */}
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

          <Pagination className="mt-10">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() =>
                    data.pagination.hasPrevPage && setPage(page - 1)
                  }
                  className={
                    data.pagination.hasPrevPage
                      ? "cursor-pointer"
                      : "pointer-events-none opacity-50"
                  }
                />
              </PaginationItem>

              {visiblePages[0] > 1 && (
                <>
                  <PaginationItem>
                    <PaginationLink
                      onClick={() => setPage(1)}
                      className="cursor-pointer"
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>

                  {visiblePages[0] > 2 && (
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                  )}
                </>
              )}

              {visiblePages.map((p) => (
                <PaginationItem key={p}>
                  <PaginationLink
                    isActive={p === page}
                    onClick={() => setPage(p)}
                    className="cursor-pointer"
                  >
                    {p}
                  </PaginationLink>
                </PaginationItem>
              ))}

              {visiblePages[visiblePages.length - 1] <
                data.pagination.totalPages && (
                <>
                  {visiblePages[visiblePages.length - 1] <
                    data.pagination.totalPages - 1 && (
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                  )}

                  <PaginationItem>
                    <PaginationLink
                      onClick={() => setPage(data.pagination.totalPages)}
                      className="cursor-pointer"
                    >
                      {data.pagination.totalPages}
                    </PaginationLink>
                  </PaginationItem>
                </>
              )}

              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    data.pagination.hasNextPage && setPage(page + 1)
                  }
                  className={
                    data.pagination.hasNextPage
                      ? "cursor-pointer"
                      : "pointer-events-none opacity-50"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>

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
