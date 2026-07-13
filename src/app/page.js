import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatBand } from "@/components/StatBand";
import { SchedulingSection } from "@/components/SchedulingSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import WhyDentalCare from "@/components/WhyDentalCare";
import { RoiSection } from "@/components/RoiSection";
import SeeInAction from "@/components/SeeInAction";
import { PilotProgram } from "@/components/PilotProgram";
import { FAQ } from "@/components/FAQ";
import ReserveYourSpot from "@/components/ReserveYourSpot";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[var(--color-background)] font-sans selection:bg-[var(--color-primary)] selection:text-white">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <StatBand />
        <SchedulingSection />
        <WhyDentalCare />
        <RoiSection />
        <HowItWorks />
        <Features />
        <SeeInAction />
        <PilotProgram />
        <FAQ />
        <ReserveYourSpot />
      </main>
      <Footer />
    </div>
  );
}
