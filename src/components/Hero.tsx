import React from "react";
import { Sparkles, ArrowRight, Video, FileText } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-zinc-950 py-24 sm:py-32 lg:py-40">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute top-1/3 left-1/3 -z-10 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[100px]" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-1.5 text-xs text-zinc-300 backdrop-blur-sm mb-8 animate-pulse-slow">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span className="font-mono tracking-wider uppercase text-[10px] md:text-xs">
              Svensk AI-Byrå för Framgångsrik E-handel
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white leading-[1.1] mb-6">
            Framtidens e-handel –{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Proffsigt marknadsmaterial
            </span>{" "}
            på några sekunder.
          </h1>

          {/* Undertext */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed font-light mb-10 max-w-2xl mx-auto">
            Vi hjälper nystartade och små webbshoppar att konkurrera med de stora jättarna. 
            Genom smart AI kapar vi dina kostnader för produktbilder, text och video med 
            <span className="text-cyan-400 font-semibold"> 90 %</span>.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollTo("services")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 px-6 py-4 text-sm font-semibold text-white shadow-xl shadow-cyan-500/10 hover:shadow-cyan-400/20 active:scale-98 transition-all duration-200 cursor-pointer"
            >
              Utforska våra tjänster
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => scrollTo("case")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-900 hover:text-white px-6 py-4 text-sm font-semibold text-zinc-400 hover:border-zinc-700 transition-all cursor-pointer"
            >
              Se vårt kundcase
            </button>
          </div>
        </div>

        {/* Decorative dynamic mockup preview */}
        <div className="mt-16 sm:mt-20 relative rounded-2xl border border-zinc-800 bg-zinc-900/30 p-2 backdrop-blur-md max-w-4xl mx-auto shadow-2xl">
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent h-40 pointer-events-none" />
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden aspect-[16/8] flex flex-col items-center justify-center p-8 text-center relative">
            <div className="absolute top-2 left-4 flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
            </div>
            
            <div className="space-y-4 max-w-md animate-pulse">
              <div className="flex justify-center">
                <div className="p-3 rounded-full bg-cyan-950/50 border border-cyan-500/30">
                  <Sparkles className="h-8 w-8 text-cyan-400" />
                </div>
              </div>
              <div className="text-xs font-mono text-cyan-400">[ ECOMCRAFT CORE ENGAGEMENT: ONLINE ]</div>
              <div className="h-6 w-48 bg-zinc-800 rounded mx-auto" />
              <div className="h-3 w-72 bg-zinc-900 rounded mx-auto" />
              <div className="h-3 w-56 bg-zinc-900 rounded mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
