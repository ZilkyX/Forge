import { Dumbbell, RefreshCw, WifiOff } from "lucide-react";

const PublicExerciseLibraryError = () => {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl border border-border bg-card p-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-destructive/10">
          <WifiOff className="h-8 w-8 text-destructive" />
        </div>

        <h1 className="mt-6 text-2xl font-bold">
          Couldn't load the exercise library
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          We couldn't connect to Forge right now. Check your connection or try
          again in a moment.
        </p>

        <div className="mt-8 flex flex-col gap-3">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
          >
            <RefreshCw className="h-4 w-4" />
            Try Again
          </button>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-5 py-3 font-medium transition hover:bg-accent"
          >
            <Dumbbell className="h-4 w-4" />
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
};

export default PublicExerciseLibraryError;
