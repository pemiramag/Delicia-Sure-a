import React from 'react';
import { Instagram, Facebook, MessageCircle, MapPin, Mail, Phone, Heart } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/menuData';

export default function Footer() {
  return (
    <footer className="bg-ember-950 border-t border-ember-900/80 pt-16 pb-12 text-cream-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-ember-900/60">
          
          {/* Col 1 & 2: Brand & Story */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-ember-700/60 p-0.5 bg-ember-900">
                <img 
                  src="/logo_delicia.png" 
                  alt="Restaurante Delicia Sureña" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <span className="font-serif font-bold text-xl text-cream-100 tracking-wider block">
                  DELICIA SUREÑA
                </span>
                <span className="text-xs text-amber-500 font-semibold uppercase tracking-widest">
                  Comida Tradicional Nariñense
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-cream-400 max-w-sm leading-relaxed">
              Rescatando las tradiciones gastronómicas de nuestro sur andino. Cocinamos con leña de verdad, amor de hogar y los mejores ingredientes de nuestra tierra en Catambuco.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/deliciasurenacatambuco/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-ember-900/60 hover:bg-ember-700 border border-ember-800/80 text-cream-200 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61593580137497"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-ember-900/60 hover:bg-ember-700 border border-ember-800/80 text-cream-200 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-ember-900/60 hover:bg-emerald-600 border border-ember-800/80 text-cream-200 hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 3: La Carta */}
          <div>
            <h4 className="font-serif font-bold text-base text-cream-100 mb-4">La Carta</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#especialidades" className="hover:text-amber-400 transition-colors">Cuy Asado Tradicional</a></li>
              <li><a href="#especialidades" className="hover:text-amber-400 transition-colors">Costillas al Carbón</a></li>
              <li><a href="#especialidades" className="hover:text-amber-400 transition-colors">Sancocho de Gallina Criolla</a></li>
              <li><a href="#menu" className="hover:text-amber-400 transition-colors">Fritada Nariñense</a></li>
              <li><a href="#menu" className="hover:text-amber-400 transition-colors">Empanadas de Añejo & Ají de Maní</a></li>
              <li><a href="#menu" className="hover:text-amber-400 transition-colors">Hervidos Nariñenses</a></li>
            </ul>
          </div>

          {/* Col 4: El Restaurante */}
          <div>
            <h4 className="font-serif font-bold text-base text-cream-100 mb-4">Nosotros</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#fogon" className="hover:text-amber-400 transition-colors">El Fogón y la Leña</a></li>
              <li><a href="#ubicacion" className="hover:text-amber-400 transition-colors">Ubicación en Catambuco</a></li>
              <li><a href="#opiniones" className="hover:text-amber-400 transition-colors">Opiniones de Clientes</a></li>
              <li><a href="#eventos" className="hover:text-amber-400 transition-colors">Eventos & Celebraciones</a></li>
              <li><a href="https://elvuelo.psnar.com/vitrina/restaurante-delicia-surena-w4v9" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Vitrina PEPE El Vuelo</a></li>
            </ul>
          </div>

          {/* Col 5: Contacto Directo */}
          <div>
            <h4 className="font-serif font-bold text-base text-cream-100 mb-4">Atención & Pedidos</h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-ember-500 shrink-0 mt-0.5" />
                <span>Catambuco, San Juan de Pasto, Nariño</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>+57 316 350 8206</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>pemiramag@gmail.com</span>
              </div>
              <p className="pt-2 text-[11px] text-cream-500">
                Lunes a Domingo & Festivos:<br />10:00 AM – 8:00 PM
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-500">
          <p>© 2026 Restaurante Delicia Sureña. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            <span>Hecho con</span>
            <Heart className="w-3.5 h-3.5 text-ember-500 fill-ember-500" />
            <span>en Catambuco, Pasto, Nariño</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
