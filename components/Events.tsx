"use client";

import Image from "next/image";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { motion, Variants } from "framer-motion";
import { Mail } from "lucide-react";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    },
};

const formalSports = [
    {
        title: "Cricket",
        image: "/icons/sports/cricket_icon.png",
        color: "#3B82F6", // Blue
    },
    {
        title: "Football",
        image: "/icons/sports/football_icon.png",
        color: "#3B82F6", // Blue
    },
    {
        title: "Basketball",
        image: "/icons/sports/basketball_icon.png",
        color: "#3B82F6", // Blue
    },
    {
        title: "Badminton",
        image: "/icons/sports/badminton_icon.png",
        color: "#3B82F6", // Blue
    },
    {
        title: "Tennis",
        image: "/icons/sports/Tennis_icon.png",
        color: "#3B82F6", // Blue
    },
    {
        title: "Volleyball",
        image: "/icons/sports/volleyball_icon.png",
        color: "#3B82F6", // Blue
    },
    {
        title: "Hockey",
        image: "/icons/sports/hockey_icon.png",
        color: "#3B82F6", // Blue
    },
    {
        title: "Squash",
        image: "/icons/sports/squash_icon.png",
        color: "#3B82F6", // Blue
    },
    {
        title: "Table Tennis",
        image: "/icons/sports/tt_icon.png",
        color: "#3B82F6", // Blue
    },
    {
        title: "Athletics",
        image: "/icons/sports/athletics_icon.png",
        color: "#3B82F6", // Blue
    },
    {
        title: "Chess",
        image: "/icons/sports/chess_icon.png",
        color: "#3B82F6", // Blue
    },
    {
        title: "Weightlifting",
        image: "/icons/sports/weightlifiing_icon.png",
        color: "#3B82F6", // Blue
    },
];

const informalSports = [
    {
        title: "Pitthu",
        // image: "/icons/sports/Pitthu_icon.png",
        color: "#3B82F6", // Blue
    },
    {
        title: "Dodgeball",
        // image: "/icons/sports/dodgeball_icon.png",    
        color: "#3B82F6", // Blue
    },
    {
        title: "Kabaddi",
        // image: "/icons/sports/kabaddi_icon.png",
        color: "#3B82F6", // Blue
    },
    {
        title: "Frisbee",
        // image: "/icons/sports/frisbee_icon.png",
        color: "#3B82F6", // Blue
    },
    {
        title: "Footvolley",
        // image: "/icons/sports/footvolley_icon.png",
        color: "#3B82F6", // Blue
    },
    {
        title: "Smash Karts (Online)",
        // image: "/icons/sports/smash_karts_icon.png",
        color: "#3B82F6", // Blue
    },
];

export default function EventsPage() {
    return (
        <section className="relative w-full min-h-screen overflow-y-auto text-white py-20 pb-40">
            {/* Background Image */}
            <div className="fixed inset-0 -z-10">
                <Image
                    src="/backgrounds/bg_events.png"
                    alt="Events Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold tracking-wider uppercase md:text-6xl mb-4 mt-6 text-center font-ethnocentric"
                >
                    Formals
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-sm md:text-base text-center text-gray-300 mb-12 tracking-wider flex justify-center items-center gap-2"
                >
                    <span className="font-semibold">POC: Krish</span> | +91 XXXXX XXXXX
                </motion.p>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-wrap justify-center gap-12 w-full max-w-7xl"
                >
                    {formalSports.map((sport, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="h-[300px] w-[80%] max-w-[320px] sm:w-[45%] md:w-[30%] lg:w-[18%] xl:w-[16%]"
                        >
                            <CardSpotlight
                                className="h-full w-full flex flex-col items-center justify-between p-4 border border-white/10 rounded-xl"
                                color={sport.color}
                                backgroundImage="/backgrounds/events_card_bg.png"
                            >
                                {/* PNG Container - Centered */}
                                <div className="flex-1 flex items-center justify-center relative z-20 w-full group-hover/spotlight:scale-110 transition-transform duration-500">
                                    {/* Decorative glow behind the PNG */}
                                    <div
                                        className="absolute inset-0 rounded-full blur-3xl opacity-0 group-hover/spotlight:opacity-60 transition-opacity"
                                        style={{ backgroundColor: `${sport.color}40` }} // 25% opacity
                                    />

                                    <Image
                                        src={sport.image}
                                        alt={`${sport.title} Icon`}
                                        width={160}
                                        height={160}
                                        className="relative z-30 object-contain drop-shadow-lg"
                                    />
                                </div>

                                {/* Title at the bottom */}
                                <h3
                                    className="text-sm font-bold tracking-widest uppercase relative z-20  text-center font-ethnocentric w-full break-words px-2 leading-tight"
                                    style={{ color: sport.color }}
                                >
                                    {sport.title}
                                </h3>
                            </CardSpotlight>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Informals Section */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold tracking-wider uppercase md:text-6xl mb-4 mt-24 text-center font-ethnocentric"
                >
                    Informals
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-sm md:text-base text-center text-gray-300 mb-12 tracking-wider flex justify-center items-center gap-2"
                >
                    <span className="font-semibold">POC: Vartika</span>
                    <span className="hidden md:inline">|</span>
                    <a href="mailto:bb1230918@iitd.ac.in" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                        <Mail className="w-4 h-4" />
                        bb1230918@iitd.ac.in
                    </a>
                </motion.p>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-12 w-full max-w-7xl"
                >
                    {informalSports.map((sport, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="h-[100px] w-[80%] max-w-[320px] sm:w-[45%] md:w-[30%] lg:w-[18%] xl:w-[16%]"
                        >
                            <CardSpotlight
                                className="h-full w-full flex items-center justify-center p-4 border border-white/10 rounded-xl"
                                color={sport.color}
                                backgroundImage="/backgrounds/events_card_bg.png"
                            >
                                <h3
                                    className="text-sm font-bold tracking-widest uppercase relative z-20 text-center font-ethnocentric leading-tight px-1 group-hover/spotlight:scale-110 transition-transform duration-500"
                                    style={{ color: sport.color }}
                                >
                                    {sport.title}
                                </h3>
                            </CardSpotlight>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

        </section>
    );
}
