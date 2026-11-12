import React, { useState } from 'react';
import { Utensils, Download, MessageCircle, ChevronRight, FileText } from 'lucide-react';
import { MENU_CHAPTERS, WHATSAPP_NUMBER } from '../data/menuData';

export default function MenuChapters() {
  const [activeTab, setActiveTab] = useState(MENU_CHAPTERS[0].id);
  const activeChapter = MENU_CHAPTERS.find(c => c.id === activeTab) || MENU_CHAPTERS[0];

  return (
    <section id="menu" className="py-20 lg:py-28 bg-ember-900/20 relative border-t border-ember-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
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
            <a
              href="/menu_delicia_surena.pdf"
              download="Menu_Restaurante_Delicia_Surena.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-ember-900/70 hover:bg-ember-800 text-cream-100 border border-ember-700/70 hover:border-amber-500 px-5 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all shadow-glow hover:scale-105"
            >
              <FileText className="w-4 h-4 text-amber-500" />
              <span>Descargar Menú Oficial (PDF)</span>
              <Download className="w-3.5 h-3.5 text-cream-400" />
            </a>
          </div>
        </div>

        {/* Chapters Navigation Tabs (6 Chapters) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-10">
          {MENU_CHAPTERS.map((chapter) => {
            const isActive = chapter.id === activeTab;
            return (
              <button
                key={chapter.id}
                onClick={() => setActiveTab(chapter.id)}
                className={`text-left p-3.5 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? 'bg-ember-900/90 border-ember-500 shadow-glow text-cream-100 scale-[1.02]'
                    : 'bg-ember-950/60 border-ember-800/40 text-cream-400 hover:border-ember-700 hover:text-cream-200'
                }`}
              >
                <span className={`text-[10px] font-bold tracking-wider uppercase block mb-1 ${
                  isActive ? 'text-amber-400' : 'text-cream-500'
                }`}>
                  Capítulo {chapter.id}
                </span>
                <span className="font-serif font-bold text-sm leading-snug line-clamp-2">
                  {chapter.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Chapter Container */}
        <div className="bg-ember-950/80 rounded-3xl border border-ember-800/50 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Header of Active Chapter */}
          <div className="border-b border-ember-800/50 pb-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-amber-500 tracking-wider">CAPÍTULO {activeChapter.id} / 06</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-100 mt-1">
                {activeChapter.name}
              </h3>
              <p className="text-sm text-cream-400 mt-1">{activeChapter.tagline}</p>
            </div>
            
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Delicia%20Sure%C3%B1a%2C%20quisiera%20hacer%20un%20pedido%20de%20la%20secci%C3%B3n%20${encodeURIComponent(activeChapter.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ember-800/60 hover:bg-ember-700 text-cream-100 text-xs font-bold uppercase tracking-wider py-3 px-5 rounded-full border border-ember-600/50 transition-colors self-start sm:self-auto"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Pedir esta sección</span>
            </a>
          </div>

          {/* Dishes list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {activeChapter.items.map((item, idx) => (
              <div 
                key={idx}
                className="group flex flex-col justify-between p-4 rounded-2xl bg-ember-900/20 hover:bg-ember-900/40 border border-ember-800/30 hover:border-ember-700/60 transition-all duration-200"
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
                    Hecho al momento
                  </span>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Delicia%20Sure%C3%B1a%2C%20quisiera%20ordenar%20${encodeURIComponent(item.name)}%20(${item.mesaPrice || ''})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-amber-500 hover:text-amber-400 transition-colors"
                  >
                    <span>Pedir por WhatsApp</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
