import React from 'react';
import { Star, Clock, MapPin, Phone } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-ember-900/90 border-b border-ember-800/40 text-xs py-2 px-4 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-cream-300">
        
        {/* Left: Rating and status */}
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-1.5 font-medium text-cream-100">
            <span className="flex text-gold-500">
              <Star className="w-3.5 h-3.5 fill-gold-500" />
            </span>
            <span className="font-bold text-gold-500">4.9</span>
            <span className="text-cream-400">| 150+ valoraciones</span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-cream-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-emerald-400 font-medium">Abierto hoy hasta las 8:00 PM</span>
          </div>
        </div>

        {/* Right: Location & Quick Links */}
        <div className="flex items-center gap-4 text-cream-400">
          <div className="flex items-center gap-1 hover:text-ember-400 transition-colors">
            <MapPin className="w-3.5 h-3.5 text-ember-500" />
            <span>Catambuco, San Juan de Pasto</span>
          </div>
          <a
            href="https://wa.me/573163508206?text=Hola%2C%20quisiera%20reservar%20una%20mesa%20en%20Restaurante%20Delicia%20Sure%C3%B1a"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1 text-gold-500 hover:text-gold-400 font-semibold"
          >
            <Phone className="w-3 h-3" />
            <span>Reservas: +57 316 350 8206</span>
          </a>
        </div>

      </div>
    </div>
  );
}
