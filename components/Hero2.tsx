"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SparklesCore } from "./ui/sparkles";
import Book3D from "./ui/3d-book";
import MarqueeBanner from "./MarqueeBanner";



export default function Hero2() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Dynamic Background */}


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }} // Reduced opacity to let stars show through
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0" // Changed z-index
      >
        <Image
          src="/backgrounds/hero_bg.png"
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
          className="relative w-[400px] h-[300px] md:w-[800px] md:h-[300px] z-30 pointer-events-auto "
        >
          <Image
            src="/heroes/sportech_hero.png"
            alt="Sportech Hero"
            fill
            className="object-contain drop-shadow-4xl transition-all duration-500 ease-in-out hover:scale-110 cursor-pointer hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.2)] "
            priority
          />
        </motion.div>

        {/* Sparkles Effect */}
        <div className="w-full max-w-[50rem] h-24 md:h-40 relative -mt-16 md:-mt-8 px-4">
          {/* Gradients */}
          <div className="absolute inset-x-4 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-400 to-transparent h-[2px] md:h-[3px] w-3/4 blur-[1px] drop-shadow-[0_0_10px_rgba(129,140,248,0.8)]" />
          <div className="absolute inset-x-4 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-300 to-transparent h-px md:h-[2px] w-3/4" />
          <div className="absolute inset-x-12 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-400 to-transparent h-[4px] md:h-[6px] w-1/4 blur-[1px] drop-shadow-[0_0_12px_rgba(56,189,248,0.9)]" />
          <div className="absolute inset-x-12 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-300 to-transparent h-px md:h-[2px] w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1500}
            className="w-full h-full opacity-20 [mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_80%)]"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/30 to-transparent [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>


      {/* Hero waves - full screen */}
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{
          opacity: 0.3,
          scale: [1, 1.05, 1],
          y: [0, -15, 0]
        }}
        transition={{
          opacity: { duration: 1.5, ease: "easeOut", delay: 0.5 },
          scale: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }}
        className="hidden md:block absolute inset-0 z-10 pointer-events-none w-full h-full origin-bottom"
      >
        <Image
          src="/heroes/waves_bg.png"
          alt="Hero Waves"
          fill
          className="object-contain md:object-cover object-bottom"
          priority
        />
      </motion.div>

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
              src="/heroes/athelete_wave_no_bg.png"
              alt="Athlete with Wave"
              fill
              className="object-contain object-bottom"
              priority
            />
          </motion.div>
        </motion.div> */}

      {/* Marquee Banner - fades at edges, full opacity in center */}
      <div
        className="absolute bottom-0 left-0 right-0 z-40 md:[-webkit-mask-image:linear-gradient(to_right,transparent_10%,black_50%,black_50%,transparent_85%)] md:[mask-image:linear-gradient(to_right,transparent_15%,black_50%,black_50%,transparent_85%)]"
      >
        <MarqueeBanner />
      </div>
    </section>
  );
}
