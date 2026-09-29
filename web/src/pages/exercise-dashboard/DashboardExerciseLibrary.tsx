import { useEffect, useState } from "react";
import Searchbar from "../exercise-public/components/Searchbar";
import { useExerciseCategory, useExercises } from "@/hooks/exercise.hook";
import CategoryChips from "../exercise-public/components/CategoryChips";
import type { ExerciseData } from "@/types/exercise.types";
import ExerciseCard from "../exercise-public/components/ExerciseCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

const DashboardExerciseLibrary = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [page, setPage] = useState(1);

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

  const { data: categoryData, isLoading: isCategoryLoding } =
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
    return <div>loading</div>;
  }

  if (isError || !data) {
    return <div>error</div>;
  }

  const visiblePages = getVisiblePages(
    data.pagination.page,
    data.pagination.totalPages,
  );

  return (
    <div className="space-y-6">
      <div className="mx-auto px-4  lg:px-8">
        <Searchbar onChange={setSearch} value={search} />

        <CategoryChips
          categoryData={categoryData?.categories ?? []}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setPage={setPage}
          categoryLoading={isCategoryLoding}
        />

        <div className=" flex items-center justify-between">
          <p className="text-muted-foreground">
            {debouncedSearch
              ? `Results for "${debouncedSearch}" • ${data.pagination.total} found`
              : selectedCategory !== "All"
                ? `${selectedCategory} • ${data.pagination.total} exercises`
                : `Exercises • Showing ${data.exercises.length} of ${data.pagination.total}`}
          </p>

          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setSearch("");
              setSelectedCategory("All");
              setPage(1);
            }}
            className="h-10 rounded-xl border-border/70 px-4 text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Clear Filters
          </Button>
        </div>
      </div>

      <div className="px-4 lg:px-8">
        <Pagination className="mb-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => data.pagination.hasPrevPage && setPage(page - 1)}
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
                onClick={() => data.pagination.hasNextPage && setPage(page + 1)}
                className={
                  data.pagination.hasNextPage
                    ? "cursor-pointer"
                    : "pointer-events-none opacity-50"
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 sm: pb-12">
          {data.exercises.map((exercise: ExerciseData) => (
            <ExerciseCard key={exercise.slug} exercise={exercise} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardExerciseLibrary;
