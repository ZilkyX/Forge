import {
  ArrowRight,
  Calendar,
  Clock,
  Flame,
  Dumbbell,
  TrendingUp,
  Trophy,
  Target,
} from "lucide-react";

const stats = [
  { label: "Current Streak", value: "12 days", icon: Flame },
  { label: "Workouts", value: "18", icon: Dumbbell },
  { label: "Training Time", value: "9.5 hrs", icon: Clock },
  { label: "Weekly Goal", value: "4/5", icon: Target },
];

const week = [
  { day: "Mon", workout: "Push", done: true },
  { day: "Tue", workout: "Pull", done: true },
  { day: "Wed", workout: "Rest", done: false },
  { day: "Thu", workout: "Legs", done: false },
  { day: "Fri", workout: "Upper", done: false },
];

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/15 via-background to-background p-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Welcome back
            </p>

            <h1 className="mt-3 text-4xl font-bold lg:text-5xl">
              Continue your Push Day
            </h1>

            <p className="mt-4 text-muted-foreground">
              Chest • Shoulders • Triceps · You're halfway through today's
              workout.
            </p>

            <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90">
              Resume Workout
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid w-full max-w-sm grid-cols-2 gap-4">
            <div className="rounded-2xl border border-border bg-card/60 p-4 backdrop-blur">
              <p className="text-sm text-muted-foreground">Current Streak</p>
              <p className="mt-2 text-3xl font-bold">12🔥</p>
            </div>

            <div className="rounded-2xl border border-border bg-card/60 p-4 backdrop-blur">
              <p className="text-sm text-muted-foreground">Next Workout</p>
              <p className="mt-2 text-xl font-bold">Pull</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="rounded-3xl border border-border bg-card p-5 transition hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{label}</span>
              <Icon className="text-primary" size={20} />
            </div>

            <h3 className="mt-4 text-3xl font-bold">{value}</h3>
          </div>
        ))}
      </section>

      {/* Main Content */}
      <section className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
        {/* Weekly Plan */}
        <div className="rounded-3xl border border-border bg-card p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">This Week</h2>
              <p className="text-sm text-muted-foreground">
                Stay consistent with your routine.
              </p>
            </div>

            <Calendar className="text-primary" />
          </div>

          <div className="space-y-3">
            {week.map((item) => (
              <div
                key={item.day}
                className="flex items-center justify-between rounded-2xl border border-border px-4 py-4 transition hover:border-primary/30"
              >
                <div>
                  <p className="font-semibold">{item.day}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.workout}
                  </p>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    item.done
                      ? "bg-primary text-primary-foreground"
                      : "border border-border text-muted-foreground"
                  }`}
                >
                  {item.done ? "Done" : "Upcoming"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Progress */}
          <div className="rounded-3xl border border-border bg-card p-6">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-bold">Progress</h2>
              <TrendingUp className="text-primary" />
            </div>

            <div className="space-y-5">
              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span>Weekly Goal</span>
                  <span>80%</span>
                </div>

                <div className="h-2 rounded-full bg-muted">
                  <div className="h-full w-4/5 rounded-full bg-primary" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span>Monthly Consistency</span>
                  <span>72%</span>
                </div>

                <div className="h-2 rounded-full bg-muted">
                  <div className="h-full w-[72%] rounded-full bg-primary" />
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="rounded-3xl border border-border bg-card p-6">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-bold">Recent Activity</h2>
              <Trophy className="text-primary" />
            </div>

            <div className="space-y-4">
              {[
                {
                  workout: "Push Day",
                  time: "Yesterday",
                  duration: "48 min",
                },
                { workout: "Pull Day", time: "2 days ago", duration: "55 min" },
                { workout: "Leg Day", time: "4 days ago", duration: "62 min" },
              ].map((activity) => (
                <div
                  key={`${activity.workout}-${activity.time}`}
                  className="flex items-center justify-between rounded-2xl border border-border px-4 py-3"
                >
                  <div>
                    <p className="font-medium">{activity.workout}</p>
                    <p className="text-sm text-muted-foreground">
                      {activity.time}
                    </p>
                  </div>

                  <span className="text-sm font-medium">
                    {activity.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
