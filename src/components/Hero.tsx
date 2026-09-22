import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowRight, MessageSquare, Mail, Terminal, CheckCircle2, Sparkles, Layers, Cpu, Code2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-emerald-500/15 via-cyan-500/10 to-transparent blur-3xl pointer-events-none rounded-full -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 blur-3xl pointer-events-none rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Badge */}
            <div
              id="hero-availability-badge"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium mb-6 shadow-sm shadow-emerald-500/10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{t.hero.availableBadge}</span>
            </div>

            {/* Title & Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight">
              <span className="text-slate-400 text-2xl sm:text-3xl block font-normal mb-1">
                {t.hero.greeting}
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-sm sm:text-base font-semibold mb-6">
              <Code2 className="w-4 h-4" />
              <span>{PERSONAL_INFO.title[language]}</span>
            </div>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
              {t.hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-10">
              <a
                id="hero-cta-projects"
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm sm:text-base shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{t.hero.ctaProjects}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                id="hero-cta-whatsapp"
                href={`https://wa.me/${PERSONAL_INFO.whatsappRaw}?text=${encodeURIComponent(
                  language === 'fr'
                    ? "Bonjour Mohamed, j'ai découvert votre portfolio et j'aimerais échanger sur un projet avec vous."
                    : "Hello Mohamed, I discovered your portfolio and would like to discuss a project with you."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-emerald-500/30 font-medium text-sm sm:text-base transition-all hover:border-emerald-500/60"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>{t.hero.ctaWhatsApp}</span>
              </a>

              <a
                id="hero-cta-contact"
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 border border-slate-800 font-medium text-sm sm:text-base transition-all"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>{t.hero.ctaContact}</span>
              </a>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-4 border-t border-slate-800/80">
              {PERSONAL_INFO.stats.map((stat, i) => (
                <div
                  key={i}
                  id={`stat-card-${i}`}
                  className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/60 flex flex-col"
                >
                  <span className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-400 mt-0.5">
                    {stat.label[language]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual (Interactive Code & Feature Card) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-5 shadow-2xl shadow-black/40">
              {/* Card Header (Mac style terminal) */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span>mohamed.config.ts</span>
                </div>
                <span className="text-xs text-emerald-400 font-mono font-medium">live</span>
              </div>

              {/* Code Snippet Box */}
              <div className="font-mono text-xs leading-relaxed text-slate-300 bg-slate-950/80 rounded-xl p-4 border border-slate-800/60 overflow-x-auto space-y-1.5">
                <p>
                  <span className="text-cyan-400">const</span>{' '}
                  <span className="text-emerald-400">developer</span> = &#123;
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">name:</span>{' '}
                  <span className="text-amber-300">"{PERSONAL_INFO.name}"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">role:</span>{' '}
                  <span className="text-amber-300">"Full Stack & SaaS Builder"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">specialties:</span> [
                </p>
                <p className="pl-8 text-emerald-300">
                  "SaaS & Auto-Invoicing",
                </p>
                <p className="pl-8 text-cyan-300">
                  "AI Phone Receptionist & Voice",
                </p>
                <p className="pl-8 text-amber-300">
                  "Professional Portals (Law/Med/Acc)",
                </p>
                <p className="pl-8 text-indigo-300">
                  "High-Speed E-Commerce",
                </p>
                <p className="pl-4">],</p>
                <p className="pl-4">
                  <span className="text-slate-400">stack:</span> [
                  <span className="text-teal-300">"React"</span>,{' '}
                  <span className="text-teal-300">"Node"</span>,{' '}
                  <span className="text-teal-300">"Laravel"</span>,{' '}
                  <span className="text-teal-300">"Python"</span>,{' '}
                  <span className="text-teal-300">"MySQL"</span>
                  ],
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">status:</span>{' '}
                  <span className="text-emerald-400">"Ready for new challenges"</span>
                </p>
                <p>&#125;;</p>
              </div>

              {/* Floating Feature Highlight Pills */}
              <div className="mt-4 pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-2.5">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-200 font-medium">SaaS & Facturation</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs">
                  <Sparkles className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-200 font-medium">Standard Vocal IA</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs">
                  <Layers className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span className="text-slate-200 font-medium">Vitrines Métiers</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs">
                  <Cpu className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <span className="text-slate-200 font-medium">Boutiques E-Commerce</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Marquee / Badge Strip */}
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 text-center sm:text-left">
            {t.hero.trustedStack}
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {['React.js', 'Node.js', 'Laravel', 'Python', 'Tailwind CSS', 'TypeScript', 'MySQL', 'MongoDB', 'OpenAI & Gemini API', 'Stripe'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono hover:border-emerald-500/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
