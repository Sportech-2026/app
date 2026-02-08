"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";

export default function SportsLoader({ onLoadingComplete }: { onLoadingComplete?: () => void }) {
    const [isVisible, setIsVisible] = useState(true);
    const [currentBall, setCurrentBall] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            if (onLoadingComplete) onLoadingComplete();
        }, 4500);
        return () => clearTimeout(timer);
    }, [onLoadingComplete]);

    // Cycle through balls and sportech
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBall((prev) => (prev + 1) % 4);
        }, 1100);
        return () => clearInterval(interval);
    }, []);

    const containerVariants: Variants = {
        initial: { opacity: 1 },
        exit: {
            opacity: 0,
            transition: { duration: 0.5, ease: "easeInOut" }
        }
    };

    // Football rolling and bouncing towards goal
    const footballAnimation: Variants = {
        animate: {
            x: [-150, 150],
            y: [0, -20, 0, -15, 0, -10, 0],
            rotate: [0, 360],
            opacity: 1,
            transition: {
                x: { duration: 1, ease: "easeInOut" },
                y: { duration: 1, times: [0, 0.15, 0.3, 0.5, 0.7, 0.85, 1] },
                rotate: { duration: 1, ease: "linear" },
            },
        },
    };

    // Basketball dribbling - orange ball
    const basketballAnimation: Variants = {
        animate: {
            x: [150, -150],
            y: [0, -60, 0, -55, 0, -50, 0, -45, 0],
            opacity: 1,
            transition: {
                x: { duration: 1, ease: "linear" },
                y: { duration: 1, times: [0, 0.12, 0.25, 0.37, 0.5, 0.62, 0.75, 0.87, 1], ease: "easeOut" },
            },
        },
    };

    // Cricket ball being bowled
    const cricketAnimation: Variants = {
        animate: {
            x: [-150, 150],
            rotate: [0, 720],
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeIn",
            },
        },
    };

    // Sportech logo animation - smooth slide
    const sportechAnimation: Variants = {
        animate: {
            x: [200, -200],
            opacity: [0, 1, 1, 1, 0],
            scale: [0.8, 1, 1, 1, 0.8],
            transition: {
                x: { duration: 1.8, ease: "easeInOut" },
                opacity: { duration: 1.8, times: [0, 0.15, 0.5, 0.85, 1] },
                scale: { duration: 1.8, times: [0, 0.15, 0.5, 0.85, 1] },
            },
        },
    };

    // Sportech text animation - smooth slide with longer duration
    const sportechTextAnimation: Variants = {
        animate: {
            x: [250, -250],
            opacity: [0, 0.4, 0.4, 0.4, 0],
            transition: {
                x: { duration: 1.8, ease: "easeInOut" },
                opacity: { duration: 1.8, times: [0, 0.15, 0.5, 0.85, 1] },
            },
        },
    };

    // Text behind ball animation (left to right)
    const textBehindAnimation: Variants = {
        animate: {
            x: [-200, 200],
            opacity: [0, 0.3, 0.3, 0.3, 0],
            transition: {
                x: { duration: 1, ease: "easeInOut" },
                opacity: { duration: 1, times: [0, 0.1, 0.5, 0.9, 1] },
            },
        },
    };

    // Text behind ball animation (right to left)
    const textBehindAnimationReverse: Variants = {
        animate: {
            x: [200, -200],
            opacity: [0, 0.3, 0.3, 0.3, 0],
            transition: {
                x: { duration: 1, ease: "linear" },
                opacity: { duration: 1, times: [0, 0.1, 0.5, 0.9, 1] },
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
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-[#020617] via-[#0c1929] to-[#020617]"
                >
                    {/* Ball Animation Area */}
                    <div className="relative w-96 h-40 flex items-end justify-center overflow-hidden mb-4">
                        <AnimatePresence mode="wait">
                            {/* Sportech - First */}
                            {currentBall === 0 && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {/* Text behind */}
                                    <motion.span
                                        key="sportech-text"
                                        variants={sportechTextAnimation}
                                        initial={{ x: 250, opacity: 0 }}
                                        animate="animate"
                                        exit={{ opacity: 0 }}
                                        className="absolute text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400/40 to-blue-500/40 uppercase tracking-widest z-0"
                                    >
                                        Sportech26
                                    </motion.span>
                                    {/* Logo in front */}
                                    <motion.div
                                        key="sportech-logo"
                                        variants={sportechAnimation}
                                        initial={{ x: 200, opacity: 0 }}
                                        animate="animate"
                                        exit={{ opacity: 0 }}
                                        className="absolute z-10"
                                    >
                                        <Image
                                            src="/sportech_logo.png"
                                            alt="Sportech Logo"
                                            width={60}
                                            height={60}
                                            className="object-contain drop-shadow-[0_0_15px_rgba(76,234,238,0.6)]"
                                        />
                                    </motion.div>
                                </div>
                            )}

                            {/* Football */}
                            {currentBall === 1 && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {/* Text behind */}
                                    <motion.span
                                        key="football-text"
                                        variants={textBehindAnimation}
                                        initial={{ x: -200, opacity: 0 }}
                                        animate="animate"
                                        exit={{ opacity: 0 }}
                                        className="absolute text-5xl md:text-6xl font-bold text-white/40 uppercase tracking-widest z-0"
                                    >
                                        Football
                                    </motion.span>
                                    {/* Ball in front */}
                                    <motion.div
                                        key="football"
                                        variants={footballAnimation}
                                        initial={{ x: -150, opacity: 1 }}
                                        animate="animate"
                                        exit={{ opacity: 0 }}
                                        className="absolute z-10"
                                    >
                                        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="12" r="10" fill="white" />
                                            <path d="M12 7L15.5 9.5V14.5L12 17L8.5 14.5V9.5L12 7Z" fill="#1e293b" />
                                            <path d="M12 2V7" stroke="#1e293b" strokeWidth="1.5" />
                                            <path d="M20.5 8L15.5 9.5" stroke="#1e293b" strokeWidth="1.5" />
                                            <path d="M20.5 16L15.5 14.5" stroke="#1e293b" strokeWidth="1.5" />
                                            <path d="M12 22V17" stroke="#1e293b" strokeWidth="1.5" />
                                            <path d="M3.5 16L8.5 14.5" stroke="#1e293b" strokeWidth="1.5" />
                                            <path d="M3.5 8L8.5 9.5" stroke="#1e293b" strokeWidth="1.5" />
                                        </svg>
                                    </motion.div>
                                </div>
                            )}

                            {/* Basketball - Orange */}
                            {currentBall === 2 && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {/* Text behind */}
                                    <motion.span
                                        key="basketball-text"
                                        variants={textBehindAnimationReverse}
                                        initial={{ x: 200, opacity: 0 }}
                                        animate="animate"
                                        exit={{ opacity: 0 }}
                                        className="absolute text-5xl md:text-6xl font-bold text-white/40 uppercase tracking-widest z-0"
                                    >
                                        Basketball
                                    </motion.span>
                                    {/* Ball in front */}
                                    <motion.div
                                        key="basketball"
                                        variants={basketballAnimation}
                                        initial={{ x: 150, opacity: 1 }}
                                        animate="animate"
                                        exit={{ opacity: 0 }}
                                        className="absolute z-10"
                                    >
                                        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="12" r="10" fill="#f97316" />
                                            <path d="M12 2V22" stroke="#7c2d12" strokeWidth="1.5" />
                                            <path d="M2 12H22" stroke="#7c2d12" strokeWidth="1.5" />
                                            <path d="M4.5 4.5C8 7 8 17 4.5 19.5" stroke="#7c2d12" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M19.5 4.5C16 7 16 17 19.5 19.5" stroke="#7c2d12" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </motion.div>
                                </div>
                            )}

                            {/* Cricket Ball */}
                            {currentBall === 3 && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {/* Text behind */}
                                    <motion.span
                                        key="cricket-text"
                                        variants={textBehindAnimation}
                                        initial={{ x: -200, opacity: 0 }}
                                        animate="animate"
                                        exit={{ opacity: 0 }}
                                        className="absolute text-5xl md:text-6xl font-bold text-white/40 uppercase tracking-widest z-0"
                                    >
                                        Cricket
                                    </motion.span>
                                    {/* Ball in front */}
                                    <motion.div
                                        key="cricket"
                                        variants={cricketAnimation}
                                        initial={{ x: -150, opacity: 1 }}
                                        animate="animate"
                                        exit={{ opacity: 0 }}
                                        className="absolute z-10"
                                    >
                                        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="12" r="10" fill="#dc2626" />
                                            <path d="M7 4C9 8 9 16 7 20" stroke="#fef2f2" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M17 4C15 8 15 16 17 20" stroke="#fef2f2" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M8 6L6.5 7" stroke="#fef2f2" strokeWidth="1" strokeLinecap="round" />
                                            <path d="M8 10L6.5 11" stroke="#fef2f2" strokeWidth="1" strokeLinecap="round" />
                                            <path d="M8 14L6.5 15" stroke="#fef2f2" strokeWidth="1" strokeLinecap="round" />
                                            <path d="M8 18L6.5 19" stroke="#fef2f2" strokeWidth="1" strokeLinecap="round" />
                                            <path d="M16 6L17.5 7" stroke="#fef2f2" strokeWidth="1" strokeLinecap="round" />
                                            <path d="M16 10L17.5 11" stroke="#fef2f2" strokeWidth="1" strokeLinecap="round" />
                                            <path d="M16 14L17.5 15" stroke="#fef2f2" strokeWidth="1" strokeLinecap="round" />
                                            <path d="M16 18L17.5 19" stroke="#fef2f2" strokeWidth="1" strokeLinecap="round" />
                                        </svg>
                                    </motion.div>
                                </div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Sportech Logo (without name) at the bottom */}
                    {/* <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="flex items-center justify-center"
                    >
                        <Image
                            src="/sportech_logo.png"
                            alt="Sportech Logo"
                            width={50}
                            height={50}
                            className="object-contain"
                        />
                    </motion.div> */}
                </motion.div>
            )}
        </AnimatePresence>
    );
}