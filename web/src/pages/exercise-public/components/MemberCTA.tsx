import { Link } from "react-router-dom";

const MemberCTA = () => {
  return (
    <div className="mt-12 rounded-3xl border border-border bg-linear-to-r from-card to-background p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            Ready to build your next workout?
          </h2>

          <p className="mt-2 text-muted-foreground">
            Save exercises, create custom workout plans, and track your progress
            inside Forge.
          </p>
        </div>

        <Link
          to="/app"
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
        >
          Open Dashboard
        </Link>
      </div>
    </div>
  );
};

export default MemberCTA;
