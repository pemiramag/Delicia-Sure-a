import React from 'react';
import { Flame, ArrowRight, MessageCircle, MapPin, UtensilsCrossed, ShieldCheck } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MSG } from '../data/menuData';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32">
      {/* Background radial glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ember-600/15 rounded-full blur-[140px] pointer-events-none flame-glow"></div>
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Sub-badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ember-900/60 border border-ember-700/50 text-ember-300 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
          <Flame className="w-3.5 h-3.5 text-ember-500 fill-ember-500 animate-bounce" />
          <span>Est. Catambuco, Nariño · Fogón de Leña & Tradición</span>
        </div>

        {/* Headlines */}
        <div className="max-w-4xl space-y-4">
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-cream-100 leading-[1.08]">
            Al calor del fogón.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ember-400 via-amber-500 to-gold-400">
              El auténtico sabor nariñense.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-cream-300 font-normal max-w-2xl leading-relaxed pt-2">
            Cuy asado crocante a la brasa, papas pastusas bañadas en ají de maní casero y la calidez de nuestro hogar en Catambuco. Recetas familiares transmitidas con orgullo de generación en generación.
          </p>
        </div>

        {/* CTA Button Group */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MSG)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-ember-600 to-ember-500 hover:from-ember-500 hover:to-ember-400 text-white font-bold text-sm tracking-wider uppercase py-4 px-8 rounded-full shadow-glow-lg transition-all duration-300 hover:scale-105 active:scale-95 group"
          >
            <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>Pedir por WhatsApp</span>
          </a>

          <a
            href="#menu"
            className="inline-flex items-center justify-center gap-2 bg-ember-900/40 hover:bg-ember-900/80 border border-ember-700/50 text-cream-100 font-semibold text-sm py-4 px-7 rounded-full transition-all duration-300 hover:border-ember-500"
          >
            <UtensilsCrossed className="w-4 h-4 text-amber-500" />
            <span>Ver la Carta</span>
          </a>

          <a
            href="#ubicacion"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-cream-300 hover:text-gold-400 transition-colors py-2 px-3"
          >
            <span>Cómo llegar a Catambuco</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Micro-Features Row */}
        <div className="mt-14 pt-8 border-t border-ember-900/60 grid grid-cols-2 md:grid-cols-4 gap-6 text-cream-300">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-ember-900/50 border border-ember-800/60 text-ember-400">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-cream-400 font-semibold">Cocción</p>
              <p className="text-sm font-bold text-cream-100">100% Brasa de Leña</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-ember-900/50 border border-ember-800/60 text-gold-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-cream-400 font-semibold">Calidad</p>
              <p className="text-sm font-bold text-cream-100">Cuy de Selección</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-ember-900/50 border border-ember-800/60 text-amber-400">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-cream-400 font-semibold">Tradición</p>
              <p className="text-sm font-bold text-cream-100">Ají de Maní Artesanal</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-ember-900/50 border border-ember-800/60 text-emerald-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-cream-400 font-semibold">Ubicación</p>
              <p className="text-sm font-bold text-cream-100">Catambuco, Pasto</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
