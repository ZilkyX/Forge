import { Bot, Watch, Smartphone, Sparkles, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Workout Coach",
    badge: "Coming Soon",
    description:
      "Receive personalized workout suggestions based on your goals, available equipment, and training history.",
    gradient: "from-emerald-500/20 to-transparent",
  },
  {
    icon: Watch,
    title: "Wearable Sync",
    badge: "In Development",
    description:
      "Connect your smartwatch to automatically track workouts, calories, and recovery.",
    gradient: "from-cyan-500/20 to-transparent",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    badge: "Planned",
    description:
      "Take Forge everywhere with offline workouts, reminders, and quick workout logging.",
    gradient: "from-violet-500/20 to-transparent",
  },
];

const FutureFeatures = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-violet-500/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
            <Sparkles size={14} />
            What's Next
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            The future of
            <span className="text-emerald-400"> Forge.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            We're building features that make staying consistent even easier—
            from AI-powered coaching to seamless wearable integration.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card/50 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30"
              >
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-60 transition-opacity group-hover:opacity-100`}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
                      <Icon size={26} />
                    </div>

                    <span className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-bold">{feature.title}</h3>

                  <p className="mt-3 leading-7 text-muted-foreground">
                    {feature.description}
                  </p>

                  {/* Fake UI Preview */}
                  <div className="mt-8 rounded-2xl border border-border bg-background/60 p-4 backdrop-blur">
                    <div className="mb-3 flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-red-400" />
                      <div className="h-2 w-2 rounded-full bg-yellow-400" />
                      <div className="h-2 w-2 rounded-full bg-green-400" />
                    </div>

                    <div className="space-y-3 opacity-80">
                      <div className="h-3 w-3/4 rounded bg-muted" />
                      <div className="h-3 w-full rounded bg-muted" />
                      <div className="h-3 w-2/3 rounded bg-muted" />
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-emerald-400">
                    Learn more
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FutureFeatures;
