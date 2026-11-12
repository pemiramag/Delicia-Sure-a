import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle } from 'lucide-react';
import { REVIEWS } from '../data/menuData';

const framerEase = [0.22, 1, 0.36, 1];

export default function ReviewsSection() {
  return (
    <section id="opiniones" className="py-20 lg:py-28 bg-ember-950 relative border-t border-ember-900/60 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gold-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: framerEase }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <div className="flex items-center gap-2 text-gold-500 text-xs font-bold uppercase tracking-widest mb-2">
              <Star className="w-4 h-4 fill-gold-500" />
              <span>Confianza & Testimonios</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-cream-100 tracking-tight">
              Una región que siempre vuelve.
            </h2>
          </div>

          <div className="flex items-center gap-3 bg-ember-900/40 border border-ember-800/60 px-5 py-3 rounded-2xl backdrop-blur-sm shadow-md">
            <span className="font-serif text-3xl font-bold text-gold-400">4.9</span>
            <div>
              <div className="flex text-gold-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-500" />
                ))}
              </div>
              <p className="text-xs text-cream-400 mt-0.5 font-medium">Basado en Google & Clientes Locales</p>
            </div>
          </div>
        </motion.div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: framerEase }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-ember-900/30 rounded-3xl border border-ember-800/40 p-6 flex flex-col justify-between hover:border-ember-700/70 transition-colors duration-300 shadow-lg hover:shadow-glow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-gold-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-500" />
                    ))}
                  </div>
                  <span className="text-[11px] text-cream-400">{review.date}</span>
                </div>

                <p className="font-serif italic text-cream-200 text-sm sm:text-base leading-relaxed">
                  "{review.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-ember-800/40 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-cream-100">{review.name}</h4>
                  <p className="text-xs text-cream-400">{review.location}</p>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verificado</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
