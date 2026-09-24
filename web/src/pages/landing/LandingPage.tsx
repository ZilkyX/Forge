import FeaturesSection from "./components/FeaturesSection";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import Outcome from "./components/Outcome";
import StatsSection from "./components/StatsSection";

const LandingPage = () => {
  return (

    <main className=" min-h-screen overflow-hidden bg-background text-foreground">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <Outcome />
    </main>
  );
};

export default LandingPage;
