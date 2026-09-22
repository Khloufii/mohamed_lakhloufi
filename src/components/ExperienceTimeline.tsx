import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { EXPERIENCES, EDUCATION } from '../data/portfolioData';
import { Briefcase, GraduationCap, CheckCircle2, Calendar, Building2, Languages, Sparkles } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-mono font-medium mb-3">
            <span>{t.experience.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            {t.experience.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {t.experience.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Main Experience Column (Left 8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-6">
              {EXPERIENCES.map((exp, idx) => (
                <div
                  key={exp.id}
                  id={`exp-card-${exp.id}`}
                  className="relative p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all text-left group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center flex-shrink-0 group-hover:border-emerald-500/40 transition-colors">
                        <Briefcase className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                          {exp.role[language]}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                          <span className="text-emerald-400 font-semibold">{exp.company}</span>
                          <span>•</span>
                          <span className="font-mono text-slate-400">{exp.type[language]}</span>
                        </div>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300 self-start sm:self-auto">
                      <Calendar className="w-3 h-3 text-emerald-400" />
                      <span>{exp.period[language]}</span>
                    </div>
                  </div>

                  {/* Bullet description */}
                  <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed pl-1">
                    {exp.description[language].map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack badges */}
                  <div className="mt-5 pt-4 border-t border-slate-800/60 flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education, Qualities & Languages Sidebar (Right 4 cols) */}
          <div className="lg:col-span-4 space-y-6 text-left">
            {/* Education Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center gap-2 mb-5">
                <GraduationCap className="w-5 h-5 text-emerald-400" />
                <h3 className="text-base font-bold text-white">
                  {t.experience.educationTitle}
                </h3>
              </div>

              <div className="space-y-4">
                {EDUCATION.map((edu) => (
                  <div key={edu.id} className="pb-4 border-b border-slate-800/60 last:border-0 last:pb-0">
                    <span className="inline-block px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-emerald-400 mb-1.5">
                      {edu.year}
                    </span>
                    <h4 className="text-xs sm:text-sm font-semibold text-white leading-snug mb-1">
                      {edu.degree[language]}
                    </h4>
                    <p className="text-xs text-slate-400 font-mono">
                      {edu.institution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Qualities */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-bold text-white">
                  {t.experience.strengthsTitle}
                </h3>
              </div>

              <div className="space-y-2.5">
                {t.experience.strengths.map((str, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>{str}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center gap-2 mb-4">
                <Languages className="w-5 h-5 text-cyan-400" />
                <h3 className="text-base font-bold text-white">
                  {t.experience.languagesTitle}
                </h3>
              </div>

              <div className="space-y-3">
                {t.experience.languages.map((lang, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-white">{lang.name}</span>
                    <span className="text-slate-400 font-mono">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
