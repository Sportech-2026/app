"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const ParallaxScroll = ({
    images,
    className,
}: {
    images: string[];
    className?: string;
}) => {
    const gridRef = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        // container: gridRef, // Removed to use window scroll
        offset: ["start start", "end start"],
    });

    const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const translateFourth = useTransform(scrollYProgress, [0, 1], [0, 200]);

    const quarter = Math.ceil(images.length / 4);

    const firstPart = images.slice(0, quarter);
    const secondPart = images.slice(quarter, 2 * quarter);
    const thirdPart = images.slice(2 * quarter, 3 * quarter);
    const fourthPart = images.slice(3 * quarter);

    const heights = [
        "h-64",
        "h-80",
        "h-96",
        "h-72",
        "h-[30rem]",
    ];

    return (
        <div
            className={cn("items-start w-full", className)}
            ref={gridRef}
        >
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start max-w-[1920px] mx-auto gap-12 py-20 px-10 md:px-20 lg:px-40"
            >
                {/* Column 1 */}
                <div className="grid gap-12">
                    {firstPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateFirst }}
                            key={"grid-1" + idx}
                        >
                            <div className={cn("w-full rounded-lg gap-10 !m-0 !p-0 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center border border-white/10 relative overflow-hidden group", heights[idx % heights.length])}>
                                <Image
                                    src={el}
                                    className="object-cover object-center absolute inset-0 w-full h-full transform transition duration-500 hover:scale-110"
                                    alt="thumbnail"
                                    fill
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Column 2 */}
                <div className="grid gap-12">
                    {secondPart.map((el, idx) => (
                        <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
                            <div className={cn("w-full rounded-lg gap-10 !m-0 !p-0 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center border border-white/10 relative overflow-hidden group", heights[(idx + 1) % heights.length])}>
                                <Image
                                    src={el}
                                    className="object-cover object-center absolute inset-0 w-full h-full transform transition duration-500 hover:scale-110"
                                    alt="thumbnail"
                                    fill
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Column 3 */}
                <div className="grid gap-12">
                    {thirdPart.map((el, idx) => (
                        <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
                            <div className={cn("w-full rounded-lg gap-10 !m-0 !p-0 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center border border-white/10 relative overflow-hidden group", heights[(idx + 2) % heights.length])}>
                                <Image
                                    src={el}
                                    className="object-cover object-center absolute inset-0 w-full h-full transform transition duration-500 hover:scale-110"
                                    alt="thumbnail"
                                    fill
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Column 4 */}
                <div className="grid gap-12">
                    {fourthPart.map((el, idx) => (
                        <motion.div style={{ y: translateFourth }} key={"grid-4" + idx}>
                            <div className={cn("w-full rounded-lg gap-10 !m-0 !p-0 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center border border-white/10 relative overflow-hidden group", heights[(idx + 3) % heights.length])}>
                                <Image
                                    src={el}
                                    className="object-cover object-center absolute inset-0 w-full h-full transform transition duration-500 hover:scale-110"
                                    alt="thumbnail"
                                    fill
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};
