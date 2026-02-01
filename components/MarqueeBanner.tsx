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
            className="absolute bottom-0 left-0 z-30 w-full m-0 p-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
        >
            <div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="relative bg-black bg-gradient-to-r from-orange-950/80 via-black to-blue-950/80 backdrop-blur-md overflow-hidden border-y border-white/10 m-0 p-0 group"
            >
                {/* Cursor Glow Effect */}
                <div
                    className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
                    style={{
                        background: isHovering
                            ? `radial-gradient(circle 100px at ${cursorPos.x}px ${cursorPos.y}px, rgba(255, 255, 255, 0.15), transparent 80%)`
                            : "transparent",
                        opacity: isHovering ? 1 : 0,
                    }}
                />

                <Marquee className="flex items-center py-0 overflow-hidden relative z-10" speed={200} gradient={true} gradientColor="" autoFill>
                    <div className="flex items-center gap-4 md:gap-8 pr-4 md:pr-8">
                        <span className="text-lg md:text-2xl tracking-widest text-white font-ethnocentric shrink-0">IGNITE</span>
                        <Image src="/bsaLogo.png" alt="BSA" width={30} height={30} className="object-contain shrink-0 w-[30px] h-[30px] md:w-[40px] md:h-[40px]" />
                        <span className="text-lg md:text-2xl tracking-widest text-white font-ethnocentric shrink-0">TRIUMPH</span>
                        <Image src="/bsaLogo.png" alt="BSA" width={30} height={30} className="object-contain shrink-0 w-[30px] h-[30px] md:w-[40px] md:h-[40px]" />
                        <span className="text-lg md:text-2xl tracking-widest text-white font-ethnocentric shrink-0">UNITE</span>
                        <Image src="/bsaLogo.png" alt="BSA" width={30} height={30} className="object-contain shrink-0 w-[30px] h-[30px] md:w-[40px] md:h-[40px]" />
                        <span className="text-lg md:text-2xl tracking-widest text-white font-ethnocentric shrink-0">SPORTECH-26</span>
                        <Image src="/bsaLogo.png" alt="BSA" width={30} height={30} className="object-contain shrink-0 w-[30px] h-[30px] md:w-[40px] md:h-[40px]" />
                        <span className="text-lg md:text-2xl tracking-widest text-white font-ethnocentric shrink-0">MAR 8-11,2026</span>
                        <Image src="/bsaLogo.png" alt="BSA" width={30} height={30} className="object-contain shrink-0 w-[30px] h-[30px] md:w-[40px] md:h-[40px]" />
                    </div>
                </Marquee>
            </div>
        </motion.div>
    );
}
