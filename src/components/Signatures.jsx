import React from 'react';
import { motion } from 'framer-motion';
import { Flame, MessageCircle } from 'lucide-react';
import { SIGNATURE_DISHES, WHATSAPP_NUMBER } from '../data/menuData';

const framerEase = [0.22, 1, 0.36, 1];

export default function Signatures() {
  return (
    <section id="especialidades" className="py-20 lg:py-28 bg-ember-950 relative border-t border-ember-900/60 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-ember-600/10 rounded-full blur-[120px] pointer-events-none"></div>

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
            <div className="flex items-center gap-2 text-ember-400 text-xs font-bold uppercase tracking-widest mb-2">
              <Flame className="w-4 h-4 fill-ember-500" />
              <span>Nuestras Especialidades</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-cream-100 tracking-tight">
              Los platos por los que siempre vuelves.
            </h2>
          </div>
          <p className="text-cream-400 text-sm sm:text-base max-w-md">
            Cocinados con ingredientes frescos a fuego lento y con el sazón de la abuela. Transparencia y calidad en Catambuco.
          </p>
        </motion.div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SIGNATURE_DISHES.map((dish, index) => (
            <motion.div 
              key={dish.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: framerEase }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-ember-900/30 rounded-3xl border border-ember-800/40 overflow-hidden hover:border-ember-500/80 hover:shadow-glow-lg transition-colors duration-300 flex flex-col justify-between"
            >
              {/* Image & Badges */}
              <div className="relative aspect-[4/3] overflow-hidden bg-ember-950">
                <img 
                  src={dish.image} 
                  alt={dish.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ember-950 via-ember-950/20 to-transparent opacity-85"></div>
                
                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-amber-500 to-gold-400 text-ember-950 uppercase tracking-wider shadow-md">
                    {dish.badge}
                  </span>
                </div>

                {/* Price Pill */}
                <div className="absolute bottom-3 right-3 bg-ember-950/90 border border-ember-700/60 px-3 py-1.5 rounded-xl flex flex-col items-end backdrop-blur-sm shadow-md">
                  <span className="font-bold text-gold-400 text-sm">
                    {dish.price}
                  </span>
                  {dish.takeawayPrice && (
                    <span className="text-[10px] text-cream-400 font-medium">
                      {dish.takeawayPrice}
                    </span>
                  )}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-xl text-cream-100 group-hover:text-amber-400 transition-colors">
                    {dish.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-cream-400 leading-relaxed">
                    {dish.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {dish.tags.map((tag, idx) => (
                      <span key={idx} className="text-[11px] font-medium text-cream-400 bg-ember-950/70 border border-ember-800/60 px-2.5 py-0.5 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Order CTA */}
                <div className="mt-6 pt-4 border-t border-ember-800/40">
                  <motion.a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(dish.orderMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="w-full flex items-center justify-center gap-2 bg-ember-800/50 hover:bg-ember-600 border border-ember-700/50 text-cream-100 hover:text-white text-xs font-bold uppercase tracking-wider py-3.5 px-4 rounded-xl transition-colors duration-300 shadow group/btn"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400 group-hover/btn:rotate-12 transition-transform" />
                    <span>Pedir por WhatsApp</span>
                  </motion.a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
