"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MapSection() {
    return (
        <section className="w-full py-20 relative flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0 bg-blue-500/50">
                <Image
                    src="/map_bg.png"
                    alt="Background"
                    fill
                    className="object-cover opacity-60"
                    quality={100}
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-10" />
            </div>

            <div className="container mx-auto px-4 z-10">

                <h2
                    className="text-4xl md:text-6xl font-bold text-center text-white mb-12 relative z-10 tracking-wider"
                    style={{ fontFamily: 'var(--font-ethno)' }}
                >
                    CAMPUS MAP
                </h2>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-full h-[70vh] md:h-[90vh] rounded-2xl overflow-hidden  " // Increased height
                >
                    <Image
                        src="/iitd-map-2.png"
                        alt="IIT Delhi Map"
                        fill
                        className="object-contain" // Changed to contain to show full map
                        quality={100}
                    />
                </motion.div>
            </div>
        </section>
    );
}
