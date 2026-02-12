"use client";

import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
    "/gallery/DSC06784.JPG",
    "/gallery/DSC06801.JPG",
    "/gallery/DSC06807.JPG",
    "/gallery/DSC06834.JPG",
    "/gallery/DSC07025.JPG",
    "/gallery/DSC07046.JPG",
    "/gallery/DSC07051.JPG",
    "/gallery/DSC07060.JPG",
    "/gallery/DSC07076.JPG",
    "/gallery/DSC07084.JPG",
    "/gallery/DSC07101.JPG",
    "/gallery/DSC07103.JPG",
    "/gallery/DSC08489.JPG",
    "/gallery/DSC08496.JPG",
    "/gallery/DSC08501.JPG",
    "/gallery/DSC08510.JPG",
    "/gallery/DSC08645.JPG",
    "/gallery/DSC08650.JPG",
    "/gallery/DSC08652.JPG",
    "/gallery/DSC08654.JPG",
    "/gallery/DSC08658.JPG",
    "/gallery/WhatsApp Image 2026-02-12 at 12.46.40 (1).jpeg",
    "/gallery/WhatsApp Image 2026-02-12 at 12.46.40 (2).jpeg",
    "/gallery/WhatsApp Image 2026-02-12 at 12.46.40.jpeg",
];

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
            <ParallaxScroll images={images} />
        </div>
    );
}
