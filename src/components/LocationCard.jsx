import React from 'react';
import { MapPin, Clock, Phone, Navigation, ExternalLink, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/menuData';

export default function LocationCard() {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Catambuco+San+Juan+de+Pasto+Nariño";

  return (
    <section id="ubicacion" className="py-20 lg:py-28 bg-ember-900/30 relative border-t border-ember-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-gold-500 text-xs font-bold uppercase tracking-widest mb-2">
            <MapPin className="w-4 h-4" />
            <span>Visítanos en Catambuco</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-cream-100 tracking-tight">
            Siempre cerca del buen comer.
          </h2>
          <p className="mt-3 text-cream-400 text-sm sm:text-base">
            Catambuco es la cuna gastronómica de Nariño. Encuéntranos fácil sobre la vía principal, con ambiente campestre y parqueadero.
          </p>
        </div>

        {/* Info Grid + Map Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Details Card */}
          <div className="lg:col-span-5 bg-ember-950/80 rounded-3xl border border-ember-800/60 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            
            <div className="space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-ember-900/60 text-ember-400 border border-ember-800/60">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-cream-400 uppercase tracking-wider">Dirección</h4>
                  <p className="font-serif font-bold text-lg text-cream-100 mt-0.5">Catambuco, Vía Panamericana Sur</p>
                  <p className="text-xs text-cream-400">San Juan de Pasto, Nariño, Colombia</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-ember-900/60 text-gold-400 border border-ember-800/60">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-cream-400 uppercase tracking-wider">Horario de Atención</h4>
                  <p className="font-serif font-bold text-lg text-cream-100 mt-0.5">Lunes a Domingo & Festivos</p>
                  <p className="text-xs text-emerald-400 font-semibold flex items-center gap-1 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    10:00 AM – 8:00 PM · Abierto hoy
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-ember-900/60 text-amber-400 border border-ember-800/60">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-cream-400 uppercase tracking-wider">Reservas & Pedidos</h4>
                  <p className="font-serif font-bold text-lg text-cream-100 mt-0.5">+57 316 350 8206</p>
                  <p className="text-xs text-cream-400">pemiramag@gmail.com</p>
                </div>
              </div>

            </div>

            {/* CTAs */}
            <div className="mt-8 pt-6 border-t border-ember-800/50 flex flex-col sm:flex-row gap-3">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-ember-600 hover:bg-ember-500 text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-glow transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Cómo llegar</span>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20quisiera%20reservar%20una%20mesa%20en%20Catambuco`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-ember-900/60 hover:bg-ember-800 text-cream-100 font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl border border-ember-700/60 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Escribir por WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Interactive Map Visual */}
          <div className="lg:col-span-7 bg-ember-950/90 rounded-3xl border border-ember-800/60 overflow-hidden relative min-h-[380px] shadow-2xl flex flex-col justify-between p-8">
            <div className="absolute inset-0 opacity-30 mix-blend-luminosity bg-[radial-gradient(#d96b1e_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            <div className="relative z-10">
              <span className="text-xs font-mono font-bold text-amber-500 tracking-wider uppercase">Mapa & Entorno</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-100 mt-1">
                El corazón gastronómico de Pasto.
              </h3>
              <p className="text-cream-400 text-xs sm:text-sm mt-2 max-w-lg leading-relaxed">
                Catambuco es reconocido en toda Colombia por su tradición culinaria. Delicia Sureña te espera con amplios espacios, aire puro andino y la mejor sazón del sur.
              </p>
            </div>

            {/* Visual Route Indicator */}
            <div className="relative z-10 bg-ember-900/80 backdrop-blur-md rounded-2xl border border-ember-700/60 p-5 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-ember-500/20 border border-ember-500 flex items-center justify-center text-ember-400">
                  <MapPin className="w-5 h-5 animate-bounce" />
                </div>
                <div>
                  <p className="font-bold text-sm text-cream-100">Restaurante Delicia Sureña</p>
                  <p className="text-xs text-cream-400">A solo 15 minutos del centro de Pasto</p>
                </div>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-400 hover:text-gold-300 uppercase tracking-wider"
              >
                <span>Abrir en Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
