'use client';
import Image from "next/image";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { motion, Variants } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import Link from "next/link";

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
    // Secretaries (Index 0-1)
    {
        name: "Tatsam Ranjan Sharma",
        role: "General Secretary",
        image: "/team/tatsam.jpg",
        linkedin: "https://www.linkedin.com/in/tatsam?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "bsagsec@iitd.ac.in"
    },
    {
        name: "Talin Sharma",
        role: "Deputy General Secretary",
        image: "/misc/dp_place.jpg",
        email: "dgsbsa@iitd.ac.in"
    },
    // Coordinators (Index 2-3)
    {
        name: "Vara Prasad",
        role: "Overall Coordinator",
        image: "/team/vara.jpg",
        linkedin: "https://www.linkedin.com/in/vara-prasad-85b328289",
        email: "overall-coordinator@sportech-iitd.com"
    },
    {
        name: "Arjun Sharma",
        role: "Co-Overall Co-ordinator",
        image: "/team/arjun.jpg",
        linkedin: "https://www.linkedin.com/in/arjunsharma05/",
        email: "tt1222137@iitd.ac.in"
    },
    // Core Team Members (Index 4+)
    {
        name: "Harshit Bansal",
        role: "Marketing CTM",
        image: "/team/harshit.JPG",
        email: "ce1230157@iitd.ac.in"
    },
    {
        name: "Pranjal Gupta",
        role: "Media CTM",
        image: "/team/pranjal.png",
        linkedin: "https://www.linkedin.com/in/pranjal1109/",
        email: "tt1230448@iitd.ac.in"
    },
    {
        name: "Harsh Agarwal",
        role: "Technical CTM",
        image: "/team/harsh.DNG",
        linkedin: "https://www.linkedin.com/in/harsh-agarwal-2b7654237/",
        email: "me2230523@iitd.ac.in"
    },
    {
        name: "Shiwang Gupta",
        role: "Admin and finance CTM",
        image: "/team/shivang.png",
        linkedin: "https://www.linkedin.com/in/shiwang-iitd",
        email: "ch1230665@iitd.ac.in"
    },
    {
        name: "Vartika Dharmak",
        role: "Informal CTM",
        image: "/team/vartika.jpg",
        linkedin: "https://www.linkedin.com/in/vartika-dharmak", // Note: input just had www...
        email: "bb1230918@iitd.ac.in"
    },
    {
        name: "Kriti",
        role: "Design CTM",
        image: "/team/kriti.jpeg",
        email: "am1230440@iitd.ac.in"
    },
    {
        name: "Srijith",
        role: "Publicity CTM",
        image: "/team/srijith.jpg",
        linkedin: "https://www.linkedin.com/in/srijith-s-8645052b4?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        email: "me1230548@iitd.ac.in"
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
                            {teamMembers.slice(0, 2).map((member, index) => (
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
                                                <div className="flex justify-center gap-3 mt-3">
                                                    {member.linkedin && (
                                                        <Link href={member.linkedin.startsWith('http') ? member.linkedin : `https://${member.linkedin}`} target="_blank" className="text-neutral-400 hover:text-white transition-colors">
                                                            <Linkedin size={18} />
                                                        </Link>
                                                    )}
                                                    {member.email && (
                                                        <Link href={`mailto:${member.email}`} className="text-neutral-400 hover:text-white transition-colors">
                                                            <Mail size={18} />
                                                        </Link>
                                                    )}
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
                            {teamMembers.slice(2, 4).map((member, index) => (
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
                                                <div className="flex justify-center gap-3 mt-3">
                                                    {member.linkedin && (
                                                        <Link href={member.linkedin.startsWith('http') ? member.linkedin : `https://${member.linkedin}`} target="_blank" className="text-neutral-400 hover:text-white transition-colors">
                                                            <Linkedin size={18} />
                                                        </Link>
                                                    )}
                                                    {member.email && (
                                                        <Link href={`mailto:${member.email}`} className="text-neutral-400 hover:text-white transition-colors">
                                                            <Mail size={18} />
                                                        </Link>
                                                    )}
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
                            {teamMembers.slice(4).map((member, index) => (
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
                                                <div className="flex justify-center gap-2 mt-2">
                                                    {member.linkedin && (
                                                        <Link href={member.linkedin.startsWith('http') ? member.linkedin : `https://${member.linkedin}`} target="_blank" className="text-neutral-400 hover:text-white transition-colors">
                                                            <Linkedin size={14} />
                                                        </Link>
                                                    )}
                                                    {member.email && (
                                                        <Link href={`mailto:${member.email}`} className="text-neutral-400 hover:text-white transition-colors">
                                                            <Mail size={14} />
                                                        </Link>
                                                    )}
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
