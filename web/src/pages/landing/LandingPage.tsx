const LandingPage = () => {
  return (
    <main className="min-h-screen bg-[#17181c]">
    <section className="min-h-[calc(100vh-80px)] px-6 py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

        <div> 
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
          build your future
        </p> 
         <h1 className="max-w-3x1 text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
          BUILD YOUR
          <span
          className="block text-primary">STRONGEST</span>
          SELF.
         </h1>
         <p className="mt-6 max-w-lg leading-8 text-gray-400">
            Winners are just a losers, Who Tried again
         </p>
        </div>
        <div className="relative"><img src="" alt="model image" /></div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button className="rounded-lg bg-red-500 px-6 py-3 font-semibold transition hover:bg-red-600">
            Get Started
          </button>

          <button className="flex items-center gap-2 px-4 py-3 font-semibold text-gray-300 transition hover:text-white">
            <span className="flex h-9 w-9 item-center justify-center reounded-full border border-gray-600">▶

            </span>
            WATCH DEMO
          </button>
          <div className="mt-12 flex gap-10 border-t border-gray-800 pt-8">
          </div>
          <p className="text-2xl font-bold">50k+</p>
          <p className="text-sm text-gray-500"></p>
        </div>

        <div>
          <p className="text-2xl font-bold">20k+</p>
          <p className=" text-sm text-gray-500"></p>
        </div>

      </div>
    </section>

  
  
  </main>
  );
};

export default LandingPage;
