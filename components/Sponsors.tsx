"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const sponsors = {
    title: [
        { name: "Title Sponsor", logo: "/sportech_logo.png" },
    ],
    associates: [
        { name: "Placeholder", logo: "/iitd_logo 1.png" },
        { name: "Associate 1", logo: "/sportech_logo.png" },
        { name: "Associate 2", logo: "/sportech_logo.png" },
        { name: "Associate 3", logo: "/iitd_logo 1.png" },
        { name: "Associate 4", logo: "/sportech_logo.png" },
        { name: "Associate 5", logo: "/iitd_logo 1.png" },
        { name: "Associate 6", logo: "/sportech_logo.png" },
        { name: "Associate 7", logo: "/iitd_logo 1.png" },
        { name: "Associate 8", logo: "/sportech_logo.png" },
    ],
};

const SponsorCard = ({ name, tier, logo }: { name: string; tier: string; logo: string }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
            }}
            className={`
        relative group flex items-center justify-center 
        bg-white/5 backdrop-blur-sm border border-white/10 rounded-full
        hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300
        z-50 aspect-square
        ${tier === "title" ? "w-64 md:w-80" : "w-32 md:w-48"}
      `}
        >
            <div className="flex flex-col items-center justify-center gap-4 p-6 w-full h-full relative z-10">
                <div className="relative w-3/5 h-3/5 flex items-center justify-center">
                    <Image
                        src={logo}
                        alt={name}
                        fill
                        className="object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                </div>
                <span className="text-white/50 group-hover:text-blue-400 font-ethnocentric text-center text-xs md:text-sm transition-colors">
                    {name}
                </span>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-blue-500/10 blur-xl -z-10" />
        </motion.div>
    );
};

export default function Sponsors() {
    return (
        <div className="min-h-screen w-full bg-[#02050a] pt-24 pb-20 px-4 md:px-8 relative overflow-hidden flex flex-col items-center">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                {/* Multiple ShootingStars for higher density */}
                <ShootingStars minDelay={500} maxDelay={1500} starColor="#9E00FF" trailColor="#2EB9DF" />
                <ShootingStars minDelay={1000} maxDelay={2000} starColor="#FF0099" trailColor="#FFB800" />
                <ShootingStars minDelay={1500} maxDelay={2500} starColor="#00FF9E" trailColor="#00B8FF" />

                <StarsBackground starDensity={0.0005} allStarsTwinkle={true} twinkleProbability={0.8} />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 w-full">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-ethnocentric text-center text-white mb-16 tracking-wider"
                >
                    OUR <span className="text-blue-500">SPONSORS</span>
                </motion.h1>

                {/* Title Sponsors */}
                <section className="mb-16 flex flex-col items-center w-full">
                    <h2 className="text-2xl font-ethnocentric text-white mb-8 tracking-widest text-center">TITLE SPONSOR</h2>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="w-full flex justify-center"
                    >
                        {sponsors.title.map((sponsor, idx) => (
                            <SponsorCard key={idx} name={sponsor.name} tier="title" logo={sponsor.logo} />
                        ))}
                    </motion.div>
                </section>

                {/* Associate Sponsors (Merged) */}
                <section className="mb-20">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.1 }}
                        className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto"
                    >
                        {sponsors.associates.map((sponsor, idx) => (
                            <SponsorCard key={idx} name={sponsor.name} tier="associate" logo={sponsor.logo} />
                        ))}
                    </motion.div>
                </section>
            </div>
        </div>
    );
}
