"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MarqueeBanner() {
    return (
        <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 w-[90%] max-w-4xl m-0 p-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
        >
            <div className="bg-black bg-gradient-to-r from-orange-950 via-black to-blue-950 backdrop-blur-md rounded-full px-4 py-2 overflow-hidden border border-white/10 m-0 p-0">
                <div className="flex animate-marquee h-10">
                    {/* First set */}
                    <div className="flex items-center h-10 ">
                        <Image src="/ignite.png" alt="Ignite" width={180} height={10} className="object-contain shrink-0 " />
                        <Image src="/bsaLogo.png" alt="BSA" width={40} height={40} className="object-contain shrink-0 " />
                        <Image src="/triumph.png" alt="Triumph" width={180} height={10} className="object-contain shrink-0 " />
                        <Image src="/bsaLogo.png" alt="BSA" width={40} height={40} className="object-contain shrink-0 " />
                        <Image src="/unite.png" alt="Unite" width={180} height={10} className="object-contain shrink-0 " />
                        <Image src="/bsaLogo.png" alt="BSA" width={40} height={40} className="object-contain shrink-0 " />
                    </div>
                    {/* Duplicate for seamless loop */}
                    <div className="flex items-center h-10 ">
                        <Image src="/ignite.png" alt="Ignite" width={180} height={10} className="object-contain shrink-0 " />
                        <Image src="/bsaLogo.png" alt="BSA" width={40} height={40} className="object-contain shrink-0 " />
                        <Image src="/triumph.png" alt="Triumph" width={180} height={10} className="object-contain shrink-0 " />
                        <Image src="/bsaLogo.png" alt="BSA" width={40} height={40} className="object-contain shrink-0 " />
                        <Image src="/unite.png" alt="Unite" width={180} height={10} className="object-contain shrink-0 " />
                        <Image src="/bsaLogo.png" alt="BSA" width={40} height={40} className="object-contain shrink-0 " />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
