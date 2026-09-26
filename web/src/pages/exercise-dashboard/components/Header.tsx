const Header = () => {
  return (
    <section>
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-primary text-sm uppercase tracking-tight">
            Forge Library
          </p>
          <h1 className="text-4xl">Browse your favorite exercises</h1>
          <p className="mt-3 max-w-2xl text-lg text-zinc-400">
            Explore over 1,300 guided exercises with GIF previews, detailed
            instructions, and muscle-specific filtering.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
