"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const navItemsLeft = [
        { name: "HOME", href: "/" },
        { name: "GALLERY", href: "/gallery" },
        { name: "EVENTS", href: "/events" },
    ];

    const navItemsRight = [
        { name: "ABOUT", href: "/about" },
        { name: "TEAM", href: "/team" },
        { name: "SPONSORS", href: "/sponsors" },
    ];

    const allNavItems = [...navItemsLeft, ...navItemsRight];

    return (
        <>
            <nav className="fixed font-ethnocentric top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 backdrop-blur-md bg-black/20">
                {/* Left Logo */}
                <motion.div
                    className="w-10 h-10 md:w-12 md:h-12 relative z-50"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <Link href="/" className="cursor-pointer block w-full h-full relative">
                        <Image
                            src="/logos/iitd_logo 1.png"
                            alt="IITD Logo"
                            fill
                            className="object-contain"
                        />
                    </Link>
                </motion.div>

                {/* Mobile Center Logo */}
                <motion.div
                    className="md:hidden w-16 h-16 relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Link href="/" className="cursor-pointer block w-full h-full relative">
                        <Image
                            src="/logos/sportech_logo.png"
                            alt="Sportech Logo"
                            fill
                            className="object-contain"
                        />
                    </Link>
                </motion.div>

                {/* Hamburger Menu Button - Mobile Only */}
                <button
                    className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-50"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
                    <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>

                {/* Desktop Navigation Container */}
                <motion.div
                    className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-4"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                    {/* Left Nav Pill */}
                    <div className="flex items-center bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-8 py-4">
                        {navItemsLeft.map((item, index) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`group relative overflow-hidden inline-block text-sm font-medium tracking-wide ${index < navItemsLeft.length - 1 ? "mr-6" : ""}`}
                                >
                                    <span className={`block transition-transform duration-300 ease-out group-hover:-translate-y-full ${isActive ? "text-cyan-400" : "text-white/80"}`}>
                                        {item.name}
                                    </span>
                                    <span className={`absolute left-0 top-0 block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 ${isActive ? "text-cyan-400" : "text-white"}`}>
                                        {item.name}
                                    </span>
                                    {isActive && (
                                        <>
                                            <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                                        </>
                                    )}
                                </Link>
                            )
                        })}
                    </div>

                    {/* Center Logo */}
                    <div className="w-16 h-16 relative mx-2 -translate-y-1">
                        <Link href="/" className="cursor-pointer block w-full h-full relative">
                            <Image
                                src="/logos/sportech_logo.png"
                                alt="Sportech Logo"
                                fill
                                className="object-contain"
                            />
                        </Link>
                    </div>

                    {/* Right Nav Pill */}
                    <div className="flex items-center bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-8 py-4">
                        {navItemsRight.map((item, index) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`group relative overflow-hidden inline-block text-sm font-medium tracking-wide ${index < navItemsRight.length - 1 ? "mr-6" : ""}`}
                                >
                                    <span className={`block transition-transform duration-300 ease-out group-hover:-translate-y-full ${isActive ? "text-cyan-400" : "text-white/80"}`}>
                                        {item.name}
                                    </span>
                                    <span className={`absolute left-0 top-0 block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 ${isActive ? "text-cyan-400" : "text-white"}`}>
                                        {item.name}
                                    </span>
                                    {isActive && (
                                        <>
                                            <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                                        </>
                                    )}
                                </Link>
                            )
                        })}
                    </div>
                </motion.div>

                {/* Right Spacer - Desktop Only */}
                <div className="hidden md:block w-12 h-12"></div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                        />

                        {/* Side Drawer */}
                        <motion.div
                            className="fixed top-0 right-0 z-40 h-full w-64 bg-black/95 border-l border-white/10 md:hidden pt-24 px-6 flex flex-col gap-6"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        >
                            {allNavItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-lg font-medium  font-ethnocentric text-white/80 hover:text-white transition-colors tracking-widest border-b border-white/10 pb-4"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
