import Image from "next/image";
import Link from "next/link";
import { Mail, Instagram, Linkedin, Youtube, Twitter } from "lucide-react"; // Added Twitter/X if needed, usually 'Twitter' or 'X'

const Footer = () => {
    return (
        <footer className="relative text-white py-16 mt-auto overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="/footer_bg.png"
                    alt="Footer Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Moderate Dark Overlay for contrast */}
                <div className="absolute inset-0 bg-black/70" />
            </div>

            <div className="container mx-auto px-6 lg:px-20 relative z-10 flex flex-col md:flex-row items-center justify-center">

                {/* Center Section - Branding & Contact (Centered) */}
                <div className="flex flex-col space-y-6 max-w-lg text-center items-center">
                    <div className="space-y-1">
                        <h2 className="text-4xl md:text-5xl font-bold font-ethnocentric tracking-wide text-[#4ceaee] drop-shadow-[0_0_10px_rgba(76,234,238,0.5)]">
                            Sportech '26
                        </h2>
                        <p className="text-lg md:text-xl text-white font-medium tracking-wider">
                            Ignite. Triumph. Unite
                        </p>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-6 pt-4 justify-center">
                        <a href="mailto:sportech@iitd.ac.in" className="text-white hover:text-[#4ceaee] transition-colors hover:drop-shadow-[0_0_8px_rgba(76,234,238,0.8)]">
                            <Mail size={24} />
                        </a>
                        <Link href="#" className="text-white hover:text-[#4ceaee] transition-colors hover:drop-shadow-[0_0_8px_rgba(76,234,238,0.8)]"><Linkedin size={24} /></Link>
                        <Link href="#" className="text-white hover:text-[#4ceaee] transition-colors hover:drop-shadow-[0_0_8px_rgba(76,234,238,0.8)]"><Instagram size={24} /></Link>
                        <Link href="#" className="text-white hover:text-[#4ceaee] transition-colors hover:drop-shadow-[0_0_8px_rgba(76,234,238,0.8)]"><Youtube size={24} /></Link>
                    </div>
                </div>

            </div>

            {/* Watermark Logo (Left) - BSA */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 md:left-4 opacity-20 pointer-events-none select-none z-0">
                <Image
                    src="/bsa_logo_blue.png"
                    alt="BSA Watermark"
                    width={450}
                    height={450}
                    className="object-contain w-20 h-20 sm:w-32 sm:h-32 md:w-60 md:h-60 lg:w-80 lg:h-80"
                />
            </div>

            {/* Watermark Logo (Right) - Sportech */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 md:right-4 opacity-20 pointer-events-none select-none z-0">
                <Image
                    src="/sportech_logo_with_name.png"
                    alt="Sportech Watermark"
                    width={200}
                    height={200}
                    className="object-contain w-14 h-14 sm:w-20 sm:h-20 md:w-60 md:h-60 lg:w-80 lg:h-80"
                />
            </div>

            {/* Copyright - Centered */}
            <div className="absolute bottom-4 w-full text-center text-xs text-white/60 font-mono pointer-events-none">
                © 2026 Sportech, IIT Delhi
            </div>
        </footer>
    );
};

export default Footer;
