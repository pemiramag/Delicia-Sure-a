import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MSG } from '../data/menuData';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Tooltip speech bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.85, x: 10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.85, x: 10 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="relative hidden sm:flex items-center gap-2 bg-ember-900 border border-ember-700/80 text-cream-100 text-xs font-medium py-2 px-3.5 rounded-2xl shadow-xl max-w-xs backdrop-blur-md"
          >
            <span>¿Antojo de un buen cuy o sancocho? <strong>¡Escríbenos y pide aquí!</strong></span>
            <button 
              onClick={() => setShowTooltip(false)}
              className="text-cream-400 hover:text-white p-0.5 ml-1 transition-colors"
              aria-label="Cerrar aviso"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MSG)}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.5 }}
        whileHover={{ scale: 1.12, boxShadow: "0 0 30px rgba(16, 185, 129, 0.7)" }}
        whileTap={{ scale: 0.92 }}
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-glow transition-colors group relative"
        aria-label="Escribir por WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-ember-950 animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-ember-950"></span>
        <MessageCircle className="w-7 h-7 fill-white/10 group-hover:rotate-12 transition-transform" />
      </motion.a>
    </div>
  );
}
