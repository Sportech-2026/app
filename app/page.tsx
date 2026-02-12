import Hero2 from "@/components/Hero2";
import FaqSection from "@/components/FaqSection";
import MapSection from "@/components/MapSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero2 />
      <MapSection />
      <FaqSection />
    </main>
  );
}
