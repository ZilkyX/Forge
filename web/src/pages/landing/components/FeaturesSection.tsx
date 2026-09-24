import { BookOpen, Dumbbell, ChartLine, ArrowRight } from "lucide-react";

const features = [
  {
    title: "Discover Exercises",
    description:
      "Explore 1,324+ exercises with GIF demonstrations, detailed instructions, and multilingual guidance.",
    icon: BookOpen,
    accent: "emerald",
  },
  {
    title: "Build Custom Workouts",
    description:
      "Create personalized routines that match your goals, equipment, and experience level.",
    icon: Dumbbell,
    accent: "emerald",
  },
  {
    title: "Track Progress",
    description:
      "Stay consistent with streaks, weekly goals, training time, and beautiful progress charts.",
    icon: ChartLine,
    accent: "emerald",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Why Forge
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Everything you need to
            <span className="text-emerald-400"> reach your goals.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Forge combines a massive exercise library, personalized workouts,
            and progress tracking into one seamless experience.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Large Card */}
          <div className="group rounded-[32px] border border-border bg-card/40 p-8 backdrop-blur transition-all duration-300 hover:border-emerald-500/30">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-emerald-500/10 p-3 text-emerald-400">
                <BookOpen size={24} />
              </div>

              <div>
                <h3 className="text-2xl font-bold">Discover Exercises</h3>
                <p className="text-muted-foreground">1,324+ exercises</p>
              </div>
            </div>

            <p className="mt-5 leading-7 text-muted-foreground">
              Search by muscle group, equipment, or movement pattern and learn
              proper form with GIF demonstrations.
            </p>

            {/* Mock Exercise Library */}
            <div className="mt-8 rounded-3xl border border-border bg-background/60 p-5">
              <div className="mb-4 rounded-xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
                🔍 Search exercises...
              </div>

              <div className="mb-5 flex flex-wrap gap-2">
                {["All", "Chest", "Back", "Legs", "Shoulders"].map((item) => (
                  <span
                    key={item}
                    className={`rounded-full px-3 py-1 text-xs ${
                      item === "All"
                        ? "bg-emerald-500 text-black"
                        : "border border-border text-muted-foreground"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-xl border border-border"
                  >
                    <div className="aspect-square bg-zinc-800" />
                    <div className="p-2">
                      <div className="h-3 w-3/4 rounded bg-zinc-700" />
                      <div className="mt-2 h-2 w-1/2 rounded bg-zinc-800" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="mt-8 flex items-center gap-2 font-semibold text-emerald-400 transition group-hover:gap-3">
              Explore Library
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {features.slice(1).map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-[32px] border border-border bg-card/40 p-6 backdrop-blur transition-all duration-300 hover:border-emerald-500/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-emerald-500/10 p-3 text-emerald-400">
                      <Icon size={22} />
                    </div>

                    <h3 className="text-xl font-bold">{feature.title}</h3>
                  </div>

                  <p className="mt-4 leading-7 text-muted-foreground">
                    {feature.description}
                  </p>

                  {/* Fake UI Preview */}
                  <div className="mt-6 rounded-2xl border border-border bg-background/60 p-4">
                    <div className="space-y-3">
                      <div className="h-3 w-2/3 rounded bg-zinc-700" />
                      <div className="h-3 w-full rounded bg-zinc-800" />
                      <div className="h-3 w-3/4 rounded bg-zinc-800" />
                    </div>
                  </div>

                  <button className="mt-5 flex items-center gap-2 text-sm font-semibold text-emerald-400 transition group-hover:gap-3">
                    Learn More
                    <ArrowRight size={16} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
