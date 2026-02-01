"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

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
            transition={{ duration: 0.8, delay: 0.5 }}
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

                <div className="flex animate-marquee relative z-10 items-center whitespace-nowrap gap-8 pr-8">
                    {/* First set */}
                    <div className="flex items-center items-center py-0 gap-8">
                        <span className="text-2xl tracking-widest text-white font-ethnocentric shrink-0">IGNITE</span>
                        <Image src="/bsaLogo.png" alt="BSA" width={40} height={40} className="object-contain shrink-0" />
                        <span className="text-2xl tracking-widest text-white font-ethnocentric shrink-0">TRIUMPH</span>
                        <Image src="/sportechLogo.png" alt="Sportech" width={60} height={60} className="object-contain shrink-0" />
                        <span className="text-2xl tracking-widest text-white font-ethnocentric shrink-0">UNITE</span>
                        <Image src="/bsaLogo.png" alt="BSA" width={40} height={40} className="object-contain shrink-0" />
                        <span className="text-2xl tracking-widest text-white font-ethnocentric shrink-0">SPORTECH-26</span>
                        <Image src="/sportechLogo.png" alt="sportech" width={60} height={60} className="object-contain shrink-0" />
                        <span className="text-2xl tracking-widest text-white font-ethnocentric shrink-0">MAR 8-11,2026</span>
                        <Image src="/bsaLogo.png" alt="BSA" width={40} height={40} className="object-contain shrink-0" />
                    </div>
                    {/* Duplicate 1 */}
                    <div className="flex items-center items-center gap-8 py-0">
                        <span className="text-2xl tracking-widest text-white font-ethnocentric shrink-0">IGNITE</span>
                        <Image src="/bsaLogo.png" alt="BSA" width={40} height={40} className="object-contain shrink-0" />
                        <span className="text-2xl tracking-widest text-white font-ethnocentric shrink-0">TRIUMPH</span>
                        <Image src="/sportechLogo.png" alt="Sportech" width={60} height={60} className="object-contain shrink-0" />
                        <span className="text-2xl tracking-widest text-white font-ethnocentric shrink-0">UNITE</span>
                        <Image src="/bsaLogo.png" alt="BSA" width={40} height={40} className="object-contain shrink-0" />
                        <span className="text-2xl tracking-widest text-white font-ethnocentric shrink-0">SPORTECH-26</span>
                        <Image src="/sportechLogo.png" alt="sportech" width={60} height={60} className="object-contain shrink-0" />
                        <span className="text-2xl tracking-widest text-white font-ethnocentric shrink-0">MAR 8-11,2026</span>
                        <Image src="/bsaLogo.png" alt="BSA" width={40} height={40} className="object-contain shrink-0" />
                    </div>
                    {/* Duplicate 2 */}
                    <div className="flex items-center items-center gap-8 py-0">
                        <span className="text-2xl tracking-widest text-white font-ethnocentric shrink-0">IGNITE</span>
                        <Image src="/bsaLogo.png" alt="BSA" width={40} height={40} className="object-contain shrink-0" />
                        <span className="text-2xl tracking-widest text-white font-ethnocentric shrink-0">TRIUMPH</span>
                        <Image src="/sportechLogo.png" alt="Sportech" width={60} height={60} className="object-contain shrink-0" />
                        <span className="text-2xl tracking-widest text-white font-ethnocentric shrink-0">UNITE</span>
                        <Image src="/bsaLogo.png" alt="BSA" width={40} height={40} className="object-contain shrink-0" />
                        <span className="text-2xl tracking-widest text-white font-ethnocentric shrink-0">SPORTECH-26</span>
                        <Image src="/sportechLogo.png" alt="sportech" width={60} height={60} className="object-contain shrink-0" />
                        <span className="text-2xl tracking-widest text-white font-ethnocentric shrink-0">MAR 8-11,2026</span>
                        <Image src="/bsaLogo.png" alt="BSA" width={40} height={40} className="object-contain shrink-0" />
                    </div>
                    {/* Duplicate 3 */}
                    <div className="flex items-center items-center gap-8 py-0">
                        <span className="text-2xl tracking-widest text-white font-ethnocentric shrink-0">IGNITE</span>
                        <Image src="/bsaLogo.png" alt="BSA" width={40} height={40} className="object-contain shrink-0" />
                        <span className="text-2xl tracking-widest text-white font-ethnocentric shrink-0">TRIUMPH</span>
                        <Image src="/sportechLogo.png" alt="Sportech" width={60} height={60} className="object-contain shrink-0" />
                        <span className="text-2xl tracking-widest text-white font-ethnocentric shrink-0">UNITE</span>
                        <Image src="/bsaLogo.png" alt="BSA" width={40} height={40} className="object-contain shrink-0" />
                        <span className="text-2xl tracking-widest text-white font-ethnocentric shrink-0">SPORTECH-26</span>
                        <Image src="/sportechLogo.png" alt="sportech" width={60} height={60} className="object-contain shrink-0" />
                        <span className="text-2xl tracking-widest text-white font-ethnocentric shrink-0">MAR 8-11,2026</span>
                        <Image src="/bsaLogo.png" alt="BSA" width={40} height={40} className="object-contain shrink-0" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
