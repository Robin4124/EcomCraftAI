import React, { useState } from "react";
import { Copy, Check, FileText, Share2, Sparkles } from "lucide-react";

export default function Examples() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const texts = [
    {
      title: "Kundcase: Lyxig Produktbeskrivning",
      subtitle: "Genererad för e-handelsvarumärket Aurora Watches",
      label: "PRODUKTBESKRIVNING",
      text: "Möt Aurora-klockan. En tidlös fusion av skandinavisk minimalism och modern precision. Skapad för dig som värdesätter varje sekund av elegans.",
      details: "Tonläge: Elegant, lyxig, förtroendeingivande. Målgrupp: Premiummedvetna konsumenter."
    },
    {
      title: "Kundcase: Sociala medier-annons",
      subtitle: "Genererad för ett ekologiskt klädvarumärke",
      label: "SOCIAL MEDIA AD COPY",
      text: "Trött på tråkiga basplagg? 🌟 Vår nya ekologiska kollektion är här! Klicka på länken för 20% rabatt på ditt första köp. Skynda fynda!",
      details: "Tonläge: Glad, engagerande, säljande. Målgrupp: Unga vuxna, miljömedvetna sökare."
    }
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  return (
    <section id="examples" className="relative py-24 sm:py-32 bg-zinc-950/70 border-t border-zinc-900">
      <div className="absolute top-1/4 left-1/4 -z-10 h-[250px] w-[250px] rounded-full bg-cyan-500/5 blur-[80px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-violet-400">
            Säljande Innehåll
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mt-3 mb-4">
            Exempel på våra AI-stödda texter
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-light">
            Här är två exempel på texter vi har genererat åt kunder med hjälp av AI:
          </p>
        </div>

        {/* 2-column design with modern clipboard interaction and cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {texts.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-zinc-850 bg-[#121214]/60 p-6 sm:p-8 hover:bg-[#121214]/90 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Highlight bar inside card */}
              <div className="absolute top-0 inset-x-0 h-1 rounded-t-2xl bg-gradient-to-r from-transparent via-zinc-800 to-transparent group-hover:via-cyan-400 transition-all duration-350" />
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-950 border border-zinc-800 px-3 py-1 text-[10px] font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                    <Sparkles className="h-3 w-3" />
                    {item.label}
                  </span>
                  
                  {/* Copy Button */}
                  <button
                    onClick={() => handleCopy(item.text, index)}
                    className="flex items-center gap-1 text-xs text-zinc-500 hover:text-white bg-zinc-950 hover:bg-zinc-900 p-2 rounded-lg border border-zinc-850 hover:border-zinc-750 transition-all cursor-pointer"
                    title="Kopiera till urklipp"
                  >
                    {copiedIndex === index ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-medium">Kopierad!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Kopiera</span>
                      </>
                    )}
                  </button>
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-500 font-mono mb-6">{item.subtitle}</p>

                {/* Simulated editor layout */}
                <div className="rounded-xl bg-zinc-950 border border-zinc-850 p-6 font-sans italic text-zinc-200 text-sm leading-relaxed relative overflow-hidden group-hover:border-zinc-750 transition-colors">
                  <div className="absolute top-2 right-4 font-mono text-[9px] uppercase tracking-wider text-zinc-700 select-none">
                    AI OUTPUT
                  </div>
                  <span className="text-violet-400 font-serif text-3xl leading-none absolute top-2 left-2 pointer-events-none">“</span>
                  <p className="relative z-10 pl-4 py-2">{item.text}</p>
                </div>
              </div>

              {/* Specs metadata */}
              <div className="mt-6 pt-4 border-t border-zinc-800/85">
                <span className="text-[11px] font-mono text-zinc-500 block leading-normal">
                  {item.details}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
