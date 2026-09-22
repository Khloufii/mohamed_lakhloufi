import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MessageSquare, Send, CheckCircle, Clock, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: t.contact.form.projectTypes[0],
    budget: t.contact.form.budgetOptions[1],
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg(language === 'fr' ? 'Veuillez remplir tous les champs obligatoires.' : 'Please fill in all required fields.');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const generateMailtoLink = () => {
    const subject = encodeURIComponent(`[Demande Portfolio] ${formData.projectType} - ${formData.name}`);
    const body = encodeURIComponent(
      `Nom : ${formData.name}\nEmail : ${formData.email}\nType de projet : ${formData.projectType}\nBudget/Délai : ${formData.budget}\n\nMessage :\n${formData.message}`
    );
    return `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const generateWhatsAppDirectLink = () => {
    const text = encodeURIComponent(
      language === 'fr'
        ? `Bonjour Mohamed,\n\nJe vous contacte suite à mon message sur votre portfolio.\n- Nom : ${formData.name || 'Visiteur'}\n- Projet : ${formData.projectType}\n- Message : ${formData.message || 'Demande de renseignement'}`
        : `Hello Mohamed,\n\nI am contacting you from your portfolio.\n- Name: ${formData.name || 'Visitor'}\n- Project: ${formData.projectType}\n- Message: ${formData.message || 'Project inquiry'}`
    );
    return `https://wa.me/${PERSONAL_INFO.whatsappRaw}?text=${text}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-mono font-medium mb-3">
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            {t.contact.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Direct Coordinates & Guarantees (Left 5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="p-7 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl space-y-6">
              <h3 className="text-lg font-bold text-white mb-2">
                {t.contact.directContactTitle}
              </h3>

              {/* Phone Direct */}
              <a
                id="contact-phone-link"
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-emerald-500/40 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block mb-0.5">
                    {t.contact.phoneLabel}
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    {PERSONAL_INFO.phone}
                  </span>
                </div>
              </a>

              {/* Email Direct */}
              <a
                id="contact-email-link"
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-emerald-500/40 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-xs font-mono text-slate-400 block mb-0.5">
                    {t.contact.emailLabel}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white truncate block group-hover:text-cyan-400 transition-colors">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </a>

              {/* WhatsApp Quick Direct */}
              <a
                id="contact-whatsapp-direct-link"
                href={`https://wa.me/${PERSONAL_INFO.whatsappRaw}?text=${encodeURIComponent(
                  language === 'fr'
                    ? "Bonjour Mohamed, j'aimerais échanger avec vous au sujet d'un nouveau projet."
                    : "Hello Mohamed, I would like to discuss a new project with you."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 hover:bg-emerald-950/30 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform flex-shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-emerald-400 block mb-0.5">
                    WhatsApp
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-white group-hover:text-emerald-300 transition-colors">
                    +212 6 50 36 42 76
                  </span>
                </div>
              </a>

              {/* Commitment Badges */}
              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{t.contact.responseTime}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span>
                    {language === 'fr'
                      ? 'Confidentialité & devis gratuit sans engagement'
                      : 'Non-disclosure & free quotation without commitment'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Integrated Form (Right 7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl text-left">
              {isSubmitted ? (
                <div className="py-10 text-center space-y-5">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {t.contact.form.successTitle}
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto">
                      {t.contact.form.successMsg}
                    </p>
                  </div>

                  {/* Optional immediate WhatsApp action */}
                  <div className="pt-6 border-t border-slate-800 max-w-md mx-auto space-y-3">
                    <p className="text-xs text-slate-400">
                      {t.contact.form.whatsappAlt}
                    </p>
                    <a
                      href={generateWhatsAppDirectLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm shadow-md shadow-emerald-500/20 transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{t.contact.form.whatsappAction}</span>
                    </a>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        projectType: t.contact.form.projectTypes[0],
                        budget: t.contact.form.budgetOptions[1],
                        message: '',
                      });
                    }}
                    className="text-xs text-slate-400 hover:text-white underline pt-2"
                  >
                    {language === 'fr' ? 'Envoyer un autre message' : 'Send another inquiry'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-1.5">
                        {t.contact.form.nameLabel} <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.contact.form.namePlaceholder}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm text-slate-100 placeholder:text-slate-400 outline-none transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-1.5">
                        {t.contact.form.emailLabel} <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.contact.form.emailPlaceholder}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm text-slate-100 placeholder:text-slate-400 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Project Type */}
                    <div>
                      <label htmlFor="contact-project-type" className="block text-xs font-mono text-slate-300 mb-1.5">
                        {t.contact.form.projectTypeLabel}
                      </label>
                      <select
                        id="contact-project-type"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm text-slate-100 outline-none transition-all"
                      >
                        {t.contact.form.projectTypes.map((type, idx) => (
                          <option key={idx} value={type} className="bg-slate-900 text-slate-100">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Budget / Timeline */}
                    <div>
                      <label htmlFor="contact-budget" className="block text-xs font-mono text-slate-300 mb-1.5">
                        {t.contact.form.budgetLabel}
                      </label>
                      <select
                        id="contact-budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm text-slate-100 outline-none transition-all"
                      >
                        {t.contact.form.budgetOptions.map((opt, idx) => (
                          <option key={idx} value={opt} className="bg-slate-900 text-slate-100">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-1.5">
                      {t.contact.form.messageLabel} <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.form.messagePlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm text-slate-100 placeholder:text-slate-400 outline-none transition-all resize-y"
                    />
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm shadow-lg shadow-emerald-500/25 transition-all disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <span>{t.contact.form.sending}</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>{t.contact.form.submitBtn}</span>
                        </>
                      )}
                    </button>

                    <a
                      id="contact-mailto-fallback"
                      href={generateMailtoLink()}
                      className="w-full sm:w-auto px-4 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-mono text-center transition-colors"
                      title="Ouvrir dans votre client mail (Outlook, Gmail, etc.)"
                    >
                      <span>Ouvrir client email ↗</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
