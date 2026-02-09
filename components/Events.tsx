"use client";

import Image from "next/image";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { motion, Variants } from "framer-motion";

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
        image: "/sports pngs/cricket_icon.png",
        color: "#3B82F6", // Blue
    },
    {
        title: "Football",
        image: "/sports pngs/football_icon.png",
        color: "#3B82F6", // Blue
    },
    {
        title: "Basketball",
        image: "/sports pngs/basketball_icon.png",
        color: "#3B82F6", // Blue
    },
    {
        title: "Badminton",
        image: "/sports pngs/badminton_icon.png",
        color: "#3B82F6", // Blue
    },
    {
        title: "Tennis",
        image: "/sports pngs/Tennis_icon.png",
        color: "#3B82F6", // Blue
    },
    {
        title: "Volleyball",
        image: "/sports pngs/volleyball_icon.png",
        color: "#3B82F6", // Blue
    },
    {
        title: "Hockey",
        image: "/sports pngs/hockey_icon.png",
        color: "#3B82F6", // Blue
    },
    {
        title: "Squash",
        image: "/sports pngs/squash_icon.png",
        color: "#3B82F6", // Blue
    },
    {
        title: "Table Tennis",
        image: "/sports pngs/tt_icon.png",
        color: "#3B82F6", // Blue
    },
    {
        title: "Athletics",
        image: "/sports pngs/athletics_icon.png",
        color: "#3B82F6", // Blue
    },
    {
        title: "Chess",
        image: "/sports pngs/chess_icon.png",
        color: "#3B82F6", // Blue
    },
    {
        title: "Weightlifting",
        image: "/sports pngs/weightlifiing_icon.png",
        color: "#3B82F6", // Blue
    },
];

const informalSports = [
    {
        title: "Pitthu",
        // image: "/sports pngs/Pitthu_icon.png",
        color: "#3B82F6", // Blue
    },
    {
        title: "Dodgeball",
        // image: "/sports pngs/dodgeball_icon.png",    
        color: "#3B82F6", // Blue
    },
    {
        title: "Kabaddi",
        // image: "/sports pngs/kabaddi_icon.png",
        color: "#3B82F6", // Blue
    },
    {
        title: "Frisbee",
        // image: "/sports pngs/frisbee_icon.png",
        color: "#3B82F6", // Blue
    },
    {
        title: "Footvolley",
        // image: "/sports pngs/footvolley_icon.png",
        color: "#3B82F6", // Blue
    },
    {
        title: "Smash Karts (Online)",
        // image: "/sports pngs/smash_karts_icon.png",
        color: "#3B82F6", // Blue
    },
];

export default function EventsPage() {
    return (
        <section className="relative w-full min-h-screen overflow-y-auto text-white py-20 pb-40">
            {/* Background Image */}
            <div className="fixed inset-0 -z-10">
                <Image
                    src="/bg_events.png"
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
                    className="text-sm md:text-base text-center text-gray-300 font-ethnocentric mb-12 tracking-wider"
                >
                    POC: Name | +91 XXXXX XXXXX
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
                                backgroundImage="/events_card_bg.png"
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
                    className="text-sm md:text-base text-center text-gray-300 font-ethnocentric mb-12 tracking-wider"
                >
                    POC: Name | +91 XXXXX XXXXX
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
                                backgroundImage="/events_card_bg.png"
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
