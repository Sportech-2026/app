import Hero2 from "@/components/Hero2";
import MapSection from "@/components/MapSection";
import MarqueeBanner from "@/components/MarqueeBanner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero2 />
      <MarqueeBanner />
      <MapSection />
    </main>
  );
}
