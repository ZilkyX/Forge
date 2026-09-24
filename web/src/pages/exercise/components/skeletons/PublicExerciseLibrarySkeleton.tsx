import { Skeleton } from "@/components/ui/skeleton";

const ExerciseLibrarySkeleton = () => {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        {/* Header */}
        <section className="mb-8 space-y-3">
          <Skeleton className="h-4 w-28 rounded-full" />
          <Skeleton className="h-12 w-80 rounded-xl" />
          <Skeleton className="h-5 w-full max-w-2xl rounded-lg" />
          <Skeleton className="h-5 w-2/3 max-w-xl rounded-lg" />
        </section>

        {/* Search */}
        <section className="mb-6">
          <Skeleton className="h-14 w-full rounded-2xl" />
        </section>

        {/* Category Chips */}
        <section className="mb-8 flex gap-3 overflow-hidden">
          <Skeleton className="h-10 w-16 rounded-full" />
          <Skeleton className="h-10 w-24 rounded-full" />
          <Skeleton className="h-10 w-20 rounded-full" />
          <Skeleton className="h-10 w-28 rounded-full" />
          <Skeleton className="h-10 w-24 rounded-full" />
        </section>

        {/* Exercise count */}
        <div className="mb-5">
          <Skeleton className="h-5 w-52 rounded-lg" />
        </div>

        {/* Exercise Grid */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-border bg-card"
            >
              <Skeleton className="aspect-square w-full rounded-none" />

              <div className="space-y-3 p-5">
                <Skeleton className="h-5 w-3/4 rounded-lg" />
                <Skeleton className="h-4 w-1/2 rounded-lg" />
                <Skeleton className="mt-4 h-4 w-24 rounded-lg" />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-10 flex justify-center gap-2">
          <Skeleton className="h-10 w-10 rounded-xl" />
          <Skeleton className="h-10 w-10 rounded-xl" />
          <Skeleton className="h-10 w-10 rounded-xl" />
          <Skeleton className="h-10 w-10 rounded-xl" />
          <Skeleton className="h-10 w-10 rounded-xl" />
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl border border-border p-8">
          <div className="space-y-4">
            <Skeleton className="mx-auto h-8 w-64 rounded-xl" />
            <Skeleton className="mx-auto h-5 w-full max-w-lg rounded-lg" />
            <Skeleton className="mx-auto h-5 w-2/3 max-w-md rounded-lg" />
            <Skeleton className="mx-auto mt-6 h-12 w-44 rounded-full" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ExerciseLibrarySkeleton;