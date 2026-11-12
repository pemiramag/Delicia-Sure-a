import React, { useState } from 'react';
import { Utensils, Download, MessageCircle, ChevronRight } from 'lucide-react';
import { MENU_CHAPTERS, WHATSAPP_NUMBER } from '../data/menuData';

export default function MenuChapters() {
  const [activeTab, setActiveTab] = useState(MENU_CHAPTERS[0].id);
  const activeChapter = MENU_CHAPTERS.find(c => c.id === activeTab) || MENU_CHAPTERS[0];

  return (
    <section id="menu" className="py-20 lg:py-28 bg-ember-900/20 relative border-t border-ember-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-gold-500 text-xs font-bold uppercase tracking-widest mb-2">
            <Utensils className="w-4 h-4" />
            <span>Nuestra Carta</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-cream-100 tracking-tight">
            Cuatro capítulos, un solo fogón.
          </h2>
          <p className="mt-3 text-cream-400 text-sm sm:text-base">
            Cada preparación se hace bajo pedido con productos frescos del campo nariñense y la receta de la casa.
          </p>
        </div>

        {/* Chapters Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {MENU_CHAPTERS.map((chapter) => {
            const isActive = chapter.id === activeTab;
            return (
              <button
                key={chapter.id}
                onClick={() => setActiveTab(chapter.id)}
                className={`text-left p-4 rounded-xl border transition-all duration-300 ${
                  isActive
                    ? 'bg-ember-900/80 border-ember-500 shadow-glow text-cream-100'
                    : 'bg-ember-950/60 border-ember-800/40 text-cream-400 hover:border-ember-700 hover:text-cream-200'
                }`}
              >
                <span className={`text-xs font-bold tracking-wider uppercase block mb-1 ${
                  isActive ? 'text-amber-400' : 'text-cream-500'
                }`}>
                  Capítulo {chapter.id}
                </span>
                <span className="font-serif font-bold text-base sm:text-lg block leading-snug">
                  {chapter.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Chapter Content */}
        <div className="bg-ember-950/80 rounded-3xl border border-ember-800/50 p-6 sm:p-10 shadow-xl">
          <div className="border-b border-ember-800/50 pb-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-amber-500 tracking-wider">CAPÍTULO {activeChapter.id} / 04</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-100 mt-1">
                {activeChapter.name}
              </h3>
              <p className="text-sm text-cream-400 mt-1">{activeChapter.tagline}</p>
            </div>
            
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Delicia%20Sure%C3%B1a%2C%20quisiera%20pedir%20de%20la%20secci%C3%B3n%20${encodeURIComponent(activeChapter.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ember-800/60 hover:bg-ember-700 text-cream-100 text-xs font-bold uppercase tracking-wider py-3 px-5 rounded-full border border-ember-600/50 transition-colors self-start sm:self-auto"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Pedir esta sección</span>
            </a>
          </div>

          {/* Dishes list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {activeChapter.items.map((item, idx) => (
              <div 
                key={idx}
                className="group flex flex-col justify-between p-4 rounded-xl hover:bg-ember-900/30 border border-transparent hover:border-ember-800/40 transition-all duration-200"
              >
                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="font-serif font-bold text-base sm:text-lg text-cream-100 group-hover:text-amber-400 transition-colors">
                      {item.name}
                    </h4>
                    <span className="font-mono font-bold text-gold-400 text-sm whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs sm:text-sm text-cream-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-3 pt-2">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Delicia%20Sure%C3%B1a%2C%20quiero%20ordenar%20${encodeURIComponent(item.name)}%20(${item.price})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-500 hover:text-amber-400 transition-colors"
                  >
                    <span>Pedir este plato</span>
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
