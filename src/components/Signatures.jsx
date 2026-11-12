import React from 'react';
import { Flame, MessageCircle, Star } from 'lucide-react';
import { SIGNATURE_DISHES, WHATSAPP_NUMBER } from '../data/menuData';

export default function Signatures() {
  return (
    <section id="especialidades" className="py-20 lg:py-28 bg-ember-950 relative border-t border-ember-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
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
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SIGNATURE_DISHES.map((dish) => (
            <div 
              key={dish.id}
              className="group bg-ember-900/30 rounded-3xl border border-ember-800/40 overflow-hidden hover:border-ember-600/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow flex flex-col justify-between"
            >
              {/* Image & Badges */}
              <div className="relative aspect-[4/3] overflow-hidden bg-ember-950">
                <img 
                  src={dish.image} 
                  alt={dish.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ember-950 via-transparent to-transparent opacity-80"></div>
                
                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-ember-950 uppercase tracking-wider shadow">
                    {dish.badge}
                  </span>
                </div>

                {/* Price Pill */}
                <div className="absolute bottom-3 right-3 bg-ember-950/90 border border-ember-700/60 px-3 py-1.5 rounded-xl flex flex-col items-end">
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
                  <h3 className="font-serif font-bold text-xl text-cream-100 group-hover:text-ember-400 transition-colors">
                    {dish.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-cream-400 leading-relaxed">
                    {dish.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {dish.tags.map((tag, idx) => (
                      <span key={idx} className="text-[11px] font-medium text-cream-400 bg-ember-950/70 border border-ember-800/60 px-2 py-0.5 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Order CTA */}
                <div className="mt-6 pt-4 border-t border-ember-800/40">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(dish.orderMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-ember-800/50 hover:bg-ember-600 border border-ember-700/50 text-cream-100 hover:text-white text-xs font-bold uppercase tracking-wider py-3 px-4 rounded-xl transition-all duration-300 shadow"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Pedir por WhatsApp</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
