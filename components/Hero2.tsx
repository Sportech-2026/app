"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero2() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/hero_bg.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>


      <div className="absolute bg-transparent inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
        <div className="relative w-[400px] h-[300px] md:w-[800px] md:h-[600px] z-30 pointer-events-auto">
          <Image
            src="/sportech_hero.png"
            alt="Sportech Hero"
            fill
            className="object-contain drop-shadow-4xl transition-all duration-500 ease-in-out hover:scale-110 cursor-pointer hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]"
            priority
          />
        </div>
      </div>

      <div className="hidden md:block absolute bottom-0 right-0 w-[1200px] h-[700px] pointer-events-none origin-bottom-right transform transition-transform duration-300 md:scale-[0.7] lg:scale-[0.85] xl:scale-100">
        <motion.div
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
        </motion.div>
      </div>
    </section>
  );
}
