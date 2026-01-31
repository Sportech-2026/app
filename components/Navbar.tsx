"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItemsLeft = [
        { name: "HOME", href: "/" },
        { name: "GALLERY", href: "/gallery" },
        { name: "EVENTS", href: "/formal-sports" },
    ];

    const navItemsRight = [
        { name: "ABOUT", href: "/informal-sports" },
        { name: "TEAM", href: "/team" },
        { name: "CONTACT", href: "/contact" },
    ];

    const allNavItems = [...navItemsLeft, ...navItemsRight];

    return (
        <>
            <nav className="fixed font-inter top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-4">
                {/* Left Logo */}
                <div className="w-10 h-10 md:w-12 md:h-12 relative z-50">
                    <Image
                        src="/iitd_logo 1.png"
                        alt="IITD Logo"
                        fill
                        className="object-contain"
                    />
                </div>

                {/* Mobile Center Logo */}
                <div className="md:hidden w-16 h-16 relative">
                    <Image
                        src="/sportechLogo.png"
                        alt="Sportech Logo"
                        fill
                        className="object-contain"
                    />
                </div>

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
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-4">
                    {/* Left Nav Pill */}
                    <div className="flex items-center bg-[rgb(24,23,25)] backdrop-blur-md rounded-full px-8 py-4">
                        {navItemsLeft.map((item, index) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`group relative overflow-hidden inline-block text-sm font-medium tracking-wide ${index < navItemsLeft.length - 1 ? "mr-6" : ""}`}
                            >
                                <span className="block text-white/80 transition-transform duration-300 ease-out group-hover:-translate-y-full">
                                    {item.name}
                                </span>
                                <span className="absolute left-0 top-0 block text-white translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                                    {item.name}
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* Center Logo */}
                    <div className="w-24 h-24 relative mx-2 hover:rotate-360 transition-all duration-300">
                        <Image
                            src="/sportechLogo.png"
                            alt="Sportech Logo"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Right Nav Pill */}
                    <div className="flex items-center bg-[rgb(24,23,25)] backdrop-blur-md rounded-full px-8 py-4">
                        {navItemsRight.map((item, index) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`group relative overflow-hidden inline-block text-sm font-medium tracking-wide ${index < navItemsRight.length - 1 ? "mr-6" : ""}`}
                            >
                                <span className="block text-white/80 transition-transform duration-300 ease-out group-hover:-translate-y-full">
                                    {item.name}
                                </span>
                                <span className="absolute left-0 top-0 block text-white translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                                    {item.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Right Spacer - Desktop Only */}
                <div className="hidden md:block w-12 h-12"></div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-lg transition-all duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    {allNavItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-2xl font-medium text-white/80 hover:text-white transition-colors tracking-widest"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
