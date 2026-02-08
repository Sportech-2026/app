"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Hero2() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-20">
        <ShootingStars minDelay={1000} maxDelay={2000} starColor="#9E00FF" trailColor="#2EB9DF"  />
        <StarsBackground starDensity={0.003} allStarsTwinkle={true} twinkleProbability={0.9} />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }} // Reduced opacity to let stars show through
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0" // Changed z-index
      >
        <Image
          src="/hero_bg.png"
          alt="Hero Background"
          fill
          className="object-cover mix-blend-overlay" // Added mix-blend-mode
          priority
        />
      </motion.div>


      <div className="absolute bg-transparent inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative w-[400px] h-[300px] md:w-[800px] md:h-[600px] z-30 pointer-events-auto"
        >
          <Image
            src="/sportech_hero.png"
            alt="Sportech Hero"
            fill
            className="object-contain drop-shadow-4xl transition-all duration-500 ease-in-out hover:scale-110 cursor-pointer hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]"
            priority
          />
        </motion.div>
      </div>

      <div className="hidden md:block absolute bottom-0 right-0 w-[1200px] h-[700px] pointer-events-none origin-bottom-right transform transition-transform duration-300 md:scale-[0.7] lg:scale-[0.85] xl:scale-100 z-10">
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full relative"
        >
          <motion.div
            animate={{ y: [0, -15, 0], scale: [1, 1.02, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full relative"
          >
            <Image
              src="/athelete_wave_no_bg.png"
              alt="Athlete with Wave"
              fill
              className="object-contain object-bottom"
              priority
            />
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  );
}
