"use client";

import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { motion } from "framer-motion";
import Image from "next/image";

// Placeholder data - just a list of strings since the component expects strings
const galleryImages = Array.from({ length: 32 }, (_, i) => `/gallery/placeholder-${i + 1}.jpg`);

export default function GalleryPage() {
    return (
        <div className="min-h-screen w-full relative text-white">
            {/* Background Image */}
            <div className="fixed inset-0 z-[-1]">
                <Image
                    src="/backgrounds/bg_events.png"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0" />
            </div>

            {/* Parallax Scroll Gallery */}
            <div className="w-full pt-12">
                <ParallaxScroll images={galleryImages} />
            </div>
        </div>
    );
}
