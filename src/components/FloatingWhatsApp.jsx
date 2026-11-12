import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MSG } from '../data/menuData';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="relative hidden sm:flex items-center gap-2 bg-ember-900 border border-ember-700/80 text-cream-100 text-xs font-medium py-2 px-3.5 rounded-2xl shadow-xl animate-fade-in max-w-xs">
          <span>¿Antojo de un buen cuy o sancocho? <strong>¡Escríbenos y pide aquí!</strong></span>
          <button 
            onClick={() => setShowTooltip(false)}
            className="text-cream-400 hover:text-white p-0.5"
            aria-label="Cerrar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MSG)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-glow transition-all duration-300 hover:scale-110 active:scale-95 group relative"
        aria-label="Escribir por WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-ember-950 animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-ember-950"></span>
        <MessageCircle className="w-7 h-7 fill-white/10 group-hover:rotate-12 transition-transform" />
      </a>
    </div>
  );
}
