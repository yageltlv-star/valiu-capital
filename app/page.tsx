import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Stats />
      <HowItWorks />
      <CTA />
    </main>
  );
}
