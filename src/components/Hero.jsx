import React from 'react';
import { motion } from 'framer-motion';
import { Flame, ArrowRight, MessageCircle, MapPin, UtensilsCrossed, ShieldCheck } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MSG } from '../data/menuData';
import EmberParticles from './EmberParticles';

const framerEase = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-20 lg:pt-24 lg:pb-32 min-h-[85vh] flex items-center">
      {/* Facilities background image with dark ember overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src="/foto_local.jpg"
          alt="Instalaciones del Restaurante Delicia Sureña en Catambuco"
          className="w-full h-full object-cover object-[center_35%] filter brightness-[0.28] contrast-110 saturate-[1.15]"
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
        />
        {/* Vertical gradient: smooth fade to top and solid ember-950 bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-ember-950 via-ember-950/85 to-ember-950/60" />
        {/* Horizontal gradient: ensures headline & CTAs have pristine contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-ember-950/95 via-ember-950/80 to-transparent" />
        {/* Warm flame ambient glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-ember-600/20 rounded-full blur-[140px] pointer-events-none flame-glow"></div>
        <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-gold-500/15 rounded-full blur-[130px] pointer-events-none"></div>

        {/* Live animated ember particles floating up */}
        <EmberParticles count={18} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Sub-badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: framerEase }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ember-900/60 border border-ember-700/50 text-ember-300 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm shadow-glow-sm"
        >
          <Flame className="w-3.5 h-3.5 text-ember-500 fill-ember-500 animate-bounce" />
          <span>Est. Catambuco, Nariño · Fogón de Leña & Tradición</span>
        </motion.div>

        {/* Headlines */}
        <div className="max-w-4xl space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: framerEase }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-cream-100 leading-[1.08]"
          >
            Al calor del fogón.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ember-400 via-amber-500 to-gold-400">
              El auténtico sabor nariñense.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: framerEase }}
            className="text-lg sm:text-xl text-cream-300 font-normal max-w-2xl leading-relaxed pt-2"
          >
            Cuy asado crocante a la brasa, papas pastusas bañadas en ají de maní casero y la calidez de nuestro hogar en Catambuco. Recetas familiares transmitidas con orgullo de generación en generación.
          </motion.p>
        </div>

        {/* CTA Button Group */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: framerEase }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <motion.a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MSG)}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(217, 107, 30, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-ember-600 to-ember-500 hover:from-ember-500 hover:to-ember-400 text-white font-bold text-sm tracking-wider uppercase py-4 px-8 rounded-full shadow-glow-lg group"
          >
            <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>Pedir por WhatsApp</span>
          </motion.a>

          <motion.a
            href="#menu"
            whileHover={{ scale: 1.03, borderColor: "rgba(217, 107, 30, 0.8)", backgroundColor: "rgba(139, 46, 15, 0.4)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center justify-center gap-2 bg-ember-900/40 border border-ember-700/50 text-cream-100 font-semibold text-sm py-4 px-7 rounded-full backdrop-blur-sm"
          >
            <UtensilsCrossed className="w-4 h-4 text-amber-500" />
            <span>Ver la Carta</span>
          </motion.a>

          <motion.a
            href="#ubicacion"
            whileHover={{ x: 3 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-cream-300 hover:text-gold-400 transition-colors py-2 px-3"
          >
            <span>Cómo llegar a Catambuco</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Micro-Features Row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: framerEase }}
          className="mt-14 pt-8 border-t border-ember-900/60 grid grid-cols-2 md:grid-cols-4 gap-6 text-cream-300"
        >
          <motion.div 
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-3 p-2 rounded-xl transition-colors hover:bg-ember-900/20"
          >
            <div className="p-2.5 rounded-xl bg-ember-900/50 border border-ember-800/60 text-ember-400 shadow-glow-sm">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-cream-400 font-semibold">Cocción</p>
              <p className="text-sm font-bold text-cream-100">100% Brasa de Leña</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-3 p-2 rounded-xl transition-colors hover:bg-ember-900/20"
          >
            <div className="p-2.5 rounded-xl bg-ember-900/50 border border-ember-800/60 text-gold-400 shadow-glow-sm">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-cream-400 font-semibold">Calidad</p>
              <p className="text-sm font-bold text-cream-100">Cuy de Selección</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-3 p-2 rounded-xl transition-colors hover:bg-ember-900/20"
          >
            <div className="p-2.5 rounded-xl bg-ember-900/50 border border-ember-800/60 text-amber-400 shadow-glow-sm">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-cream-400 font-semibold">Tradición</p>
              <p className="text-sm font-bold text-cream-100">Ají de Maní Artesanal</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-3 p-2 rounded-xl transition-colors hover:bg-ember-900/20"
          >
            <div className="p-2.5 rounded-xl bg-ember-900/50 border border-ember-800/60 text-emerald-400 shadow-glow-sm">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-cream-400 font-semibold">Ubicación</p>
              <p className="text-sm font-bold text-cream-100">Catambuco, Pasto</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
