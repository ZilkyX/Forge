import { ArrowRight, Play, Flame, Dumbbell, Trophy } from "lucide-react";

import SplitText from "@/components/reactbits/SplitText";
import BlurText from "@/components/reactbits/BlurText";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import ShinyText from "@/components/reactbits/ShinyText";

const HeroSection = () => {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-16">
      <div className="grid w-full items-center gap-16  lg:grid-cols-2">
        <AnimatedContent distance={40}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 backdrop-blur-md">
            <Flame size={16} className="text-primary" />
            <ShinyText
              text="BUILD YOUR FUTURE"
              color="var(--primary)"
              shineColor="var(--foreground)"
              speed={2}
              className="text-sm font-semibold tracking-[0.25em]"
            />
          </div>
          <div>
            <SplitText
              text="BUILD YOUR"
              className="text-5xl font-black leading-[0.9] sm:text-6xl lg:text-7xl"
            />
            <br />
            <SplitText
              text=" STRONGEST"
              className="text-5xl font-black leading-[0.9] text-primary sm:text-6xl lg:text-7xl"
            />
            <br />

            <SplitText
              text=" SELF"
              className="text-5xl font-black leading-[0.9] sm:text-6xl lg:text-7xl"
            />

            <BlurText
              text="Every workout is another step toward becoming stronger, healthier, and more confident."
              className="mt-6 max-w-lg text-lg leading-8 text-muted-foreground"
            />

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="group flex items-center gap-2 rounded-xl bg-primary px-7 py-4 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition">
                Get Started
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </button>

              <button className="group flex items-center gap-3 rounded-xl border border-border bg-card/60 px-6 py-4 backdrop-blur-xl transition hover:border-primary/40">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Play size={18} fill="currentColor" />
                </span>
                Watch Demo
              </button>
            </div>
          </div>
        </AnimatedContent>

        {/* RIGHT */}

        <AnimatedContent distance={60}>
          <div className="relative lg:flex justify-center hidden">
            <div className="absolute h-[450px] w-[450px] rounded-full bg-primary/20 blur-[120px]" />

            <div className="overflow-hidden rounded-[40px] border border-border bg-card shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80"
                alt="Athlete"
                className="h-[620px] w-full object-cover"
              />
            </div>

            <div className="absolute left-0 top-8">
              <SpotlightCard className="w-56 border-border bg-card/80 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-primary/10 p-3 text-primary">
                    <Dumbbell size={22} />
                  </div>

                  <div>
                    <p className="font-semibold text-accent-foreground">
                      Workout Streak
                    </p>
                    <p className="text-sm text-accent-foreground">28 Days</p>
                  </div>
                </div>
              </SpotlightCard>
            </div>

            <div className="absolute bottom-8 right-0">
              <SpotlightCard className="w-56 border-border bg-card/80 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-primary/10 p-3 text-primary">
                    <Trophy size={22} />
                  </div>
                  <div>
                    <p className="font-semibold text-accent-foreground">
                      Calories Burned
                    </p>
                    <p className="text-sm text-accent-foreground">1,240 kcal</p>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default HeroSection;
