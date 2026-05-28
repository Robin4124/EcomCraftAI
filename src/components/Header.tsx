import React from "react";
import { Sparkles, Terminal } from "lucide-react";

export default function Header() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
          className="flex cursor-pointer items-center gap-2 group"
          id="nav-logo"
        >
          <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-violet-600 to-cyan-500 p-[1px]">
            <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-zinc-950 group-hover:bg-zinc-900 transition-colors">
              <Sparkles className="h-4.5 w-4.5 text-cyan-400 group-hover:text-violet-400 transition-colors" />
            </div>
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-white">
            EcomCraft<span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">AI</span>
          </span>
        </div>

        {/* Navigation Items */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollTo("problem")} 
            className="text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            Utmaning
          </button>
          <button 
            onClick={() => scrollTo("services")} 
            className="text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            Tjänster
          </button>
          <button 
            onClick={() => scrollTo("case")} 
            className="text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            Kundcase & Media
          </button>
          <button 
            onClick={() => scrollTo("report")} 
            className="text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Terminal className="h-3.5 w-3.5 text-purple-400" />
            Rapport
          </button>
          <button 
            onClick={() => scrollTo("contact")} 
            className="text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            Kontakt
          </button>
        </nav>

        {/* Simple Call to Action / School Badge */}
        <div className="flex items-center gap-3">
          <span className="hidden lg:inline-flex items-center gap-1.5 rounded-full bg-zinc-900 px-3 py-1 text-xs font-mono text-zinc-400 border border-zinc-800">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Skoluppgift | SV
          </span>
          <button 
            onClick={() => scrollTo("contact")}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xs font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-cyan-500 group-hover:from-purple-600 group-hover:to-cyan-500 text-white focus:ring-2 focus:outline-none focus:ring-cyan-800 cursor-pointer mt-2"
          >
            <span className="relative px-4 py-1.5 transition-all ease-in duration-75 bg-zinc-950 rounded-md group-hover:bg-opacity-0">
              Boka Demo
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
