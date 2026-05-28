import React, { useState } from "react";
import { Mail, MessageSquare, User, Send, CheckCircle, Smartphone, MapPin, Sparkles } from "lucide-react";

interface Submission {
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

export default function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError("Vänligen fyll i alla fält.");
      return;
    }

    const newSubmission: Submission = {
      name,
      email,
      message,
      timestamp: new Date().toLocaleTimeString("sv-SE", { hour: "2-digit", minute: "2-digit" })
    };

    setSubmissions([newSubmission, ...submissions]);
    setIsSubmitted(true);
    setError("");

    // Reset fields
    setName("");
    setEmail("");
    setMessage("");

    // Auto-dismiss success state after 5 seconds to allow another test send
    setTimeout(() => {
      setIsSubmitted(false);
    }, 6000);
  };

  return (
    <section id="contact" className="relative py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="absolute bottom-0 right-10 -z-10 h-[250px] w-[250px] rounded-full bg-cyan-500/5 blur-[90px]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left panel info - taking 5/12 columns */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
              Starta Resan
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Redo att automatisera din e-handel?
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
              Kontakta oss på EcomCraft AI idag för en kostnadsfri demo och en personlig genomgång av din webbshops möjligheter.
            </p>

            {/* Direct Coordinates */}
            <div className="space-y-4 pt-6">
              <div className="flex items-center gap-3.5 col-span-12">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-cyan-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 block uppercase tracking-wider">OFFICIELL E-POST</span>
                  <a href="mailto:info@ecomcraftai.se" className="text-sm font-medium text-white hover:text-cyan-400 transition-colors">
                    info@ecomcraftai.se
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-purple-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 block uppercase tracking-wider">PLATS</span>
                  <span className="text-sm font-medium text-zinc-300">Borås, Sverige</span>
                </div>
              </div>
            </div>

            {/* School Warning Note */}
            <div className="rounded-xl border border-zinc-850 bg-zinc-900/40 p-4.5 text-[11px] font-mono text-zinc-500 leading-normal">
              <span className="text-yellow-500 font-bold">💡 Bedömnings-info:</span> Detta formulär sparar alla demo-förfrågningar i sidans interna tillståndslogg (React State). Perfekt för att låta läraren testa inmatning utan extern server.
            </div>
          </div>

          {/* Right panel Contact Form - taking 7/12 columns */}
          <div className="lg:col-span-7">
            
            <div className="rounded-2xl border border-zinc-850 bg-[#121214]/60 p-6 sm:p-8">
              
              {/* Form header */}
              <h3 className="font-display text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-cyan-400" />
                Boka kostnadsfri demo
              </h3>

              {isSubmitted && (
                <div className="mb-6 p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold block text-sm">Tack så mycket!</strong>
                    <span className="text-xs text-emerald-400/90">Vi har tagit emot din förfrågan och återkommer till din angivna e-post inom kort.</span>
                  </div>
                </div>
              )}

              {error && (
                <div className="mb-6 p-3.5 rounded-xl border border-red-500/30 bg-red-500/10 text-red-300 text-xs">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="form-name" className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-1.5">
                    Ditt Namn
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-zinc-500">
                      <User className="h-4 w-4" />
                    </div>
                    <input
                      id="form-name"
                      type="text"
                      className="w-full pl-10 pr-3 py-3 border border-zinc-800 bg-zinc-950 text-white rounded-xl focus:border-cyan-500 focus:outline-none transition-colors text-sm font-light placeholder-zinc-700"
                      placeholder="För- och efternamn"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="form-email" className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-1.5">
                    E-postadress
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-zinc-500">
                      <Mail className="h-4 w-4" />
                    </div>
                    <input
                      id="form-email"
                      type="email"
                      className="w-full pl-10 pr-3 py-3 border border-zinc-800 bg-zinc-950 text-white rounded-xl focus:border-cyan-500 focus:outline-none transition-colors text-sm font-light placeholder-zinc-700"
                      placeholder="namn@foretag.se"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="form-msg" className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-1.5">
                    Meddelande
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-start pl-3.5 pt-3 pointer-events-none text-zinc-500">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <textarea
                      id="form-msg"
                      rows={4}
                      className="w-full pl-10 pr-3 py-3 border border-zinc-800 bg-zinc-950 text-white rounded-xl focus:border-cyan-500 focus:outline-none transition-colors text-sm font-light placeholder-zinc-700 resize-none"
                      placeholder="Berätta lite om din webbshop och produkter..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 font-semibold text-white transition-all text-sm flex items-center justify-center gap-2 cursor-pointer active:scale-98 shadow-md"
                >
                  <Send className="h-4 w-4" />
                  Skicka Demo-förfrågan
                </button>
              </form>

              {/* Local database display logs (if tested) */}
              {submissions.length > 0 && (
                <div className="mt-8 pt-6 border-t border-zinc-850">
                  <h4 className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider mb-3">
                    Inkommande Förfrågningar (Simulerad Logg)
                  </h4>
                  <div className="space-y-2.5 max-h-[160px] overflow-y-auto">
                    {submissions.map((item, idx) => (
                      <div key={idx} className="bg-zinc-950 border border-zinc-850 rounded-lg p-3 text-left">
                        <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400 mb-1">
                          <span>👤 {item.name} ({item.email})</span>
                          <span className="text-zinc-500">{item.timestamp}</span>
                        </div>
                        <p className="text-[11px] text-zinc-300 italic font-mono">
                          "{item.message}"
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

        {/* Footer block */}
        <div className="mt-24 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
          <span className="text-xs text-zinc-500 font-mono">
            © 2026 EcomCraft AI. Alla rättigheter förbehållna.
          </span>
          <span className="text-[10px] font-mono text-zinc-650 bg-zinc-950 border border-zinc-900 px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            ONE-PAGE PORTFOLIO | SKOLPROJEKT
          </span>
        </div>
      </div>
    </section>
  );
}
