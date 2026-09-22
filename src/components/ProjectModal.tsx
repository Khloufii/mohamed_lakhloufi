import React, { useEffect } from 'react';
import { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { PERSONAL_INFO } from '../data/portfolioData';
import { X, CheckCircle2, TrendingUp, MessageSquare, Cpu, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { language, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const whatsappMessage = encodeURIComponent(
    language === 'fr'
      ? `Bonjour Mohamed, j'ai vu votre projet "${project.title.fr}" sur votre portfolio et j'aimerais réaliser un projet similaire.`
      : `Hello Mohamed, I saw your project "${project.title.en}" on your portfolio and would like to build something similar.`
  );

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        id="project-modal-dialog"
        className="relative w-full max-w-3xl rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl shadow-black/80 my-8 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header with Gradient */}
        <div className={`p-6 sm:p-8 bg-gradient-to-r ${project.gradient} border-b border-slate-800 relative`}>
          <button
            id="modal-close-btn"
            onClick={onClose}
            aria-label="Fermer"
            className="absolute top-4 right-4 p-2 rounded-xl bg-slate-950/80 hover:bg-slate-950 text-slate-300 hover:text-white border border-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-md text-xs font-mono font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              {project.badge[language]}
            </span>
            <span className="text-xs uppercase tracking-wider font-mono text-slate-400">
              {project.category}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
            {project.title[language]}
          </h3>
          <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
            {project.subtitle[language]}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          {/* Main Description */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400 mb-2">
              {language === 'fr' ? 'Présentation du projet' : 'Project Overview'}
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.description[language]}
            </p>
          </div>

          {/* Full Details & Architecture */}
          {project.fullDetails && (
            <div>
              <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400 mb-3">
                {language === 'fr' ? 'Architecture & Réalisations' : 'Architecture & Modules Built'}
              </h4>
              <ul className="space-y-2.5">
                {project.fullDetails[language].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Features */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400 mb-3">
              {t.projects.liveFeatures}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures[language].map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs sm:text-sm text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics */}
          {project.metrics && (
            <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex items-center gap-3.5">
              <TrendingUp className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 block">
                  {t.projects.metricsLabel}
                </span>
                <span className="text-sm font-semibold text-emerald-200">
                  {project.metrics[language]}
                </span>
              </div>
            </div>
          )}

          {/* Technologies */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400 mb-3">
              {t.projects.techStack}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer / Actions */}
        <div className="p-4 sm:p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-400 text-center sm:text-left">
            {language === 'fr'
              ? 'Besoin d’une solution similaire pour votre activité ?'
              : 'Need a similar solution for your business?'}
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              id="modal-whatsapp-cta"
              href={`https://wa.me/${PERSONAL_INFO.whatsappRaw}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs sm:text-sm shadow-md shadow-emerald-500/20 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{language === 'fr' ? 'Discuter du projet sur WhatsApp' : 'Discuss on WhatsApp'}</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs sm:text-sm font-medium transition-colors"
            >
              {language === 'fr' ? 'Fermer' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
