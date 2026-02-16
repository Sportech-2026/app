import Hero2 from "@/components/Hero2";
import FaqSection from "@/components/FaqSection";
import MapSection from "@/components/MapSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sportech 2026 | IIT Delhi's Annual Sports Festival",
  description: "Experience the thrill of Sportech, IIT Delhi's annual sports festival. Join us for exciting events, competitions, and a celebration of athleticism. The largest sports fest in North India.",
  keywords: ["Sportech", "IIT Delhi", "Sports Festival", "College Fest", "Delhi Events"],
  openGraph: {
    title: "Sportech 2026 | IIT Delhi",
    description: "The largest sports festival in North India at IIT Delhi.",
    url: "https://sportech-iitd.com",
    siteName: "Sportech 2026",
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero2 />
      <MapSection />
      <FaqSection />
    </main>
  );
}
