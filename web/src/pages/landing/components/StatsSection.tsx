import ShinyText from '@/components/reactbits/ShinyText'
import React from 'react'

const StatsSection = () => {
  return (
    <section className="border-y border-white/10 bg-[#36373b]">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

    {/* LEFT */}
    <div>
      
      <ShinyText
            className="text-xl font-bold tracking-tight"
            text="FORGE"
            speed={2}
            delay={0}
            color="var(--primary)"
            shineColor="var(--foreground)"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={true}
            disabled={false}
        />

      <p className="mt-1 text-sm text-gray-400">
        Built For Your Fitness Journey
      </p>
    </div>

    {/* RIGHT */}
    <div className="flex items-center gap-8 text-sm font-semibold text-gray-300">
      <span>WORKOUTS</span>
      <span>TRAINING</span>
      <span>PROGRESS</span>
    </div>

  </div>
</section>
  )
}

export default StatsSection