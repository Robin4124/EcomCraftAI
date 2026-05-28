import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, RotateCcw, Volume2, VolumeX, Sparkles, AlertCircle, ShoppingBag, Eye, TrendingUp, Music, Headphones, Volume2 as VolIcon } from "lucide-react";

// Get the actual generated image and video paths from our previous step
const BEFORE_IMG = "/src/fore.png";
const AFTER_IMG = "/src/efter.png";
const TIKTOK_VIDEO_FILE = "/src/video.mp4";
const TIKTOK_AUDIO_FILE = "/src/ljud.mp3";

type TabType = "media" | "specs";

export default function CaseStudy() {
  const [activeTab, setActiveTab] = useState<TabType>("media");
  
  // Custom states for interactive video player
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const [videoProgress, setVideoProgress] = useState<number>(0);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(true); // start muted by default (standard browser rule)
  const videoElementRef = useRef<HTMLVideoElement>(null);

  // Custom states for interactive audio player
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const [audioProgress, setAudioProgress] = useState<number>(0);
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const audioElementRef = useRef<HTMLAudioElement>(null);

  // For visualizer bars
  const [visualizerHeights, setVisualizerHeights] = useState<number[]>(new Array(16).fill(15));

  // Sync real video tag with component playing state
  useEffect(() => {
    if (videoElementRef.current) {
      if (isVideoPlaying) {
        videoElementRef.current.play().catch(() => {});
      } else {
        videoElementRef.current.pause();
      }
    }
  }, [isVideoPlaying]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopVideo();
      stopAudio();
    };
  }, []);

  // Video controller functions
  const startVideo = () => {
    setIsVideoPlaying(true);
    if (videoElementRef.current) {
      videoElementRef.current.play().catch(() => {});
    }
  };

  const stopVideo = () => {
    setIsVideoPlaying(false);
    if (videoElementRef.current) {
      videoElementRef.current.pause();
    }
  };

  const toggleVideoPlay = () => {
    if (isVideoPlaying) {
      stopVideo();
    } else {
      startVideo();
    }
  };

  const resetVideo = () => {
    setVideoProgress(0);
    if (videoElementRef.current) {
      videoElementRef.current.currentTime = 0;
      videoElementRef.current.play().catch(() => {});
    }
    setIsVideoPlaying(true);
  };

  const handleTimeUpdate = () => {
    if (videoElementRef.current) {
      const current = videoElementRef.current.currentTime;
      const duration = videoElementRef.current.duration;
      if (duration) {
        setVideoProgress((current / duration) * 100);
      }
    }
  };

  // Sync real audio tag with component playing state
  useEffect(() => {
    if (audioElementRef.current) {
      if (isAudioPlaying) {
        audioElementRef.current.play().catch(() => {});
      } else {
        audioElementRef.current.pause();
      }
    }
  }, [isAudioPlaying]);

  // Sync visualizer animation during playback
  useEffect(() => {
    let animInterval: number | null = null;
    if (isAudioPlaying) {
      animInterval = window.setInterval(() => {
        setVisualizerHeights(() => {
          return Array.from({ length: 16 }, () => Math.floor(Math.random() * 55) + 10);
        });
      }, 100);
    } else {
      setVisualizerHeights(new Array(16).fill(15));
    }
    return () => {
      if (animInterval) clearInterval(animInterval);
    };
  }, [isAudioPlaying]);

  const startAudio = () => {
    setIsAudioPlaying(true);
  };

  const stopAudio = () => {
    setIsAudioPlaying(false);
  };

  const toggleAudioPlay = () => {
    setIsAudioPlaying(!isAudioPlaying);
  };

  const toggleAudioMute = () => {
    setIsAudioMuted(!isAudioMuted);
  };

  const handleAudioTimeUpdate = () => {
    if (audioElementRef.current) {
      const current = audioElementRef.current.currentTime;
      const duration = audioElementRef.current.duration;
      if (duration) {
        setAudioProgress((current / duration) * 100);
      }
    }
  };

  return (
    <section id="case" className="relative py-24 sm:py-32 bg-zinc-950 border-t border-zinc-900">
      <div className="absolute top-1/2 left-1/2 -z-10 h-[350px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#a78bfa]">
            REALA UTKOMSTER
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mt-3 mb-4">
            Kundcase: Så hjälpte vi "TrendGlow Boutique" att öka försäljningen med 45 %
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-light max-w-2xl mx-auto">
            Ett fullskaligt praktiskt bevis på hur högpresterande AI dramatiskt kan förändra spelplanen för en lokal smyckesbutik på två veckor.
          </p>
        </div>

        {/* 3-Column Background, Solution & Results */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          {/* Card 1: Bakgrund */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 hover:border-zinc-750 transition-colors">
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">01. Bakgrund</div>
            <h3 className="font-display text-lg font-bold text-white mb-3">Enkel Start, Stora Hinder</h3>
            <p className="text-sm text-zinc-400 font-light leading-relaxed">
              TrendGlow säljer handgjorda smycken. Ägaren hade varken råd med studioutrustning för dyra klock- och ringfotograferingar, eller tid att skriva målgruppsanpassade texter och klippa anpassat videomaterial vecka ut och vecka in.
            </p>
          </div>

          {/* Card 2: Vår lösning */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 hover:border-zinc-750 transition-colors">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">02. Vår Lösning</div>
            <h3 className="font-display text-lg font-bold text-white mb-3">Helhetsleverans med AI</h3>
            <p className="text-sm text-zinc-400 font-light leading-relaxed">
              EcomCraft AI tog hand om hela katalogen. Vi förvandlade enkla mobilbilder till studiokvalitet med perfekta reflektioner, genererade SEO-optimerade texter och skapade en TikTokvideo-annons anpassad med engagerande syntetisk AI-röst.
            </p>
          </div>

          {/* Card 3: Resultat */}
          <div className="rounded-xl border border-cyan-950/40 bg-cyan-950/10 p-6 border-l-2 border-l-cyan-500">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">03. Resultat</div>
            <h3 className="font-display text-lg font-bold text-white mb-3 flex items-center gap-1.5">
              <TrendingUp className="h-4 w-4 text-cyan-400" />
              Särskild Tillväxt
            </h3>
            <ul className="space-y-2 text-sm text-zinc-300 font-light">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold font-mono">📈 +45%</span>
                <span>Ökad försäljning och konverteringsgrad på mindre än två veckor.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold font-mono">💰 20 000+ kr</span>
                <span>Sparade i direkta produktionskostnader för marknadsföringsmaterial.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Media Compartment Grid - Side-by-Side Images & Custom Simulated Interactive Players */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Side-by-side Before/After Image box - taking 7/12 cols */}
          <div className="lg:col-span-7 space-y-6">
            <h4 className="font-display font-bold text-xl text-white flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-cyan-400" />
              Produktbilds-Generation (Före / Efter)
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* BEFORE IMAGE BOX */}
              <div className="relative rounded-2xl overflow-hidden border border-zinc-850 bg-zinc-900/20 group">
                <div className="absolute top-3 left-3 z-10 rounded-full bg-zinc-950/80 backdrop-blur-md px-3 py-1 text-[10px] font-mono font-bold text-red-400 uppercase tracking-wider border border-red-500/20">
                  Före: Mobilbild
                </div>
                <div className="aspect-[4/3] bg-zinc-950 relative overflow-hidden flex items-center justify-center">
                  <img
                    src={BEFORE_IMG}
                    alt="Enkel mobilbild på ett smycke"
                    className="object-cover w-full h-full group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4 bg-zinc-900/60 border-t border-zinc-950">
                  <p className="text-xs text-zinc-400 leading-normal font-light">
                    Klantens råa mobilbild på en ring tagen under slappt köksljus på ett träbord.
                  </p>
                </div>
              </div>

              {/* AFTER IMAGE BOX */}
              <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20 bg-cyan-950/5 group">
                <div className="absolute top-3 left-3 z-10 rounded-full bg-cyan-950/90 backdrop-blur-md px-3 py-1 text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider border border-cyan-400/30">
                  Efter: AI Studio
                </div>
                <div className="aspect-[4/3] bg-zinc-950 relative overflow-hidden flex items-center justify-center">
                  <img
                    src={AFTER_IMG}
                    alt="AI-genererad reklambild i studiomiljö"
                    className="object-cover w-full h-full group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4 bg-zinc-900/60 border-t border-zinc-950">
                  <p className="text-xs text-cyan-300 font-light leading-normal">
                    Färdigt premiummaterial efter EcomCraft AI rendering. Obsidian mirror, lila och cyan bakgrunder.
                  </p>
                </div>
              </div>

            </div>

            {/* AUDIO PLAYER: Lyssna på AI voiceover */}
            <div className="rounded-2xl border border-zinc-800 bg-[#121214]/60 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-purple-950/50 border border-purple-500/25">
                    <Music className="h-4.5 w-4.5 text-purple-400" />
                  </div>
                  <div>
                    <h5 className="font-display font-medium text-sm text-white">TrendGlow Radiospot & Voiceover</h5>
                    <p className="text-[10px] text-zinc-500 font-mono">LJUD-SPELARMODUL - SVENSK AI RÖST</p>
                  </div>
                </div>
                <Headphones className="h-4 w-4 text-purple-400 shrink-0" />
              </div>

              {/* Player Waveform Simulation */}
              <div className="bg-zinc-950 border border-zinc-850 rounded-xl p-4 mb-4">
                <div className="flex items-end justify-between gap-1 h-[70px] px-2 mb-3">
                  {visualizerHeights.map((ht, elementIdx) => (
                    <div
                      key={elementIdx}
                      style={{ height: `${ht}%` }}
                      className={`w-full rounded-t-sm transition-all duration-150 ${
                        isAudioPlaying 
                          ? "bg-gradient-to-t from-cyan-400 via-purple-500 to-indigo-500" 
                          : "bg-zinc-800"
                      }`}
                    />
                  ))}
                </div>

                {/* Progress bar */}
                <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden">
                  <div 
                    style={{ width: `${audioProgress}%` }} 
                    className="bg-purple-500 h-full rounded-full transition-all duration-100" 
                  />
                </div>
                
                {/* Timestamps */}
                <div className="flex items-center justify-between mt-2 font-mono text-[9px] text-zinc-650">
                  <span>0:{(Math.floor(audioProgress * 0.15)).toString().padStart(2, '0')}</span>
                  <span>0:15 sekund</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={toggleAudioPlay}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 hover:bg-purple-500 text-white transition-colors cursor-pointer"
                    title={isAudioPlaying ? "Pausa" : "Spela"}
                  >
                    {isAudioPlaying ? <Pause className="h-4.5 w-4.5 fill-white" /> : <Play className="h-4.5 w-4.5 fill-white ml-0.5" />}
                  </button>
                  <button
                    onClick={() => {
                      if (audioElementRef.current) {
                        audioElementRef.current.currentTime = 0;
                        setAudioProgress(0);
                        setIsAudioPlaying(true);
                      }
                    }}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                    title="Starta om"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={toggleAudioMute}
                    className="p-2 text-zinc-500 hover:text-white cursor-pointer"
                    title={isAudioMuted ? "Slå på ljud" : "Ljud av"}
                  >
                    {isAudioMuted ? <VolumeX className="h-4 w-4 text-red-400" /> : <Volume2 className="h-4 w-4" />}
                  </button>
                  <span className="text-[10px] font-mono text-cyan-400 bg-zinc-950 border border-zinc-900 px-2.5 py-1 rounded-md">
                    AI-Röst: 11 Labs MP3
                  </span>
                </div>
              </div>

              {/* Hidden HTML5 Audio tag using downloaded clip */}
              <audio
                ref={audioElementRef}
                src={TIKTOK_AUDIO_FILE}
                muted={isAudioMuted}
                onTimeUpdate={handleAudioTimeUpdate}
                onEnded={() => setIsAudioPlaying(false)}
                className="hidden"
              />
            </div>

          </div>

          {/* Simulated TikTok vertical video player - taking 5/12 cols */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <h4 className="font-display font-bold text-xl text-white self-start lg:mb-6 mb-4">
              TikTok-Video Kampanj
            </h4>

            {/* Smart Phone Shell Frame Mockup */}
            <div className="relative w-full max-w-[280px] aspect-[9/16] rounded-[36px] bg-zinc-950 border-[10px] border-zinc-900 p-0 shadow-2xl overflow-hidden group border-b-[14px]">
              
              {/* Speaker & Sensor bar at top of phone */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 h-4 w-20 rounded-full bg-zinc-900 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
              </div>

              {/* Screen Area */}
              <div className="relative h-full w-full bg-zinc-950 overflow-hidden flex flex-col justify-between">
                
                {/* Interactive Real Video Content Body */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <video
                    ref={videoElementRef}
                    src={TIKTOK_VIDEO_FILE}
                    loop
                    muted={isVideoMuted}
                    playsInline
                    onTimeUpdate={handleTimeUpdate}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Dark transparent gradient on the text area */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/50 to-transparent h-48 z-10" />
                </div>

                {/* Simulated TikTok UI Header Overlays */}
                <div className="relative z-20 flex items-center justify-between p-3 pt-6 bg-gradient-to-b from-black/60 to-transparent">
                  <span className="text-[10px] text-zinc-400 font-mono tracking-wider">LIVE RECREATION</span>
                  <div className="flex gap-1.5 items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[9px] font-mono text-white">ADVERT</span>
                  </div>
                </div>

                {/* Big play indicator overlay in the middle screen */}
                {!isVideoPlaying && (
                  <button 
                    onClick={toggleVideoPlay}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-zinc-900/90 text-white rounded-full p-4 hover:scale-105 border border-zinc-800 transition-all cursor-pointer shadow-lg"
                  >
                    <Play className="h-6 w-6 fill-white ml-0.5" />
                  </button>
                )}

                {/* Simulated Bottom Video Captions & Handles */}
                <div className="relative z-20 p-3 pb-4">
                  
                  {/* Progress bar line */}
                  <div className="w-full bg-zinc-800 h-[3px] rounded-full mb-3 overflow-hidden">
                    <div 
                      style={{ width: `${videoProgress}%` }} 
                      className="bg-cyan-400 h-full rounded-full transition-all duration-100" 
                    />
                  </div>

                  <div className="flex justify-between items-end">
                    
                    {/* Left details */}
                    <div className="max-w-[80%] text-left">
                      <span className="text-[9px] font-mono font-bold text-cyan-400 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800 block w-max mb-1.5">
                        @trendglow_boutique
                      </span>
                      <p className="text-[11px] font-sans text-white font-medium leading-tight mb-1">
                        Vår nya handgjorda Aurora-ring förvandlar din vardag till ren magi. ✨ 
                      </p>
                      <p className="text-[9px] text-zinc-400">
                        Musik: EcomCraft AI Beats
                      </p>
                    </div>

                    {/* Right action metrics mock */}
                    <div className="flex flex-col gap-2 text-zinc-400 font-mono text-[9px] items-center">
                      <div className="bg-zinc-950/80 p-1.5 rounded-full border border-zinc-850 cursor-pointer hover:text-red-400 transition-colors">
                        ♥
                      </div>
                      <span className="text-[8px] text-zinc-500">1.2k</span>
                    </div>

                  </div>

                </div>

              </div>
            </div>

            {/* Video Controls under the phone mockup */}
            <div className="mt-4 flex gap-2 w-full max-w-[280px]">
              <button
                onClick={toggleVideoPlay}
                className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:text-white py-2 text-xs font-semibold text-zinc-400 cursor-pointer transition-colors"
              >
                {isVideoPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                {isVideoPlaying ? "Pausa Video" : "Spela Video"}
              </button>
              <button
                onClick={() => setIsVideoMuted(!isVideoMuted)}
                className="rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-400 hover:text-white p-2 cursor-pointer transition-colors"
                title={isVideoMuted ? "Sätt på ljud" : "Ljud av"}
              >
                {isVideoMuted ? <VolumeX className="h-3.5 w-3.5 text-red-400" /> : <Volume2 className="h-3.5 w-3.5 text-cyan-400" />}
              </button>
              <button
                onClick={resetVideo}
                className="rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-400 hover:text-white p-2 cursor-pointer transition-colors"
                title="Starta om video"
              >
                <RotateCcw className="h-3.5 w-3.5" />
              </button>
            </div>
            
          </div>

        </div>

      </div>
    </section>
  );
}
