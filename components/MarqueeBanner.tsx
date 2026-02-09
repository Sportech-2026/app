"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Marquee from "react-fast-marquee";

export default function MarqueeBanner() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <motion.div
            className="relative z-30 w-full m-0 p-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
        >
            {/* Animated top border with moving gradient - blue tones */}
            <div className="relative w-full h-[3px] overflow-hidden">
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400 to-transparent"
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                />
            </div>

            <div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="relative overflow-hidden border-b border-white/10 m-0 p-0 group"
                style={{
                    background: "linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(15,23,42,0.95) 50%, rgba(0,0,0,0.9) 100%)",
                }}
            >
                {/* Animated background shimmer - blue tones */}
                <motion.div
                    className="absolute inset-0 opacity-30"
                    style={{
                        background: "linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.1) 25%, rgba(56,189,248,0.15) 50%, rgba(59,130,246,0.1) 75%, transparent 100%)",
                        backgroundSize: "200% 100%",
                    }}
                    animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />

                {/* Floating particles effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-sky-300/50 rounded-full"
                            style={{
                                left: `${15 + i * 15}%`,
                                top: "50%",
                            }}
                            animate={{
                                y: [-10, 10, -10],
                                opacity: [0.2, 0.6, 0.2],
                                scale: [1, 1.5, 1],
                            }}
                            transition={{
                                duration: 2 + i * 0.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.3,
                            }}
                        />
                    ))}
                </div>

                {/* Cursor Glow Effect - blue tones */}
                <div
                    className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
                    style={{
                        background: isHovering
                            ? `radial-gradient(circle 150px at ${cursorPos.x}px ${cursorPos.y}px, rgba(59,130,246,0.4), rgba(56,189,248,0.2), transparent 70%)`
                            : "transparent",
                        opacity: isHovering ? 1 : 0,
                    }}
                />

                <Marquee className="flex items-center py-3 md:py-4 overflow-hidden relative z-10" speed={80} gradient={true} gradientColor="black" autoFill>
                    <div className="flex items-center gap-6 md:gap-8">
                        <motion.span
                            className="text-lg md:text-2xl tracking-[0.3em] font-ethnocentric shrink-0 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent"
                            style={{ textShadow: "0 0 30px rgba(59,130,246,0.5), 0 0 60px rgba(59,130,246,0.3)" }}
                        >
                            IGNITE
                        </motion.span>
                        <Image
                            src="/logos/bsa_logo_blue-with-name.png"
                            alt="BSA"
                            width={80}
                            height={40}
                            className="object-contain shrink-0 w-[60px] h-[30px] md:w-[80px] md:h-[40px] drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                        />

                        <motion.span
                            className="text-lg md:text-2xl tracking-[0.3em] font-ethnocentric shrink-0 bg-gradient-to-r from-sky-200 via-white to-sky-200 bg-clip-text text-transparent"
                            style={{ textShadow: "0 0 30px rgba(56,189,248,0.5), 0 0 60px rgba(56,189,248,0.3)" }}
                        >
                            TRIUMPH
                        </motion.span>
                        <Image
                            src="/logos/bsa_logo_blue-with-name.png"
                            alt="BSA"
                            width={80}
                            height={40}
                            className="object-contain shrink-0 w-[60px] h-[30px] md:w-[80px] md:h-[40px] drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]"
                        />

                        <motion.span
                            className="text-lg md:text-2xl tracking-[0.3em] font-ethnocentric shrink-0 bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent"
                            style={{ textShadow: "0 0 30px rgba(99,102,241,0.5), 0 0 60px rgba(99,102,241,0.3)" }}
                        >
                            UNITE
                        </motion.span>
                        <Image
                            src="/logos/bsa_logo_blue-with-name.png"
                            alt="BSA"
                            width={80}
                            height={40}
                            className="object-contain shrink-0 w-[60px] h-[30px] md:w-[80px] md:h-[40px] drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]"
                        />

                        <motion.span
                            className="text-xl md:text-3xl tracking-[0.2em] font-ethnocentric shrink-0 font-bold bg-gradient-to-r from-blue-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent"
                            style={{ textShadow: "0 0 40px rgba(59,130,246,0.6), 0 0 80px rgba(56,189,248,0.4)" }}
                        >
                            SPORTECH 2026
                        </motion.span>
                        <Image
                            src="/logos/bsa_logo_blue-with-name.png"
                            alt="BSA"
                            width={80}
                            height={40}
                            className="object-contain shrink-0 w-[60px] h-[30px] md:w-[80px] md:h-[40px] drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                        />

                        <motion.span
                            className="text-lg md:text-2xl tracking-[0.2em] font-ethnocentric bg-gradient-to-r from-cyan-300 via-sky-200 to-cyan-300 bg-clip-text text-transparent shrink-0"
                            style={{ textShadow: "0 0 30px rgba(34,211,238,0.5), 0 0 60px rgba(34,211,238,0.3)" }}
                        >
                            MAR 8-11
                        </motion.span>
                        <Image
                            src="/logos/bsa_logo_blue-with-name.png"
                            alt="BSA"
                            width={80}
                            height={40}
                            className="object-contain shrink-0 w-[60px] h-[30px] md:w-[80px] md:h-[40px] drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]"
                        />
                    </div>
                </Marquee>

                {/* Bottom glow line - blue */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
            </div>
        </motion.div>
    );
}
