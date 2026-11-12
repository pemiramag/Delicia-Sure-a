import React from 'react';
import { motion } from 'framer-motion';
import { Users, PartyPopper, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/menuData';

const framerEase = [0.22, 1, 0.36, 1];

export default function CateringSection() {
  return (
    <section id="eventos" className="py-20 lg:py-28 bg-ember-900/20 relative border-t border-ember-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: framerEase }}
          className="bg-gradient-to-br from-ember-900/80 via-ember-950 to-ember-900/60 rounded-3xl border border-ember-700/60 p-8 sm:p-14 relative overflow-hidden shadow-2xl backdrop-blur-sm"
        >
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-ember-600/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-5 border border-amber-500/30">
              <PartyPopper className="w-4 h-4" />
              <span>Eventos & Banquetes</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-cream-100 leading-tight">
              Celebra con el auténtico sabor nariñense.
            </h2>

            <p className="mt-4 text-cream-300 text-sm sm:text-base leading-relaxed">
              ¿Tienes un cumpleaños, grado, reunión familiar o evento empresarial en Pasto o Catambuco? Preparamos banquetes típicos completos con cuy asado, costillas campesinas, fritada, hervidos calientes y servicio impecable para grupos desde 10 hasta 150 personas.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Delicia%20Sure%C3%B1a%2C%20quisiera%20cotizar%20un%20evento%20o%20banquete%20especial`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(217, 107, 30, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-ember-600 to-amber-600 hover:from-ember-500 hover:to-amber-500 text-white font-bold text-xs uppercase tracking-wider py-4 px-8 rounded-full shadow-glow transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Cotizar Evento por WhatsApp</span>
              </motion.a>

              <motion.a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20quisiera%20conocer%20los%20paquetes%20de%20comida%20para%20grupos`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, borderColor: "rgba(217, 107, 30, 0.8)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-ember-950/80 hover:bg-ember-900 border border-ember-700/60 text-cream-200 text-xs font-bold uppercase tracking-wider py-4 px-7 rounded-full transition-all"
              >
                <Users className="w-4 h-4 text-amber-500" />
                <span>Ver Paquetes para Grupos</span>
              </motion.a>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
