import dynamic from "next/dynamic";
import Hero from "@/components/Hero/Hero";
const FloatingCreatorButton = dynamic(
  () => import("@/components/FloatingCreatorButton"),
);
const HowItWorks = dynamic(() => import("@/components/HowItWorks/HowItWorks"));
const FAQ = dynamic(() => import("@/components/FAQ/FAQ"));
const Comparison = dynamic(() => import("@/components/Comparison/Comparison"));

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
