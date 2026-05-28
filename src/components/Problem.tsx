import React from "react";
import { Coins, Clock, TrendingDown } from "lucide-react";

export default function Problem() {
  const problems = [
    {
      id: "prob-cost",
      icon: <Coins className="h-6 w-6 text-red-400" />,
      title: "Extrema Kostnader",
      description: "Det är svindyrt att hyra fotostudior och modeller för att få snygga produktbilder.",
      badge: "💸 Dyr process"
    },
    {
      id: "prob-time",
      icon: <Clock className="h-6 w-6 text-amber-400" />,
      title: "Tidsbrist",
      description: "Tiden räcker inte till för att skriva unika, säljande produktbeskrivningar till hundratals artiklar.",
      badge: "⏳ Tidskrävande"
    },
    {
      id: "prob-lost",
      icon: <TrendingDown className="h-6 w-6 text-rose-500" />,
      title: "Tappad Marknad",
      description: "Du tappar kunder till större konkurrenter för att din webbshop inte känns tillräckligt lyxig eller uppdaterad.",
      badge: "📉 Sämre konvertering"
    }
  ];

  return (
    <section id="problem" className="relative py-24 sm:py-32 bg-zinc-950/70 border-t border-zinc-900">
      <div className="absolute top-1/2 right-10 -z-10 h-[255px] w-[255px] rounded-full bg-violet-500/5 blur-[80px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-violet-400">
            Dina Utmaningar
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mt-3 mb-4">
            Känner du igen dig?
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-light">
            Du vill växa, men resurserna räcker inte till.
          </p>
        </div>

        {/* 3 columns of visual cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((prob) => (
            <div
              key={prob.id}
              className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 hover:bg-zinc-900/80 hover:border-zinc-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-violet-500/5"
            >
              {/* Highlight bar inside card */}
              <div className="absolute top-0 inset-x-0 h-1 rounded-t-2xl bg-gradient-to-r from-transparent via-zinc-800 to-transparent group-hover:via-violet-500 transition-all duration-300" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-950 border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                  {prob.icon}
                </div>
                <span className="text-xs font-mono bg-zinc-950 px-3 py-1 rounded-full border border-zinc-850 text-zinc-400">
                  {prob.badge}
                </span>
              </div>
              
              <h3 className="font-display text-lg font-bold text-white mb-3 tracking-tight group-hover:text-violet-300 transition-colors">
                {prob.title}
              </h3>
              
              <p className="text-sm text-zinc-400 leading-relaxed font-light">
                {prob.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
