"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface MapElement {
    id: string;
    name: string | string[];
    image: string;
    x: number; // Percentage 0-100
    y: number; // Percentage 0-100
    width: number; // Percentage
    groupId?: string; // For linking elements like gates
}

const mapElements: MapElement[] = [
    // Gates (Linked) - Group "gates"
    { id: "gate1", name: "Main Gate", image: "/maps/icons/gate1.png", x: 69, y: 7.5, width: 7.3, groupId: "gates" },
    { id: "gate2", name: "Gate 2", image: "/maps/icons/gate2.png", x: 90, y: 18, width: 7.3, groupId: "gates" },
    { id: "gate3", name: "Gate 3", image: "/maps/icons/gate3.png", x: 92, y: 48.5, width: 7.3, groupId: "gates" },
    { id: "gate4", name: "Gate 4", image: "/maps/icons/gate4.png", x: 22, y: 80, width: 7.3, groupId: "gates" },
    { id: "gate5", name: "Gate 5", image: "/maps/icons/gate5.png", x: 6, y: 61.5, width: 7.3, groupId: "gates" },
    { id: "gate6", name: "Gate 6", image: "/maps/icons/gate6.png", x: 21.5, y: 14, width: 7.3, groupId: "gates" },

    // Metro (Linked) - Group "metro"
    { id: "iitmetro", name: "IIT Metro", image: "/maps/icons/iitmetro.png", x: 63.5, y: 10, width: 5, groupId: "metro" },
    { id: "rkmetro", name: "R.K. Puram Metro", image: "/maps/icons/rkmetro.png", x: 29, y: 14, width: 5, groupId: "metro" },

    // Basketball (Linked) - Group "basky"
    // Renamed to "Basketball Grounds"
    { id: "basky1", name: "Basketball Grounds", image: "/maps/icons/basky1.png", x: 45.3, y: 47, width: 2.3, groupId: "basky" },
    { id: "basky2", name: "Basketball Grounds", image: "/maps/icons/basky2.png", x: 45.3, y: 53.2, width: 2.3, groupId: "basky" },

    // Individual Sports
    { id: "cricket", name: "Cricket Ground", image: "/maps/icons/cricket.png", x: 47.7, y: 48.5, width: 3.5 },
    { id: "football", name: "Football Ground", image: "/maps/icons/football.png", x: 40.7, y: 47.5, width: 5 },
    { id: "tennis", name: "Tennis Courts", image: "/maps/icons/tennis.png", x: 27.8, y: 37.5, width: 3.2 },
    { id: "volley", name: "Volleyball Court", image: "/maps/icons/volley.png", x: 27.8, y: 32.6, width: 2.3 },
    { id: "hockey", name: "Hockey & Athletics", image: "/maps/icons/hockey-athy.png", x: 51.6, y: 47, width: 6 },

    // Complex (Multi-sport tooltip)
    {
        id: "mittal",
        name: ["Mittal Sports Complex", "Badminton", "Table Tennis", "Squash", "Chess", "Weightlifting"],
        image: "/maps/icons/mittal.png",
        x: 50,
        y: 50.7,
        width: 4
    },
];

export default function MapSection() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    // Helper to determine if an element should be highlighted
    const isHighlighted = (element: MapElement) => {
        if (!hoveredId) return false;
        if (element.id === hoveredId) return true;

        // Find the currently hovered element to check its group
        const hoveredElement = mapElements.find(e => e.id === hoveredId);
        if (hoveredElement?.groupId && hoveredElement.groupId === element.groupId) {
            return true;
        }
        return false;
    };

    return (
        <section className="w-full py-20 relative flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0 bg-blue-500/50">
                <Image
                    src="/backgrounds/map_bg.png"
                    alt="Background"
                    fill
                    className="object-cover opacity-60"
                    quality={100}
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-10" />
            </div>

            <div className="container mx-auto px-4 z-10 w-full h-full flex flex-col">

                <h2
                    className="text-4xl md:text-6xl font-bold text-center text-white mb-8 relative z-10 tracking-wider"
                    style={{ fontFamily: 'var(--font-ethno)' }}
                >
                    CAMPUS MAP
                </h2>

                <div className="flex-1 flex items-center justify-center w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-full max-w-6xl aspect-[16/9]"
                    // Removed overflow-hidden here to allow tooltips to show outside
                    >
                        {/* Base Map */}
                        <Image
                            src="/maps/iitdmap2.png"
                            alt="IIT Delhi Map"
                            fill
                            className="object-contain" // Changed to contain to show full map
                            quality={100}
                        />

                        {/* Interactive Elements Overlay */}
                        <div className="absolute inset-0 z-20">
                            {mapElements.map((element) => {
                                const highlighted = isHighlighted(element);
                                // For basketball, only show tooltip on basky1
                                const showTooltip = highlighted && !(element.groupId === "basky" && element.id !== "basky1");

                                return (
                                    <div
                                        key={element.id}
                                        className="absolute cursor-pointer"
                                        style={{
                                            left: `${element.x}%`,
                                            top: `${element.y}%`,
                                            width: `${element.width}%`,
                                            aspectRatio: '1/1',
                                            zIndex: highlighted ? 50 : 20, // Bring to front when highlighted (but container stays same size)
                                        }}
                                        onMouseEnter={() => setHoveredId(element.id)}
                                        onMouseLeave={() => setHoveredId(null)}
                                    >
                                        {/* Visual Element - Scales on hover */}
                                        <motion.div
                                            className="w-full h-full relative"
                                            animate={{
                                                scale: highlighted ? 1.3 : 1,
                                                filter: highlighted ? "drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))" : "drop-shadow(0 0 2px rgba(0,0,0,0.3))"
                                            }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        >
                                            <Image
                                                src={element.image}
                                                alt={Array.isArray(element.name) ? element.name[0] : element.name}
                                                fill
                                                className="object-contain" // Changed to contain to avoid cropping if aspect ratio is different
                                                sizes="(max-width: 768px) 10vw, 5vw"
                                            />

                                            {/* Tooltip */}
                                            <AnimatePresence>
                                                {showTooltip && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: element.groupId === "gates" ? 2 : 5, scale: 0.8 }}
                                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                                        exit={{ opacity: 0, y: element.groupId === "gates" ? 0 : 2, scale: 0.9 }}
                                                        className={`absolute left-1/2 -translate-x-1/2 bottom-full ${element.groupId === "gates" ? "-mb-3" : "mb-2"} bg-blue-950/90 border border-blue-400/30 backdrop-blur-md px-3 py-2 rounded-lg pointer-events-none min-w-max z-50 shadow-xl`}
                                                    >
                                                        {Array.isArray(element.name) ? (
                                                            <div className="flex flex-col items-center gap-1">
                                                                <span className="text-blue-200 font-bold text-xs uppercase tracking-wider border-b border-white/10 pb-1 mb-1 w-full text-center">
                                                                    {element.name[0]}
                                                                </span>
                                                                {element.name.slice(1).map((subItem, idx) => (
                                                                    <span key={idx} className="text-white/90 text-[10px] leading-tight">
                                                                        {subItem}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        ) : (
                                                            <span className="text-white font-bold text-xs md:text-sm whitespace-nowrap tracking-wide">
                                                                {element.name}
                                                            </span>
                                                        )}
                                                        {/* Arrow */}
                                                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-blue-950/90" />
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
