import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, CheckCircle2, MessageSquare, Sparkles, Layers, ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs = [
    { id: 'all', label: t.projects.filters.all },
    { id: 'saas', label: t.projects.filters.saas },
    { id: 'vitrine', label: t.projects.filters.vitrine },
    { id: 'ecommerce', label: t.projects.filters.ecommerce },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      {/* Background flare */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 blur-3xl pointer-events-none rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-mono font-medium mb-3">
              <span>{t.projects.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
              {t.projects.title}
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              {t.projects.subtitle}
            </p>
          </div>

          {/* Filter Tabs */}
          <div
            id="projects-category-filter"
            className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl overflow-x-auto max-w-full"
          >
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                id={`filter-tab-${tab.id}`}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
                  activeCategory === tab.id
                    ? 'bg-emerald-500 text-slate-950 shadow-sm shadow-emerald-500/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="group relative rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/95 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl shadow-black/20"
            >
              {/* Top Accent Gradient Bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient}`} />

              <div className="p-6 sm:p-7 flex flex-col flex-1">
                {/* Header Tags */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {project.badge[language]}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider font-mono text-slate-400">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {project.title[language]}
                </h3>

                {/* Subtitle */}
                <p className="text-xs text-slate-400 font-medium mb-3">
                  {project.subtitle[language]}
                </p>

                {/* Description excerpt */}
                <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed mb-5">
                  {project.description[language]}
                </p>

                {/* Key Features bullet preview */}
                <div className="space-y-1.5 mb-6 pt-3 border-t border-slate-800/80 flex-1">
                  {project.keyFeatures[language].slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies List */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60 mb-5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 text-[11px] font-mono text-slate-400">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-3.5 bg-slate-950/60 border-t border-slate-800 flex items-center justify-between">
                <button
                  id={`view-details-${project.id}`}
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>{t.projects.viewDetails}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/${PERSONAL_INFO.whatsappRaw}?text=${encodeURIComponent(
                    language === 'fr'
                      ? `Bonjour Mohamed, je suis intéressé par votre projet "${project.title.fr}".`
                      : `Hello Mohamed, I am interested in your project "${project.title.en}".`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-colors"
                  title="WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
