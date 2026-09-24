import { SignInButton } from "@clerk/react";

const GuestCTA = () => {
  return (
    <div className="mt-12 rounded-3xl border border-border bg-linear-to-r from-card to-background p-8 text-center">
      <h2 className="text-2xl font-bold">Unlock Personalized Workouts</h2>

      <p className="mt-2 text-muted-foreground">
        Save favorite exercises, build custom routines, track every rep, and
        access the complete Forge experience.
      </p>

      <SignInButton mode="modal">
        <button className="mt-6 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90">
          Start Training Free
        </button>
      </SignInButton>
    </div>
  );
};

export default GuestCTA;
