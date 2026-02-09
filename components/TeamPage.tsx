'use client';
import Image from "next/image";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    },
};

const teamMembers = [
    {
        name: "Tatsam Sharma",
        role: "General Secretary",
        image: "/dp_place.jpg",
    },
    {
        name: "Talin Sharma",
        role: "Deputy General Secretary",
        image: "/dp_place.jpg",
    },
    {
        name: "Dushyant Soni",
        role: "Deputy General Secretary PG",
        image: "/dp_place.jpg",
    },
    {
        name: "Vara ",
        role: "Overall Coordinator",
        image: "/dp_place.jpg",
    },
    {
        name: "Arjun Sharma",
        role: "Co-Overall Coordinator",
        image: "/dp_place.jpg",
    },
    {
        name: "Emily Davis",
        role: "CTM",
        image: "/dp_place.jpg",
    },
    {
        name: "Emily Davis",
        role: "CTM",
        image: "/dp_place.jpg",
    },
    {
        name: "Emily Davis",
        role: "CTM",
        image: "/dp_place.jpg",
    },
    {
        name: "Emily Davis",
        role: "CTM",
        image: "/dp_place.jpg",
    },
    {
        name: "Emily Davis",
        role: "CTM",
        image: "/dp_place.jpg",
    },
    {
        name: "Emily Davis",
        role: "CTM",
        image: "/dp_place.jpg",
    },
    {
        name: "Emily Davis",
        role: "CTM",
        image: "/dp_place.jpg",
    },
    {
        name: "Emily Davis",
        role: "CTM",
        image: "/dp_place.jpg",
    },
    {
        name: "Emily Davis",
        role: "CTM",
        image: "/dp_place.jpg",
    },
    {
        name: "Emily Davis",
        role: "CTM",
        image: "/dp_place.jpg",
    },
    {
        name: "Emily Davis",
        role: "CTM",
        image: "/dp_place.jpg",
    }
];

export default function TeamPage() {
    return (
        <section className="relative w-full min-h-screen bg-black font-ethnocentric">
            {/* Fixed Background */}
            <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
                <Image
                    src="/backgrounds/background.png"
                    alt="Team Background"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
            </div>


            {/* Right Side Image - Scrolls with content
            <div className="absolute right-0 top-0 h- w-[150px] md:w-[150px] pointer-events-none z-0">
                <Image
                    src="/backgrounds/team_bg.jpeg"
                    alt="Decoration Right"
                    fill
                    className="object-cover scale-x-[-1]"
                />
            </div> */}

            {/* Content Container */}
            <div className="relative z-20 container mx-auto px-4 py-24 text-white text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-5xl font-bold tracking-wide uppercase mb-8 md:mb-16 drop-shadow-lg font-ethno"
                >
                    MEET OUR TEAM
                </motion.h1>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center gap-12 md:gap-24 w-full md:max-w-[calc(100vw-200px)] mx-auto relative z-20"
                >

                    {/* Section 1: Secretaries */}
                    <motion.div variants={sectionVariants} className="w-full flex flex-col items-center gap-6">
                        <h2 className="text-2xl md:text-3xl font-bold tracking-wider uppercase text-white/80 font-ethno">
                            Secretaries
                        </h2>
                        <div className="flex flex-wrap justify-center gap-6 w-full">
                            {teamMembers.slice(0, 3).map((member, index) => (
                                <div key={index} className="w-full max-w-sm flex justify-center">
                                    <div className="relative  w-[85vw] md:w-80 rounded-2xl border border-neutral-800">
                                        <GlowingEffect
                                            spread={80}
                                            glow={true}
                                            disabled={false}
                                            proximity={64}
                                            inactiveZone={0.01}
                                            borderWidth={4}
                                        />
                                        <div className="relative flex h-full flex-col justify-end overflow-hidden rounded-xl bg-black p-6">
                                            <div className="relative flex flex-col gap-2 items-center">
                                                <div className="w-full text-center mb-2">
                                                    <div className="text-lg font-bold text-white text-wrap">
                                                        {member.name}
                                                    </div>
                                                    <p className="text-neutral-300 text-xs mt-1 text-wrap">
                                                        {member.role}
                                                    </p>
                                                </div>
                                                <div className="w-full">
                                                    <Image
                                                        src={member.image}
                                                        height="1000"
                                                        width="1000"
                                                        className="h-60 w-full object-cover rounded-xl"
                                                        alt={member.name}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Section 2: Coordinators */}
                    <motion.div variants={sectionVariants} className="w-full flex flex-col items-center gap-6">
                        <h2 className="text-2xl md:text-3xl font-bold tracking-wider uppercase text-white/80 font-ethno">
                            Coordinators
                        </h2>
                        <div className="flex flex-wrap justify-center gap-6 w-full">
                            {teamMembers.slice(3, 5).map((member, index) => (
                                <div key={index} className="w-full max-w-sm flex justify-center">
                                    <div className="relative  w-[85vw] md:w-80 rounded-2xl border border-neutral-800">
                                        <GlowingEffect
                                            spread={80}
                                            glow={true}
                                            disabled={false}
                                            proximity={64}
                                            inactiveZone={0.01}
                                            borderWidth={4}
                                        />
                                        <div className="relative flex h-full flex-col justify-end overflow-hidden rounded-xl bg-black p-6">
                                            <div className="relative flex flex-col gap-2 items-center">
                                                <div className="w-full text-center mb-2">
                                                    <div className="text-lg font-bold text-white text-wrap">
                                                        {member.name}
                                                    </div>
                                                    <p className="text-neutral-300 text-xs mt-1 text-wrap">
                                                        {member.role}
                                                    </p>
                                                </div>
                                                <div className="w-full">
                                                    <Image
                                                        src={member.image}
                                                        height="1000"
                                                        width="1000"
                                                        className="h-60 w-full object-cover rounded-xl"
                                                        alt={member.name}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Section 3: Core Team Members */}
                    <motion.div variants={sectionVariants} className="w-full flex flex-col items-center sm:gap-2 gap-2">
                        <h2 className="text-2xl md:text-3xl font-bold tracking-wider uppercase text-white/80 font-ethno">
                            Core Team Members
                        </h2>
                        <div className="flex flex-wrap justify-evenly sm:gap-4 gap-1 w-full">
                            {teamMembers.slice(5).map((member, index) => (
                                <div key={index} className="flex justify-center w-[46%] sm:w-auto">
                                    <div className="relative w-full sm:w-60 rounded-2xl border border-neutral-800">
                                        <GlowingEffect
                                            spread={60}
                                            glow={true}
                                            disabled={false}
                                            proximity={64}
                                            inactiveZone={0.01}
                                            borderWidth={3}
                                        />
                                        <div className="relative flex flex-col justify-end overflow-hidden rounded-xl bg-black p-4">
                                            <div className="relative flex flex-col gap-2 items-center">
                                                <div className="w-full text-center mb-1">
                                                    <div className="text-[10px] sm:text-sm font-bold text-white text-wrap leading-tight">
                                                        {member.name}
                                                    </div>
                                                    <p className="text-neutral-300 sm:text-[10px] text-[8px] mt-1 text-wrap">
                                                        {member.role}
                                                    </p>
                                                </div>
                                                <div className="w-full">
                                                    <Image
                                                        src={member.image}
                                                        height="600"
                                                        width="500"
                                                        className="h-32 sm:h-48 w-full object-cover rounded-lg"
                                                        alt={member.name}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
