import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Services from "./components/Services";
import Examples from "./components/Examples";
import CaseStudy from "./components/CaseStudy";
import Report from "./components/Report";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col selection:bg-cyan-500/30 selection:text-white">
      {/* Glow overlays on viewport corners */}
      <div className="fixed top-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-cyan-600/5 blur-[150px] pointer-events-none" />

      {/* Navigation Header */}
      <Header />

      {/* Main Single Page Content */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Problem Section */}
        <Problem />

        {/* Section 3: Services Section */}
        <Services />

        {/* Section 4: Examples Panel */}
        <Examples />

        {/* Section 5: Fictional Case Study with image galleries, music synthesizer & simulated TikTok clips */}
        <CaseStudy />

        {/* Section 6: Methods Report (Obligatorisk) */}
        <Report />

        {/* Section 7: Contact Form & Footer */}
        <Contact />
      </main>
    </div>
  );
}
