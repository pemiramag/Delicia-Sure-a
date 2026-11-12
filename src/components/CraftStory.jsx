import React from 'react';
import { Flame, Heart, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/menuData';

export default function CraftStory() {
  return (
    <section id="fogon" className="py-20 lg:py-28 bg-ember-950 relative overflow-hidden border-t border-ember-900/60">
      
      {/* Decorative fire glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-ember-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Story Card */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-ember-800/60 shadow-2xl bg-ember-900/40">
              <img 
                src="/foto_local.jpg" 
                alt="Instalaciones y calidez de Delicia Sureña" 
                className="w-full h-[450px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ember-950 via-ember-950/40 to-transparent"></div>
              
              {/* Overlay Quote */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-ember-950/85 backdrop-blur-md border border-ember-800/60">
                <p className="font-serif italic text-cream-100 text-sm sm:text-base leading-relaxed">
                  "Creemos que la gastronomía es mucho más que alimentar: es contar historias, preservar tradiciones y crear momentos especiales."
                </p>
                <p className="mt-2 text-xs font-semibold text-amber-500 uppercase tracking-widest">
                  — Familia Restaurante Delicia Sureña
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-amber-500 to-ember-600 text-ember-950 p-4 rounded-2xl shadow-glow font-bold text-center">
              <span className="block text-2xl font-serif">100%</span>
              <span className="text-[10px] uppercase tracking-wider">Tradición Nariñense</span>
            </div>
          </div>

          {/* Right Column: Story & Philosophy */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-ember-400 text-xs font-bold uppercase tracking-widest">
              <Flame className="w-4 h-4 fill-ember-500" />
              <span>Nuestra Historia & El Fogón</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-cream-100 leading-tight">
              Comida de verdad, hecha con amor y a fuego lento.
            </h2>

            <p className="text-cream-300 text-sm sm:text-base leading-relaxed">
              Somos un restaurante ubicado en <strong>Catambuco, Pasto</strong>, donde el auténtico sabor de la comida tradicional nariñense se combina con la calidez de nuestro hogar. 
            </p>
            <p className="text-cream-400 text-sm sm:text-base leading-relaxed">
              Aquí no hay atajos: los cuyes se marinan desde la víspera con hierbas campesinas, las papas pastusas se cuecen en su punto exacto y nuestro famoso ají de maní se elabora artesanalmente a diario. Cada comensal que entra por nuestra puerta es recibido como parte de nuestra propia familia.
            </p>

            {/* 4 Feature Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-ember-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-cream-100">Fuego & Carbón Vivo</h4>
                  <p className="text-xs text-cream-400">Cocción lenta que sella los jugos y dora la piel a la perfección.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-ember-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-cream-100">Ají de Maní Fresco</h4>
                  <p className="text-xs text-cream-400">La joya de la gastronomía pastusa, recién tostado y molido.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-ember-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-cream-100">Papas del Altiplano</h4>
                  <p className="text-xs text-cream-400">Papas pastusas de origen cultivadas por familias de la región.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-ember-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-cream-100">Hospitalidad Sureña</h4>
                  <p className="text-xs text-cream-400">La experiencia de sentarse a comer sabroso y sentirse en casa.</p>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="pt-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20quisiera%20conocer%20m%C3%A1s%20sobre%20Delicia%20Sure%C3%B1a`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-amber-500 hover:text-amber-400 transition-colors group"
              >
                <span>Hablemos por WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
