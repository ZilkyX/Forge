import {
  Dumbbell,
  Globe,
  PlayCircle,
  Sparkles,
} from "lucide-react";

const stats = [
  {
    icon: Dumbbell,
    value: "1,324+",
    label: "Exercises",
    description:
      "From beginner to advanced, find the right exercise for every goal.",
  },
  {
    icon: Globe,
    value: "10",
    label: "Languages",
    description:
      "Learn with instructions available in your preferred language.",
  },
  {
    icon: PlayCircle,
    value: "GIF",
    label: "Demonstrations",
    description:
      "Watch proper form before every exercise with visual guides.",
  },
  {
    icon: Sparkles,
    value: "100%",
    label: "Free to Explore",
    description:
      "Browse the entire exercise library before creating an account.",
  },
];

const StatsSection = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-400/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
            By the Numbers
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Everything you need,
            <span className="text-emerald-400"> all in one place.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Forge gives you access to a massive exercise library, multilingual
            guidance, and tools designed to help you train consistently.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map(({ icon: Icon, value, label, description }) => (
            <div
              key={label}
              className="group rounded-3xl border border-border bg-card/40 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-card/70"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
                <Icon size={26} />
              </div>

              <div className="mt-6">
                <h3 className="text-4xl font-bold">{value}</h3>

                <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {label}
                </p>

                <div className="mt-4 h-px w-10 bg-emerald-500/60 transition-all duration-300 group-hover:w-16" />

                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;