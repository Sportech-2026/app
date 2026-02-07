"use client";

import Image from "next/image";

export default function EventsPage() {
    return (
        <section className="relative w-full h-screen overflow-hidden text-white">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/bg_events.png"
                    alt="Events Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <h2 className="text-4xl font-bold tracking-wider uppercase md:text-6xl">
                    Events
                </h2>
                {/* Creating a placeholder for events content */}
                <p className="mt-4 text-lg text-gray-300">
                    Stay tuned for upcoming events!
                </p>
            </div>
        </section>
    );
}
