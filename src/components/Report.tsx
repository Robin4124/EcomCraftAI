import React from "react";
import { Terminal, BookOpen, AlertCircle, Award, Compass, HelpCircle } from "lucide-react";

export default function Report() {
  const reportItems = [
    {
      icon: <Compass className="h-5 w-5 text-violet-400" />,
      question: "Vilka AI-verktyg använde du och till vad?",
      answer: "Jag använde först ChatGPT för att spåna fram idéer och skapa en välformulerad prompt, vilken jag sedan matade in i Google AI Studio för att programmera hela landningssidan med vår AI. För det visuella materialet på smyckena använde jag det inbygda Generative AI-verktyget ('Nano Banana') för att skapa realistiska före- och efter-bilder av högsta klass. Jag använde Adobe Firefly för att generera den lyxiga och professionella videon av ringen, vilken jag sedan lade in direkt i TikTok-videokampanjen för att få en extremt autentisk studiokänsla. Ljudfilen och voiceover-rösten skapades med hjälp av 11 Labs för att ge en mjuk och trovärdig svensk ton."
    },
    {
      icon: <Award className="h-5 w-5 text-cyan-400" />,
      question: "Vad blev mest lyckat?",
      answer: "Bildgenereringen och den grafiska profilen blev extremt lyckad. Det visar verkligen hur kraftfullt AI är för att få ett litet företag att se ut som ett miljardbolag."
    },
    {
      icon: <HelpCircle className="h-5 w-5 text-yellow-500" />,
      question: "Vad behövde du förbättra själv?",
      answer: "AI-texterna blev lite väl stela och amerikanska i stilen först. Jag fick gå in manuellt och skriva om dem så att de passade en svensk målgrupp och kändes mer naturliga."
    },
    {
      icon: <BookOpen className="h-5 w-5 text-green-400" />,
      question: "Vilken del krävde mest eget tänkande?",
      answer: "Att få till helhetskonceptet. AI kan generera delar, men att sy ihop målgrupp, problembeskrivning, tjänster och kundcase till en logisk och säljande helhet krävde mycket planering och mänskligt öga."
    },
    {
      icon: <AlertCircle className="h-5 w-5 text-rose-500" />,
      question: "Vad blev dåligt först, och hur förbättrade du det?",
      answer: "Ljudet och musiken skar sig totalt i det första utkastet eftersom röstprompterna gav en alldeles för robotaktig ton. Jag fick förfina mina prompts, lägga till känslouttryck i texten och sänka tempot för att få en mjuk och professionell voiceover."
    }
  ];

  return (
    <section id="report" className="relative py-24 sm:py-32 bg-zinc-950/70 border-t border-zinc-900">
      <div className="absolute top-2/3 right-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-violet-500/5 blur-[90px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 border border-zinc-800 px-3.5 py-1 text-xs font-mono text-zinc-400">
            <Terminal className="h-3.5 w-3.5 text-violet-400" />
            Metod- & designredovisning
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mt-4 mb-4">
            Rapport: Så här gjorde jag (Så använde jag AI)
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-light max-w-xl mx-auto">
            Här förklarar jag mitt skapande arbetsflöde och hur samspelet mellan människa och AI skapade portfolioresultatet.
          </p>
        </div>

        {/* Content Report Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {reportItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-zinc-850 bg-gradient-to-r from-[#121214]/40 to-[#121214]/20 p-6 sm:p-8 hover:border-zinc-700 hover:bg-[#121214]/60 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                
                {/* Icon wrapper */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-950 border border-zinc-850 group-hover:border-zinc-750 transition-colors">
                  {item.icon}
                </div>

                <div className="space-y-2 flex-1">
                  {/* Question */}
                  <span className="text-[10px] font-mono text-cyan-400 font-semibold uppercase tracking-widest block">
                    FRÅGA {idx + 1}
                  </span>
                  <h3 className="font-display text-base sm:text-lg font-bold text-white tracking-tight">
                    {item.question}
                  </h3>
                  
                  {/* Detailed answer block */}
                  <div className="pt-2 text-sm text-zinc-300 font-light leading-relaxed">
                    {item.answer}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
