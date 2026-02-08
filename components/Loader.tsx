"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function SportsLoader({ onLoadingComplete }: { onLoadingComplete?: () => void }) {
    const [isVisible, setIsVisible] = useState(true);

    // Simulate loading time (Remove this useEffect if you control state from a parent)
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            if (onLoadingComplete) onLoadingComplete();
        }, 2500); // Loader runs for 2.5 seconds
        return () => clearTimeout(timer);
    }, [onLoadingComplete]);

    // Animation Variants
    const containerVariants: Variants = {
        initial: { opacity: 1 },
        exit: {
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
        }
    };

    const ballVariants: Variants = {
        bounce: {
            y: [0, -40, 0], // Bounce height
            transition: {
                duration: 0.6,
                repeat: Infinity,
                ease: "easeOut", // Makes it look like gravity is acting on it
            },
        },
    };

    const shadowVariants: Variants = {
        bounce: {
            scale: [1, 0.6, 1],
            opacity: [0.5, 0.2, 0.5],
            transition: {
                duration: 0.6,
                repeat: Infinity,
                ease: "easeOut",
            },
        },
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    key="loader"
                    variants={containerVariants}
                    initial="initial"
                    exit="exit"
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f]"
                >
                    {/* Icons Container */}
                    <div className="flex gap-8 mb-8">
                        {/* 1. BASKETBALL */}
                        <div className="flex flex-col items-center gap-2">
                            <motion.div variants={ballVariants} animate="bounce">
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" className="fill-blue-600" />
                                    <path d="M12 2C12 22" stroke="#0a192f" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M2 12H22" stroke="#0a192f" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M19.5 4.5C19.5 4.5 15 8 15 12C15 16 19.5 19.5 19.5 19.5" stroke="#0a192f" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M4.5 4.5C4.5 4.5 9 8 9 12C9 16 4.5 19.5 4.5 19.5" stroke="#0a192f" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </motion.div>
                            <motion.div variants={shadowVariants} animate="bounce" className="w-10 h-2 rounded-full bg-blue-500/20 blur-sm" />
                        </div>

                        {/* 2. FOOTBALL (Soccer) - Delay 0.1s */}
                        <div className="flex flex-col items-center gap-2">
                            <motion.div
                                variants={ballVariants}
                                animate="bounce"
                                transition={{ delay: 0.1 }}
                            >
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" className="fill-blue-100" />
                                    <path d="M12 7L15.5 9.5V14.5L12 17L8.5 14.5V9.5L12 7Z" className="fill-[#0a192f]" />
                                    <path d="M12 2V7" stroke="#0a192f" strokeWidth="1.5" />
                                    <path d="M20.5 8L15.5 9.5" stroke="#0a192f" strokeWidth="1.5" />
                                    <path d="M20.5 16L15.5 14.5" stroke="#0a192f" strokeWidth="1.5" />
                                    <path d="M12 22V17" stroke="#0a192f" strokeWidth="1.5" />
                                    <path d="M3.5 16L8.5 14.5" stroke="#0a192f" strokeWidth="1.5" />
                                    <path d="M3.5 8L8.5 9.5" stroke="#0a192f" strokeWidth="1.5" />
                                </svg>
                            </motion.div>
                            <motion.div variants={shadowVariants} animate="bounce" className="w-10 h-2 rounded-full bg-blue-500/20 blur-sm" />
                        </div>

                        {/* 3. TENNIS BALL - Delay 0.2s */}
                        <div className="flex flex-col items-center gap-2">
                            <motion.div
                                variants={ballVariants}
                                animate="bounce"
                                transition={{ delay: 0.2 }}
                            >
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" className="fill-cyan-400" />
                                    <path d="M16 19.5C14 17.5 14 13 16 11" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M8 4.5C10 6.5 10 11 8 13" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </motion.div>
                            <motion.div variants={shadowVariants} animate="bounce" className="w-10 h-2 rounded-full bg-cyan-500/20 blur-sm" />
                        </div>
                    </div>

                    {/* Loading Text */}
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                        className="text-xl font-bold tracking-[0.3em] text-blue-100 uppercase"
                    >
                        Loading Arena
                    </motion.h2>
                </motion.div>
            )}
        </AnimatePresence>
    );
}