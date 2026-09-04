import Hero from "@/components/Hero/Hero";
import FloatingCreatorButton from "@/components/FloatingCreatorButton";
import HowItWorks from "@/components/HowItWorks/HowItWorks";

import FAQ from "@/components/FAQ/FAQ";
import Comparison from "@/components/Comparison/Comparison";

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Comparison />
      <FAQ />
      <FloatingCreatorButton />
    </main>
  );
}
