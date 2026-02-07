'use client';
import Image from "next/image";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const teamMembers = [
    {
        name: "Tatsam Sharma",
        role: "General Secretary",
        image: "/pic.jpeg",
    },
    {
        name: "Talin Sharma",
        role: "Deputy General Secretary",
        image: "/pic.jpeg",
    },
    {
        name: "Dushyant Soni",
        role: "Deputy General Secretary PG",
        image: "/pic.jpeg",
    },
    {
        name: "Vara ",
        role: "Overall Coordinator",
        image: "/pic.jpeg",
    },
    {
        name: "Arjun Sharma",
        role: "Co-Overall Coordinator",
        image: "/pic.jpeg",
    },
    {
        name: "Emily Davis",
        role: "CTM",
        image: "/pic.jpeg",
    },
    {
        name: "Emily Davis",
        role: "CTM",
        image: "/pic.jpeg",
    },
    {
        name: "Emily Davis",
        role: "CTM",
        image: "/pic.jpeg",
    },
    {
        name: "Emily Davis",
        role: "CTM",
        image: "/pic.jpeg",
    },
    {
        name: "Emily Davis",
        role: "CTM",
        image: "/pic.jpeg",
    },
    {
        name: "Emily Davis",
        role: "CTM",
        image: "/pic.jpeg",
    },
    {
        name: "Emily Davis",
        role: "CTM",
        image: "/pic.jpeg",
    },
    {
        name: "Emily Davis",
        role: "CTM",
        image: "/pic.jpeg",
    },
    {
        name: "Emily Davis",
        role: "CTM",
        image: "/pic.jpeg",
    },
    {
        name: "Emily Davis",
        role: "CTM",
        image: "/pic.jpeg",
    },
    {
        name: "Emily Davis",
        role: "CTM",
        image: "/pic.jpeg",
    }
];

export default function TeamPage() {
    return (
        <section className="relative w-full min-h-screen bg-black font-ethnocentric">
            {/* Fixed Background */}
            <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
                <Image
                    src="/background.png"
                    alt="Team Background"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
            </div>


            {/* Right Side Image - Scrolls with content
            <div className="absolute right-0 top-0 h- w-[150px] md:w-[150px] pointer-events-none z-0">
                <Image
                    src="/team_side.jpeg"
                    alt="Decoration Right"
                    fill
                    className="object-cover scale-x-[-1]"
                />
            </div> */}

            {/* Content Container */}
            <div className="relative z-20 container mx-auto px-4 py-24 text-white text-center">
                <h1 className="text-3xl md:text-5xl font-bold tracking-wide uppercase mb-8 md:mb-16 drop-shadow-lg font-ethno">
                    MEET OUR TEAM
                </h1>

                <div className="flex flex-col items-center gap-12 md:gap-24 w-full md:max-w-[calc(100vw-200px)] mx-auto relative z-20">

                    {/* Section 1: Secretaries */}
                    <div className="w-full flex flex-col items-center gap-6">
                        <h2 className="text-2xl md:text-3xl font-bold tracking-wider uppercase text-white/80 font-ethno">
                            Secretaries
                        </h2>
                        <div className="flex flex-wrap justify-center gap-6 w-full">
                            {teamMembers.slice(0, 3).map((member, index) => (
                                <div key={index} className="w-full max-w-sm flex justify-center">
                                    <div className="relative h-96 w-[85vw] md:w-80 rounded-2xl border border-neutral-800">
                                        <GlowingEffect
                                            spread={80}
                                            glow={true}
                                            disabled={false}
                                            proximity={64}
                                            inactiveZone={0.01}
                                            borderWidth={4}
                                        />
                                        <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl bg-black p-6">
                                            <div className="relative flex flex-1 flex-col justify-between gap-3">
                                                <div className="w-full text-center">
                                                    <div className="text-lg font-bold text-white text-wrap">
                                                        {member.name}
                                                    </div>
                                                    <p className="text-neutral-300 text-xs mt-2 text-wrap">
                                                        {member.role}
                                                    </p>
                                                </div>
                                                <div className="w-full mt-auto">
                                                    <Image
                                                        src={member.image}
                                                        height="1000"
                                                        width="1000"
                                                        className="h-60 w-full object-cover rounded-xl"
                                                        alt={member.name}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 2: Coordinators */}
                    <div className="w-full flex flex-col items-center gap-6">
                        <h2 className="text-2xl md:text-3xl font-bold tracking-wider uppercase text-white/80 font-ethno">
                            Coordinators
                        </h2>
                        <div className="flex flex-wrap justify-center gap-6 w-full">
                            {teamMembers.slice(3, 5).map((member, index) => (
                                <div key={index} className="w-full max-w-sm flex justify-center">
                                    <div className="relative h-96 w-[85vw] md:w-80 rounded-2xl border border-neutral-800">
                                        <GlowingEffect
                                            spread={80}
                                            glow={true}
                                            disabled={false}
                                            proximity={64}
                                            inactiveZone={0.01}
                                            borderWidth={4}
                                        />
                                        <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl bg-black p-6">
                                            <div className="relative flex flex-1 flex-col justify-between gap-3">
                                                <div className="w-full text-center">
                                                    <div className="text-lg font-bold text-white text-wrap">
                                                        {member.name}
                                                    </div>
                                                    <p className="text-neutral-300 text-xs mt-2 text-wrap">
                                                        {member.role}
                                                    </p>
                                                </div>
                                                <div className="w-full mt-auto">
                                                    <Image
                                                        src={member.image}
                                                        height="1000"
                                                        width="1000"
                                                        className="h-60 w-full object-cover rounded-xl"
                                                        alt={member.name}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 3: Core Team Members */}
                    <div className="w-full flex flex-col items-center gap-2">
                        <h2 className="text-2xl md:text-3xl font-bold tracking-wider uppercase text-white/80 font-ethno">
                            Core Team Members
                        </h2>
                        <div className="flex flex-wrap justify-center gap-6 w-full">
                            {teamMembers.slice(5).map((member, index) => (
                                <div key={index} className="w-full max-w-sm flex justify-center">
                                    <div className="relative h-96 w-[85vw] md:w-80 rounded-2xl border border-neutral-800">
                                        <GlowingEffect
                                            spread={80}
                                            glow={true}
                                            disabled={false}
                                            proximity={64}
                                            inactiveZone={0.01}
                                            borderWidth={4}
                                        />
                                        <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl bg-black p-6">
                                            <div className="relative flex flex-1 flex-col justify-between gap-3">
                                                <div className="w-full text-center">
                                                    <div className="text-lg font-bold text-white text-wrap">
                                                        {member.name}
                                                    </div>
                                                    <p className="text-neutral-300 text-xs mt-2 text-wrap">
                                                        {member.role}
                                                    </p>
                                                </div>
                                                <div className="w-full mt-auto">
                                                    <Image
                                                        src={member.image}
                                                        height="1000"
                                                        width="1000"
                                                        className="h-60 w-full object-cover rounded-xl"
                                                        alt={member.name}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
