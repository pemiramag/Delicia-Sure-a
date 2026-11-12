import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, Download, MessageCircle, ChevronRight, FileText } from 'lucide-react';
import { MENU_CHAPTERS, WHATSAPP_NUMBER } from '../data/menuData';

const framerEase = [0.22, 1, 0.36, 1];

export default function MenuChapters() {
  const [activeTab, setActiveTab] = useState(MENU_CHAPTERS[0].id);
  const activeChapter = MENU_CHAPTERS.find(c => c.id === activeTab) || MENU_CHAPTERS[0];

  return (
    <section id="menu" className="py-20 lg:py-28 bg-ember-900/20 relative border-t border-ember-900/50 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: framerEase }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-gold-500 text-xs font-bold uppercase tracking-widest mb-2">
              <Utensils className="w-4 h-4" />
              <span>Carta y Menú Oficial</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-cream-100 tracking-tight">
              Sabor y Tradición en Cada Plato.
            </h2>
            <p className="mt-3 text-cream-400 text-sm sm:text-base">
              Aquí cocinamos con ingredientes frescos, a fuego lento y con el sazón de la abuela. Transparencia, calidad y calor de hogar.
            </p>
          </div>

          {/* Download Official PDF Button */}
          <div>
            <motion.a
              href="/menu_delicia_surena.pdf"
              download="Menu_Restaurante_Delicia_Surena.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(217, 107, 30, 0.4)" }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2.5 bg-ember-900/70 hover:bg-ember-800 text-cream-100 border border-ember-700/70 hover:border-amber-500 px-5 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-colors shadow-glow"
            >
              <FileText className="w-4 h-4 text-amber-500" />
              <span>Descargar Menú Oficial (PDF)</span>
              <Download className="w-3.5 h-3.5 text-cream-400" />
            </motion.a>
          </div>
        </motion.div>

        {/* Chapters Navigation Tabs (6 Chapters) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-10">
          {MENU_CHAPTERS.map((chapter) => {
            const isActive = chapter.id === activeTab;
            return (
              <motion.button
                key={chapter.id}
                onClick={() => setActiveTab(chapter.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`relative text-left p-3.5 rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isActive
                    ? 'border-ember-500 shadow-glow text-cream-100'
                    : 'bg-ember-950/60 border-ember-800/40 text-cream-400 hover:border-ember-700 hover:text-cream-200'
                }`}
              >
                {/* Framer Animated Active Tab Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeChapterGlow"
                    className="absolute inset-0 bg-gradient-to-br from-ember-900/90 to-ember-950/90 -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                
                <span className={`text-[10px] font-bold tracking-wider uppercase block mb-1 ${
                  isActive ? 'text-amber-400' : 'text-cream-500'
                }`}>
                  Capítulo {chapter.id}
                </span>
                <span className="font-serif font-bold text-sm leading-snug line-clamp-2">
                  {chapter.name}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Active Chapter Container with Smooth Transition */}
        <div className="bg-ember-950/80 rounded-3xl border border-ember-800/50 p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeChapter.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: framerEase }}
            >
              {/* Header of Active Chapter */}
              <div className="border-b border-ember-800/50 pb-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-amber-500 tracking-wider font-semibold">CAPÍTULO {activeChapter.id} / 06</span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-100 mt-1">
                    {activeChapter.name}
                  </h3>
                  <p className="text-sm text-cream-400 mt-1">{activeChapter.tagline}</p>
                </div>
                
                <motion.a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Delicia%20Sure%C3%B1a%2C%20quisiera%20hacer%20un%20pedido%20de%20la%20secci%C3%B3n%20${encodeURIComponent(activeChapter.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-ember-800/60 hover:bg-ember-700 text-cream-100 text-xs font-bold uppercase tracking-wider py-3 px-5 rounded-full border border-ember-600/50 transition-colors self-start sm:self-auto shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Pedir esta sección</span>
                </motion.a>
              </div>

              {/* Dishes list */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {activeChapter.items.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    className="group flex flex-col justify-between p-4 rounded-2xl bg-ember-900/20 hover:bg-ember-900/40 border border-ember-800/30 hover:border-ember-700/60 transition-colors duration-200"
                  >
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                        <h4 className="font-serif font-bold text-base sm:text-lg text-cream-100 group-hover:text-amber-400 transition-colors">
                          {item.name}
                        </h4>
                        
                        {/* Prices: Mesa vs Para Llevar */}
                        <div className="flex items-center gap-2 shrink-0">
                          {item.mesaPrice && (
                            <span className="font-mono text-xs font-bold text-gold-400 bg-ember-950/80 px-2.5 py-1 rounded-lg border border-ember-800/60">
                              {item.mesaPrice} {item.llevarPrice ? '(Mesa)' : ''}
                            </span>
                          )}
                          {item.llevarPrice && item.llevarPrice !== item.mesaPrice && (
                            <span className="font-mono text-xs font-bold text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/30">
                              {item.llevarPrice} (Llevar)
                            </span>
                          )}
                        </div>
                      </div>

                      <p className="mt-2 text-xs sm:text-sm text-cream-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-ember-800/30 flex items-center justify-between">
                      <span className="text-[11px] text-cream-500 font-medium">
                        Hecho al momento en leña
                      </span>
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Delicia%20Sure%C3%B1a%2C%20quisiera%20ordenar%20${encodeURIComponent(item.name)}%20(${item.mesaPrice || ''})`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-amber-500 hover:text-amber-400 transition-colors"
                      >
                        <span>Pedir por WhatsApp</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
