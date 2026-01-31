import { GiCricketBat } from "react-icons/gi";

interface SportCardProps {
    sportName: string;
    tagline: string;
    description: string;
}

export default function SportCard({
    sportName,
    tagline,
    description,
}: SportCardProps) {
    return (
        <div className="relative w-[280px] h-[420px] rounded-2xl 
      bg-gradient-to-br from-[#0B1020] to-[#050914]
      border border-blue-500/20
      shadow-[0_0_40px_rgba(46,168,255,0.15)]
      transition-all duration-300
      hover:-translate-y-2 hover:shadow-[0_0_60px_rgba(46,168,255,0.35)]
      overflow-hidden">

            {/* Glow Border */}
            <div className="absolute inset-0 rounded-2xl 
        border border-blue-400/30 pointer-events-none" />

            {/* Icon Section */}
            <div className="flex justify-center items-center mt-10">
                <div className="w-24 h-24 rounded-full 
          bg-blue-500/10 flex items-center justify-center
          shadow-[0_0_30px_rgba(46,168,255,0.4)]">
                    <GiCricketBat className="text-blue-400 text-5xl" />
                </div>
            </div>

            {/* Text Content */}
            <div className="text-center px-6 mt-8">
                <h2 className="text-2xl font-semibold tracking-widest text-blue-100">
                    {sportName}
                </h2>

                <p className="mt-2 text-sm text-blue-300/80">
                    {tagline}
                </p>

                <div className="w-16 h-[2px] bg-blue-500 mx-auto my-6 rounded-full" />

                <p className="text-sm text-blue-200/70 leading-relaxed">
                    {description}
                </p>
            </div>

            {/* Energy Glow */}
            <div className="absolute bottom-[-60px] left-1/2 
        -translate-x-1/2 w-[200px] h-[200px]
        bg-blue-500/20 blur-3xl rounded-full" />
        </div>
    );
};