"use client";

import { motion, Variants } from "framer-motion";
import { Mail, Instagram, Linkedin, Phone, Users, Trophy, School } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Animation variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5 }
    },
    hover: {
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.3 }
    }
};

export default function AboutPage() {
    return (
        <main className="min-h-screen relative overflow-hidden bg-black text-white font-ethnocentric">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/backgrounds/about-bg.png"
                    alt="Background"
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />
            </div>

            <div className="relative z-10 container mx-auto px-4 pt-24 pb-12">

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold tracking-wider text-white drop-shadow-lg">
                        <span className="text-cyan-400">ABOUT</span> US
                    </h1>
                </motion.div>

                {/* Content Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
                >
                    {/* Text Paragraph */}
                    <motion.div variants={itemVariants} className="bg-black/30 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl">
                        <p className="text-sm md:text-base leading-relaxed tracking-wide text-gray-200 text-justify" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                            <span className="font-ethnocentric text-cyan-400 text-lg block mb-4">The Spirit of Sportech</span>
                            Embark on an exhilarating journey with Sportech 2025, the eagerly awaited annual inter-collegiate sporting extravaganza of IIT Delhi, making a triumphant return. More than an event, Sportech is a celebration of passion and resilience that witnesses the fusion of athletic prowess, intense competition, and the vibrant pulse of camaraderie. Join us in the heart of IIT Delhi for a showcase of talent, a testament to resilience, and a celebration of excellence.
                        </p>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <StatsCard icon={<Users className="w-8 h-8 text-cyan-400" />} number="5000+" label="Participants" />
                        <StatsCard icon={<Trophy className="w-8 h-8 text-yellow-400" />} number="10+" label="Sports" />
                        <StatsCard icon={<School className="w-8 h-8 text-purple-400" />} number="50+" label="Colleges" />
                    </motion.div>
                </motion.div>

                {/* Contact Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 tracking-wider text-white drop-shadow-lg">
                        CONTACT <span className="text-cyan-400">US</span>
                    </h2>

                    <div className="flex flex-col items-center mb-16">
                        <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                            <Mail className="w-6 h-6 text-cyan-400" />
                            <span className="text-lg md:text-xl tracking-wide" style={{ fontFamily: 'var(--font-geist-sans)' }}>events@sportech-iitd.com</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <ContactCard
                            name="Vara Prasad"
                            role="Overall Coordinator"
                            image="/team/vara.jpg"
                            email="overall-coordinator@sportech-iitd.com"
                            linkedin="https://www.linkedin.com/in/vara-prasad-85b328289"
                        />
                        <ContactCard
                            name="Tatsam Ranjan Sharma"
                            role="General Secretary"
                            image="/team/tatsam.jpg"
                            email="bsagsec@iitd.ac.in"
                            linkedin="https://www.linkedin.com/in/tatsam?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        />
                        <ContactCard
                            name="Arjun Sharma"
                            role="Co-Overall Co-ordinator"
                            image="/team/arjun.jpg"
                            email="tt1222137@iitd.ac.in"
                            linkedin="https://www.linkedin.com/in/arjunsharma05/"
                        />

                    </div>
                </motion.div>

            </div>
        </main>
    );
}

function StatsCard({ icon, number, label }: { icon: React.ReactNode, number: string, label: string }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05, borderColor: "rgba(34, 211, 238, 0.5)" }}
            className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/10 flex flex-col items-center justify-center text-center group cursor-default"
        >
            <div className="mb-4 p-3 bg-white/5 rounded-full group-hover:bg-cyan-500/20 transition-colors duration-300">
                {icon}
            </div>
            <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-md">{number}</h3>
            <p className="text-gray-400 text-sm tracking-widest uppercase">{label}</p>
        </motion.div>
    );
}

function ContactCard({ name, role, image, email, phone, linkedin }: { name: string, role: string, image: string, email: string, phone?: string, linkedin?: string }) {
    return (
        <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-zinc-900/60 backdrop-blur-md rounded-2xl overflow-hidden border border-white/5 relative group h-full"
        >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex flex-col items-center px-6 pt-6 pb-4 relative z-10 h-full">
                <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-cyan-500/50 mb-3 shadow-[0_0_20px_rgba(6,182,212,0.3)] bg-zinc-800 relative">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover"
                    />
                </div>

                <h3 className="text-xl font-bold text-white mb-0.5 tracking-wider text-center">{name}</h3>
                <p className="text-cyan-400 text-xs tracking-widest mb-3 uppercase text-center">{role}</p>

                <div className="flex gap-4 mt-auto">
                    {/* <SocialIcon icon={<Instagram className="w-5 h-5" />} href="#" /> */}
                    {linkedin && <SocialIcon icon={<Linkedin className="w-5 h-5" />} href={linkedin} />}
                    <SocialIcon icon={<Mail className="w-5 h-5" />} href={`mailto:${email}`} />
                </div>

                {phone && (
                    <div className="flex items-center gap-2 text-gray-400 text-sm font-sans mt-3" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                        <Phone className="w-4 h-4 text-cyan-500" />
                        <span>{phone}</span>
                    </div>
                )}
            </div>
        </motion.div>
    );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode, href: string }) {
    return (
        <a
            href={href}
            className="p-1.5 rounded-full bg-white/5 hover:bg-cyan-500 hover:text-white text-gray-400 transition-all duration-300 hover:scale-110"
        >
            {icon}
        </a>
    );
}
