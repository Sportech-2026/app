'use client';
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

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
                                    <CardContainer containerClassName="py-4">
                                        <CardBody className="relative group/card w-[85vw] md:w-80 h-96 rounded-xl p-[1px] bg-black/[0.1] dark:bg-white/[0.2] hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 transition-all duration-300">
                                            <div className="w-full h-full bg-gray-50 dark:bg-black rounded-xl p-6 relative flex flex-col items-center">
                                                <CardItem
                                                    translateZ="50"
                                                    className="text-lg font-bold text-neutral-600 dark:text-white w-full text-center text-wrap"
                                                >
                                                    {member.name}
                                                </CardItem>
                                                <CardItem
                                                    as="p"
                                                    translateZ="60"
                                                    className="text-neutral-500 text-xs max-w-sm mt-2 dark:text-neutral-300 w-full text-center text-wrap"
                                                >
                                                    {member.role}
                                                </CardItem>
                                                <CardItem
                                                    translateZ="100"
                                                    rotateX={10}
                                                    rotateZ={-5}
                                                    className="w-full mt-auto"
                                                >
                                                    <Image
                                                        src={member.image}
                                                        height="1000"
                                                        width="1000"
                                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                                        alt={member.name}
                                                    />
                                                </CardItem>
                                            </div>
                                        </CardBody>
                                    </CardContainer>
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
                                    <CardContainer containerClassName="py-4">
                                        <CardBody className="relative group/card w-[85vw] md:w-80 h-96 rounded-xl p-[1px] bg-black/[0.1] dark:bg-white/[0.2] hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 transition-all duration-300">
                                            <div className="w-full h-full bg-gray-50 dark:bg-black rounded-xl p-6 relative flex flex-col items-center">
                                                <CardItem
                                                    translateZ="50"
                                                    className="text-lg font-bold text-neutral-600 dark:text-white w-full text-center text-wrap"
                                                >
                                                    {member.name}
                                                </CardItem>
                                                <CardItem
                                                    as="p"
                                                    translateZ="60"
                                                    className="text-neutral-500 text-xs max-w-sm mt-2 dark:text-neutral-300 w-full text-center text-wrap"
                                                >
                                                    {member.role}
                                                </CardItem>
                                                <CardItem
                                                    translateZ="100"
                                                    rotateX={10}
                                                    rotateZ={-5}
                                                    className="w-full mt-auto"
                                                >
                                                    <Image
                                                        src={member.image}
                                                        height="1000"
                                                        width="1000"
                                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                                        alt={member.name}
                                                    />
                                                </CardItem>
                                            </div>
                                        </CardBody>
                                    </CardContainer>
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
                                    <CardContainer containerClassName="py-4">
                                        <CardBody className="relative group/card w-[85vw] md:w-80 h-96 rounded-xl p-[1px] bg-black/[0.1] dark:bg-white/[0.2] hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 transition-all duration-300">
                                            <div className="w-full h-full bg-gray-50 dark:bg-black rounded-xl p-6 relative flex flex-col items-center">
                                                <CardItem
                                                    translateZ="50"
                                                    className="text-lg font-bold text-neutral-600 dark:text-white w-full text-center text-wrap"
                                                >
                                                    {member.name}
                                                </CardItem>
                                                <CardItem
                                                    as="p"
                                                    translateZ="60"
                                                    className="text-neutral-500 text-xs max-w-sm mt-2 dark:text-neutral-300 w-full text-center text-wrap"
                                                >
                                                    {member.role}
                                                </CardItem>
                                                <CardItem
                                                    translateZ="100"
                                                    rotateX={10}
                                                    rotateZ={-5}
                                                    className="w-full mt-auto"
                                                >
                                                    <Image
                                                        src={member.image}
                                                        height="1000"
                                                        width="1000"
                                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                                        alt={member.name}
                                                    />
                                                </CardItem>
                                            </div>
                                        </CardBody>
                                    </CardContainer>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
