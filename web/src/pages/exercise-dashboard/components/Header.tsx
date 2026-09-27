import { Button } from "@/components/ui/button";
import { ArrowRight, Dumbbell } from "lucide-react";

const Header = () => {
  return (
    <section className="rounded-3xl border border-border bg-linear-to-br from-primary/10 via-background to-background p-5 sm:p-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1">
            <Dumbbell className="h-4 w-4 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Exercise Library
            </span>
          </div>

          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Find the right exercise in seconds.
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
              Browse over{" "}
              <span className="font-semibold text-foreground">
                1,324 exercises
              </span>{" "}
              with GIF demonstrations, detailed instructions, and smart
              filtering by muscle group, equipment, and movement.
            </p>
          </div>
        </div>
        <Button size="lg" className="rounded-xl px-6">
          New Workout
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default Header;
