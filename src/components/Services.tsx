import React from "react";
import { Camera, FileText, Video, Volume2, Sparkles, Plus } from "lucide-react";

export default function Services() {
  const serviceList = [
    {
      id: "srv-img",
      icon: <Camera className="h-6 w-6 text-cyan-400" />,
      title: "AI-Produktbilder (Studio Generation)",
      description: "Skicka oss en enkel mobilbild. Vår AI förvandlar den till en lyxig studiobild med perfekt ljus.",
      features: ["Perfekt skugga & reflektion", "Skräddarsydd bakgrund", "8K bildkvalitet"]
    },
    {
      id: "srv-copy",
      icon: <FileText className="h-6 w-6 text-purple-400" />,
      title: "AI-Copywriting & SEO",
      description: "Vi genererar unika, säljande och sökmotoroptimerade produktbeskrivningar på några sekunder.",
      features: ["Sökordsoptimerat (SEO)", "Målgruppsanpassad ton", "Format för Shopify & WooCommerce"]
    },
    {
      id: "srv-vid",
      icon: <Video className="h-6 w-6 text-blue-400" />,
      title: "AI-Social Video Ads",
      description: "Vi skapar korta, engagerande videoannonser för TikTok och Reels baserat på dina produktbilder.",
      features: ["Optimerade för viralt engagemang", "Animerade effekter", "Skräddarsytt för TikTok, Shorts, Reels"]
    },
    {
      id: "srv-aud",
      icon: <Volume2 className="h-6 w-6 text-teal-400" />,
      title: "AI-Röst & Ljudreklam",
      description: "Vi skapar naturliga AI-röster och bakgrundsmusik för video eller radioreklam som säljer in din produkt.",
      features: ["Ultra-realistiska röstprompter", "Bakgrundsmusik ingår", "Leverans som högupplöst ljudfil"]
    }
  ];

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-zinc-950 border-t border-zinc-900">
      {/* Background Decorative glow */}
      <div className="absolute top-1/2 left-10 -z-10 h-[300px] w-[300px] rounded-full bg-cyan-500/5 blur-[100px]" />
      <div className="absolute top-1/3 left-1/2 -z-10 h-[250px] w-[250px] rounded-full bg-purple-500/5 blur-[90px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
            Bred AI-Kompetens
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mt-3 mb-6">
            Hur vi hjälper din webbshop att växa
          </h2>
          <div className="inline-flex rounded-xl bg-violet-950/15 border border-violet-900/40 p-5 mt-2 max-w-3xl text-left">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400">
                <Sparkles className="h-5 w-5" />
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed font-light">
                <strong className="text-violet-300 font-semibold font-display">Viktigt klargörande:</strong>{" "}
                Vi erbjuder inga fristående verktyg på sidan, utan vi är en 
                <span className="text-white font-medium"> fullservicebyrå </span> 
                som använder marknadens mest avancerade AI för att leverera färdigt material till din butik på rekordtid.
              </p>
            </div>
          </div>
        </div>

        {/* 4 columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceList.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl border border-zinc-850 bg-[#121214]/50 p-6 hover:bg-[#121214]/90 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-950 border border-zinc-800 mb-5 group-hover:scale-105 transition-transform">
                  {service.icon}
                </div>
                
                <h3 className="font-display text-base font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="border-t border-zinc-800/80 pt-4 mt-4">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[11px] font-mono text-zinc-500">
                      <Plus className="h-3 w-3 text-cyan-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
