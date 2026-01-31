import Image from "next/image";
import Link from "next/link";



export default function Navbar() {
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

    return (
        <nav className="fixed font-inter  top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 ">
            {/* Left Logo */}
            <div className="w-12 h-12 relative">
                <Image
                    src="/iitd_logo 1.png"
                    alt="IITD Logo"
                    fill
                    className="object-contain"
                />
            </div>

            {/* Center Navigation Container */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-4">
                {/* Left Nav Pill */}
                <div className="flex items-center bg-[rgb(24,23,25)] backdrop-blur-md rounded-full px-8 py-4  ">
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
                        src="/middle logo.png"
                        alt="Sportech Logo"
                        fill
                        className="object-contain"
                    />
                </div>

                {/* Right Nav Pill */}
                <div className="flex items-center  bg-[rgb(24,23,25)] backdrop-blur-md rounded-full px-8 py-4  ">
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

            {/* Right Spacer */}
            <div className="w-12 h-12"></div>
        </nav>
    );
}
