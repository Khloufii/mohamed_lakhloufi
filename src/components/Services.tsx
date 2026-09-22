import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SERVICES } from '../data/portfolioData';
import { LayoutDashboard, Cpu, Briefcase, ShoppingBag, CheckCircle, ArrowUpRight } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  LayoutDashboard: <LayoutDashboard className="w-6 h-6 text-emerald-400" />,
  Cpu: <Cpu className="w-6 h-6 text-cyan-400" />,
  Briefcase: <Briefcase className="w-6 h-6 text-amber-400" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6 text-emerald-400" />,
};

export const Services: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="services" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-mono font-medium mb-3">
            <span>{t.services.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            {t.services.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group relative rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 p-7 lg:p-8 transition-all hover:bg-slate-900/90 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {iconMap[service.iconName] || <LayoutDashboard className="w-6 h-6 text-emerald-400" />}
                  </div>
                  <span className="font-mono text-xs text-slate-400">0{idx + 1}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {service.title[language]}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {service.description[language]}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                  {service.highlights[language].map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 group-hover:text-emerald-300 transition-colors"
                >
                  <span>{language === 'fr' ? 'Demander une estimation' : 'Request an estimate'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
