"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const faqs = [
    {
        question: "Registration Requirements",
        answer: (
            <div className="space-y-4">
                <p>To complete registration of a team/contingent, the following are required:</p>
                <ul className="list-disc pl-5 space-y-2 text-white/70">
                    <li>Completed registration form</li>
                    <li>Official stamp of the institution</li>
                    <li>
                        Official email from the Sports Officer or higher authority
                        <ul className="list-[square] pl-5 mt-1 text-white/50">
                            <li>Must be sent from the institutional domain of the respective college</li>
                        </ul>
                    </li>
                    <li>Signature of the Sports Officer/authorized official</li>
                    <li>
                        Contact details of the concerned official:
                        <ul className="list-[square] pl-5 mt-1 text-white/50">
                            <li>Phone number</li>
                            <li>Email ID</li>
                        </ul>
                    </li>
                </ul>
            </div>
        ),
    },
    {
        question: "Minimum Participation Requirement",
        answer: (
            <p className="text-white/70">
                A minimum of six non-IIT Delhi teams must be registered for a sport/event to be conducted.
            </p>
        ),
    },
    {
        question: "Player Identification",
        answer: (
            <p className="text-white/70">
                Prior to the commencement of every match, all participating players must present their valid college-issued ID cards for verification.
            </p>
        ),
    },
    {
        question: "Team Eligibility",
        answer: (
            <p className="text-white/70">
                Participation in the tournament is strictly limited to teams representing a single college or university. Teams composed of students from multiple colleges, or those representing institutions with more than one affiliated campus operating jointly as a single team, will not be permitted to compete. Only teams officially constituted under the name of one distinct college or university shall be considered eligible for entry.
            </p>
        ),
    },
    {
        question: "Right to Cancel or Disqualify",
        answer: (
            <p className="text-white/70">
                The Sportech’26 Organizing Committee reserves the right to cancel any sport/event or disqualify any team in case of non-compliance with the prescribed rules and regulations.
            </p>
        ),
    },
    {
        question: "Accommodation Guidelines for Visiting Participants",
        answer: (
            <div className="space-y-4">
                <div>
                    <h4 className="font-semibold text-cyan-400 mb-1">Eligibility</h4>
                    <p className="text-white/70">Accommodation shall be provided exclusively to students visiting from other IITs.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-cyan-400 mb-1">Accommodation Fee</h4>
                    <p className="text-white/70">A registration fee of ₹550 per participant per day will be applicable.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-cyan-400 mb-1">Facilities Included in the Fee</h4>
                    <ul className="list-disc pl-5 space-y-2 text-white/70">
                        <li><strong className="text-white">Stay:</strong> Shared accommodation will be arranged in hostel common rooms.</li>
                        <li><strong className="text-white">Bedding:</strong> Mattresses will be provided to all participants.</li>
                        <li><strong className="text-white">Meals:</strong> The fee includes three meals per day for the duration of the stay.</li>
                    </ul>
                </div>
            </div>
        ),
    },
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [showAll, setShowAll] = useState(false);

    const displayedFaqs = showAll ? faqs : faqs.slice(0, 4);

    return (
        <section className="relative w-full py-24 text-white overflow-hidden bg-black">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 bg-neutral-900/50">
                <ShootingStars />
                <StarsBackground />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent z-10" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
                <div className="text-center mb-20 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold font-ethnocentric tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                            FAQs
                        </h2>
                        <p className="mt-4 text-cyan-200/80 text-lg tracking-widest font-light">
                            EVERYTHING YOU NEED TO KNOW
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {displayedFaqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative rounded-2xl overflow-hidden h-fit"
                        >
                            {/* Glassmorphism Card */}
                            <div className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:border-cyan-500/30 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] rounded-2xl" />

                            <div className="relative z-10">
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="flex items-center justify-between w-full p-8 text-left"
                                >
                                    <span className={cn(
                                        "text-lg font-medium transition-all duration-300 pr-8",
                                        openIndex === index
                                            ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]"
                                            : "text-white/90 group-hover:text-white"
                                    )}>
                                        {faq.question}
                                    </span>
                                    <span className={cn(
                                        "flex-shrink-0 p-2 rounded-full border border-white/10 bg-white/5 transition-all duration-500 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10",
                                        openIndex === index ? "rotate-45 bg-cyan-500/20 border-cyan-500" : "rotate-0"
                                    )}>
                                        {openIndex === index ? (
                                            <Plus className="w-6 h-6 text-cyan-400" />
                                        ) : (
                                            <Plus className="w-6 h-6 text-white/50 group-hover:text-cyan-400" />
                                        )}
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-8 pb-8 pt-0">
                                                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
                                                <div className="text-base leading-relaxed text-blue-100/70 font-light">
                                                    {faq.answer}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Show More Button */}
                {faqs.length > 4 && (
                    <div className="mt-12 text-center">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-medium tracking-wide transition-all duration-300 hover:bg-cyan-500/20 hover:border-cyan-500/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] group"
                        >
                            {showAll ? (
                                <>
                                    SHOW LESS <ChevronUp className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
                                </>
                            ) : (
                                <>
                                    SEE MORE <ChevronDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
                                </>
                            )}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
