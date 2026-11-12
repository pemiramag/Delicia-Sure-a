import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Sparkles } from 'lucide-react';

const TICKER_ITEMS = [
  "CATAMBUCO, NARIÑO",
  "AUTÉNTICO CUY ASADO A LA BRASA",
  "PAPAS PASTUSAS AL VAPOR",
  "AJÍ DE MANÍ ARTESANAL",
  "TRADICIÓN CAMPESINA DESDE EL FOGÓN",
  "FRITO PASTUSO DE FIN DE SEMANA",
  "CAZUELAS DE BARRO & SOPAS DE LA ABUELA",
  "PEDIDOS & DOMICILIOS WHATSAPP: +57 316 350 8206",
  "CALIDEZ NARIÑENSE EN CADA PLATO",
];

export default function Ticker() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-ember-950 via-ember-900/70 to-ember-950 border-y border-ember-800/50 py-3.5 backdrop-blur-md select-none">
      {/* Edge gradient masks for smooth fade in/out */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-ember-950 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-ember-950 to-transparent z-10 pointer-events-none"></div>

      <motion.div
        className="flex items-center gap-8 whitespace-nowrap will-change-transform"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 32,
        }}
      >
        {/* Render twice for continuous seamless loop */}
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, index) => (
          <div key={index} className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-cream-200">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-gold-400 to-ember-400 font-semibold">
              {item}
            </span>
            <span className="inline-flex items-center text-ember-500">
              {index % 2 === 0 ? (
                <Flame className="w-3.5 h-3.5 fill-ember-500 text-ember-500" />
              ) : (
                <Sparkles className="w-3 h-3 text-gold-400" />
              )}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
