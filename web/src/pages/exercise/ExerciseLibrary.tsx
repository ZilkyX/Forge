import { Search, SlidersHorizontal } from "lucide-react";
import { useLocation } from "react-router-dom";

const categories = ["All", "Strength", "Cardio", "Mobility", "Stretching"];

const ExerciseLibrary = () => {
  const { pathname } = useLocation();
  const isDashboard = pathname.startsWith("/app");

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        {/* Header */}
        <section className="mb-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
                Forge Library
              </p>

              <h1 className="mt-2 text-4xl font-bold lg:text-5xl">
                Discover your next workout
              </h1>

              {!isDashboard && (
                <p className="mt-3 max-w-2xl text-lg text-zinc-400">
                  Explore over 1,300 guided exercises with GIF previews,
                  detailed instructions, and muscle-specific filtering.
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Search */}
        <section className="mb-6">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
              size={20}
            />

            <input
              type="text"
              placeholder="Search exercises..."
              className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 py-4 pl-12 pr-4 text-white outline-none transition focus:border-emerald-500"
            />
          </div>
        </section>

        {/* Category Chips */}
        <section className="mb-8 flex gap-3 overflow-x-auto pb-2">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                index === 0
                  ? "bg-emerald-500 text-black"
                  : "border border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-emerald-500 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </section>

        {/* Content */}
        <section
          className={`grid gap-8 ${
            isDashboard ? "lg:grid-cols-[260px_1fr]" : "grid-cols-1"
          }`}
        >
          {/* Sidebar (Dashboard only) */}
          {isDashboard && (
            <aside className="sticky top-24 h-fit rounded-3xl border border-zinc-800 bg-zinc-900 p-5">
              <div className="mb-6 flex items-center gap-2">
                <SlidersHorizontal size={18} />
                <h2 className="font-semibold">Filters</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="mb-3 text-sm font-medium text-zinc-400">
                    Equipment
                  </p>

                  <div className="space-y-2 text-sm">
                    {["Barbell", "Dumbbell", "Cable", "Bodyweight"].map(
                      (item) => (
                        <label key={item} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="rounded border-zinc-700"
                          />
                          {item}
                        </label>
                      ),
                    )}
                  </div>
                </div>

                <div>
                  <p className="mb-3 text-sm font-medium text-zinc-400">
                    Target Muscle
                  </p>

                  <div className="space-y-2 text-sm">
                    {["Chest", "Back", "Legs", "Shoulders"].map((item) => (
                      <label key={item} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="rounded border-zinc-700"
                        />
                        {item}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          )}

          {/* Exercise Grid */}
          <div>
            <div className="mb-5 flex items-center justify-between">
              <p className="text-zinc-400">Showing 24 exercises</p>

              <select className="rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm">
                <option>Name (A-Z)</option>
              </select>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition hover:-translate-y-1 hover:border-emerald-500"
                >
                  <div className="aspect-square bg-zinc-800" />

                  <div className="p-5">
                    <h3 className="font-semibold group-hover:text-emerald-400">
                      Bench Press
                    </h3>

                    <p className="mt-1 text-sm text-zinc-400">
                      Chest • Barbell
                    </p>

                    <button className="mt-4 text-sm font-medium text-emerald-400">
                      View Exercise →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Public CTA */}
            {!isDashboard && (
              <div className="mt-12 rounded-3xl border border-zinc-800 bg-gradient-to-r from-zinc-900 to-zinc-950 p-8 text-center">
                <h2 className="text-2xl font-bold">
                  Unlock personalized workouts
                </h2>

                <p className="mt-2 text-zinc-400">
                  Save favorites, build routines, and track every rep with a
                  free Forge account.
                </p>

                <button className="mt-6 rounded-full bg-emerald-500 px-6 py-3 font-semibold text-black transition hover:bg-emerald-400">
                  Create Free Account
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ExerciseLibrary;
