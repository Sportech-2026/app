"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    // Mouse position values
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation
    const springConfig = { damping: 25, stiffness: 150 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    // Transform mouse position to layer movement (top layer - moves opposite)
    const topLayerX = useTransform(smoothX, [-0.5, 0.5], [30, -30]);
    const topLayerY = useTransform(smoothY, [-0.5, 0.5], [20, -20]);

    // Transform mouse position to layer movement (bottom layer - follows mouse)
    const bottomLayerX = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
    const bottomLayerY = useTransform(smoothY, [-0.5, 0.5], [-15, 15]);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        mouseX.set(x);
        mouseY.set(y);

        // Track absolute cursor position for spotlight
        setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
        setIsHovering(false);
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center cursor-none"
        >
            {/* Top Blurred Layer (Positioned Above) */}
            <motion.div
                className="absolute inset-0 z-10 -translate-y-40"
                style={{ x: topLayerX, y: topLayerY }}
            >
                <Image
                    src="/sportech_blurred1.png"
                    alt="Atmosphere Top"
                    fill
                    className="object-contain scale-84 opacity-12 mix-blend-overlay"
                    priority
                />
            </motion.div>

            {/* Main Hero Image (Center) */}
            <div className="w-full h-full object-cover">
                <Image
                    src="/hero.png"
                    alt="Sportech"
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            {/* Bottom Blurred Layer (Positioned Below) */}
            <motion.div
                className="absolute bottom-0 right-0 w-full h-full z-10 rounded-full"
                style={{ x: bottomLayerX, y: bottomLayerY }}
            >
                <Image
                    src="/sportech_blurred1.png"
                    alt="Atmosphere Bottom"
                    fill
                    className="object-contain scale-84 mix-blend-overlay opacity-12"
                    priority
                />
            </motion.div>

            {/* Cursor Glow Effect - follows logo shape */}
            {isHovering && (
                <div
                    className="pointer-events-none absolute inset-0 z-20"
                    style={{
                        background: `radial-gradient(ellipse 100px 150px at ${cursorPos.x}px ${cursorPos.y}px, rgba(255, 183, 77, 0.35) 0%, rgba(255, 152, 0, 0.2) 40%, transparent 70%)`,
                    }}
                />
            )}

            {/* Custom Cursor with BSA Logo */}
            {isHovering && (
                <motion.div
                    className="pointer-events-none fixed z-50"
                    style={{
                        left: cursorPos.x + (containerRef.current?.getBoundingClientRect().left || 0) - 30,
                        top: cursorPos.y + (containerRef.current?.getBoundingClientRect().top || 0) - 30,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <Image
                        src="/logo_cropped.png"
                        alt="Cursor"
                        width={60}
                        height={60}
                        className="drop-shadow-[0_0_35px_rgba(255,183,77,0.9)] filter"
                    />
                </motion.div>
            )}
        </section>
    );
}
