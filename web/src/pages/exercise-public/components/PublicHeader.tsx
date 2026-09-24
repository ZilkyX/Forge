const PublicHeader = () => {
  return (
    <section className="mb-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Forge Library
          </p>

          <h1 className="mt-2 text-4xl font-bold lg:text-5xl">
            Discover your next workout
          </h1>

          <p className="mt-3 max-w-2xl text-lg text-zinc-400">
            Explore over 1,300 guided exercises with GIF previews, detailed
            instructions, and muscle-specific filtering.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PublicHeader;
