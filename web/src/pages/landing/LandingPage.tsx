const LandingPage = () => {
  return (
    <main className="min-h-screen bg-[#17181c] text-white">
      <section className="min-h-[calc(100vh-80px)] px-6 py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
              build your future
          </p>
          <h1 className="max-w-3x1 text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              BUILD YOUR
              <span className="block text-primary">STRONGEST</span>
              SELF.
          <div >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-red-500">  
              Fitness for everyone
            </p>
          </div>
          </h1>
          <p className="mt-6 max-w-lg leading-8 text-primary">
             Winners are just a losers, Who Tried again.
          </p>
          </div>
          <div className="relative">
            <img src="landing model/model.jpg" alt="model image" className="h-125 overflow-hidden w-full rounded-3xl object-cover"/>
          <div className="relatuve"><img src="landing model/model2.png" alt="athlete training" />
          <div className="absolute bottom-6 left-6 rounded-xl border border-white/10 bg-black/70 p-4 backdrop-blur-md">
          <p className="text-xs text-gray-400"> workout burn</p> 
          <p className="text-2xl font-bold"> 150 cal</p>             
          </div>
          </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
          <button className="rounded-lg bg-primary px-6 py-3 font-semibold transition hover:bg-black">
              Get Started
          </button>

          <button className="flex items-center gap-2 px-4 py-3 font-semibold text-gray-300 transition hover:text-white">
              <span className="flex h-9 w-9 item-center justify-center reounded-full border border-gray-600">
                ▶
              </span>
              WATCH DEMO
          </button>
          <div className="mt-12 flex gap-10 border-t border-gray-800 pt-8"></div>
          <p className="text-2xl font-bold">50k+</p>
          <p className="text-sm text-gray-500">Members</p>
          </div>

          <div>
            <p className="text-2xl font-bold">20k+</p>
            <p className=" text-sm text-gray-500">Programs</p>
          <div>
            <p className="text-2xl font-bold">105+</p>
            <p className="text-xs text-gray-500">Expert Trainers</p>
          </div>
          </div>
        </div>
      </section>
      <section className="border-y border white/10 bg-[#36373b]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div>
          <p className="text-2xl font-bold">
            90k+ More
          </p>
          <p className="text-sm text-gray-300">
            Trusted Companies partner 
          </p>
          <p className="text-2xl font-bold">
            FORGE
          </p>
          <p className="text-sm text-gray-300">
            Built For Your Fitness Journey
          </p>
        </div>
        </div>
        <div className="flex items-center gap-8 text-xl font-bold text-white">
          <span>FORGE</span>
          <span>FITNESS</span>
          <span>TRAIN</span>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
