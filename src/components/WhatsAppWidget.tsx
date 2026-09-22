import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MessageSquare, X, Send, Sparkles, CheckCheck } from 'lucide-react';

export const WhatsAppWidget: React.FC = () => {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const handleSend = (textToSend?: string) => {
    const finalMsg = textToSend || customMsg || (
      language === 'fr'
        ? "Bonjour Mohamed, j'aimerais échanger avec vous sur un projet web."
        : "Hello Mohamed, I would like to discuss a web project with you."
    );
    const url = `https://wa.me/${PERSONAL_INFO.whatsappRaw}?text=${encodeURIComponent(finalMsg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setCustomMsg('');
    setIsOpen(false);
  };

  return (
    <div id="whatsapp-floating-widget" className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover Window */}
      {isOpen && (
        <div
          id="whatsapp-chat-popover"
          className="mb-3 w-[320px] sm:w-[350px] rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl shadow-black/80 overflow-hidden text-left animate-fade-in"
        >
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-emerald-600 to-teal-700 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-slate-950 border-2 border-emerald-400 flex items-center justify-center font-bold text-emerald-400 font-mono">
                  ML
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-slate-950 rounded-full"></span>
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">
                  {t.whatsappWidget.headerTitle}
                </h4>
                <span className="text-[11px] text-emerald-100/90 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-ping"></span>
                  {t.whatsappWidget.onlineStatus}
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Fermer"
              className="p-1 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Conversation Bubble */}
          <div className="p-4 bg-slate-950/60 space-y-3">
            <div className="flex items-start gap-2.5">
              <div className="p-3 rounded-2xl rounded-tl-none bg-slate-900 border border-slate-800 text-xs text-slate-200 leading-relaxed shadow-sm">
                <p>{t.whatsappWidget.greeting}</p>
                <span className="text-[10px] text-slate-400 font-mono flex items-center justify-end gap-1 mt-1">
                  <span>En direct</span>
                  <CheckCheck className="w-3 h-3 text-emerald-400" />
                </span>
              </div>
            </div>

            {/* Quick Topic Chips */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] uppercase tracking-wider font-mono text-slate-400 block pl-1">
                {t.whatsappWidget.quickOptionsLabel}
              </span>
              <div className="flex flex-col gap-1.5">
                {t.whatsappWidget.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(opt)}
                    className="text-left px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-emerald-500/10 hover:border-emerald-500/40 border border-slate-800 text-xs text-slate-300 hover:text-emerald-300 transition-all flex items-center justify-between group"
                  >
                    <span>{opt}</span>
                    <Send className="w-3 h-3 opacity-0 group-hover:opacity-100 text-emerald-400 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
            <input
              type="text"
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSend();
              }}
              placeholder={t.whatsappWidget.inputPlaceholder}
              className="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 focus:border-emerald-500 text-xs text-slate-100 outline-none placeholder:text-slate-400"
            />
            <button
              id="whatsapp-send-custom-btn"
              onClick={() => handleSend()}
              className="p-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-colors"
              title="Envoyer sur WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        id="whatsapp-floating-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Discuter sur WhatsApp"
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all"
      >
        {/* Glow effect */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/30 blur-sm -z-10 group-hover:bg-emerald-400/50 transition-all animate-pulse"></span>

        {/* WhatsApp Icon (SVG styled or Lucide message) */}
        <div className="w-5 h-5 flex items-center justify-center">
          <svg
            className="w-5 h-5 fill-current text-slate-950"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </div>

        <span className="text-xs sm:text-sm tracking-tight hidden sm:inline-block">
          WhatsApp
        </span>

        {/* Unread badge dot */}
        <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping"></span>
      </button>
    </div>
  );
};
