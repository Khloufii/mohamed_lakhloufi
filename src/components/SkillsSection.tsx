import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SKILLS } from '../data/portfolioData';
import { Code, Server, Database, Sparkles, Wrench } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const { t } = useLanguage();

  const categories = [
    {
      id: 'frontend',
      title: t.skills.categories.frontend,
      icon: <Code className="w-5 h-5 text-emerald-400" />,
      skills: SKILLS.frontend,
    },
    {
      id: 'backend',
      title: t.skills.categories.backend,
      icon: <Server className="w-5 h-5 text-cyan-400" />,
      skills: SKILLS.backend,
    },
    {
      id: 'database',
      title: t.skills.categories.database,
      icon: <Database className="w-5 h-5 text-amber-400" />,
      skills: SKILLS.database,
    },
    {
      id: 'ai',
      title: t.skills.categories.ai,
      icon: <Sparkles className="w-5 h-5 text-indigo-400" />,
      skills: SKILLS.aiTools,
    },
    {
      id: 'tools',
      title: t.skills.categories.tools,
      icon: <Wrench className="w-5 h-5 text-teal-400" />,
      skills: SKILLS.toolsAndMethods,
    },
  ];

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-mono font-medium mb-3">
            <span>{t.skills.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            {t.skills.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              id={`skills-category-${cat.id}`}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                    {cat.icon}
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {cat.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="font-medium text-slate-200">{skill.name}</span>
                        <span className="font-mono text-emerald-400">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800/80">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-700"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
