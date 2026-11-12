import React, { useState } from 'react';
import { Menu, X, Flame, ChevronRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MSG } from '../data/menuData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-ember-950/85 backdrop-blur-md border-b border-ember-900/60 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-ember-600/60 p-0.5 bg-ember-900/80 shadow-glow group-hover:border-ember-500 transition-all">
              <img 
                src="/logo_delicia.png" 
                alt="Logo Delicia Sureña" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg tracking-wider text-cream-100 group-hover:text-ember-400 transition-colors uppercase">
                Delicia Sureña
              </span>
              <span className="text-[10px] tracking-widest text-amber-500 font-semibold uppercase">
                Comida Tradicional Nariñense
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-cream-300">
            <a href="#especialidades" className="hover:text-ember-400 transition-colors">Especialidades</a>
            <a href="#menu" className="hover:text-ember-400 transition-colors">La Carta</a>
            <a href="#galeria" className="hover:text-ember-400 transition-colors">Galería</a>
            <a href="#fogon" className="hover:text-ember-400 transition-colors">El Fogón</a>
            <a href="#ubicacion" className="hover:text-ember-400 transition-colors">Catambuco</a>
            <a href="#opiniones" className="hover:text-ember-400 transition-colors">Opiniones</a>
            <a href="#eventos" className="hover:text-ember-400 transition-colors">Eventos</a>
          </div>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MSG)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-ember-600 to-ember-500 hover:from-ember-500 hover:to-ember-400 text-white font-semibold text-xs uppercase tracking-wider py-3 px-5 rounded-full shadow-glow transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Pedir por WhatsApp</span>
            </a>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-cream-300 hover:text-cream-100 hover:bg-ember-900/60 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-ember-950 border-b border-ember-900 px-4 pt-3 pb-6 space-y-3">
          <a
            href="#especialidades"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-cream-200 hover:text-ember-400 border-b border-ember-900/40"
          >
            Especialidades de la Casa
          </a>
          <a
            href="#menu"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-cream-200 hover:text-ember-400 border-b border-ember-900/40"
          >
            Carta Completa
          </a>
          <a
            href="#galeria"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-cream-200 hover:text-ember-400 border-b border-ember-900/40"
          >
            Galería Fotográfica Real
          </a>
          <a
            href="#fogon"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-cream-200 hover:text-ember-400 border-b border-ember-900/40"
          >
            Nuestra Tradición en Leña
          </a>
          <a
            href="#ubicacion"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-cream-200 hover:text-ember-400 border-b border-ember-900/40"
          >
            Cómo Llegar (Catambuco)
          </a>
          <a
            href="#opiniones"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-cream-200 hover:text-ember-400 border-b border-ember-900/40"
          >
            Opiniones de Clientes
          </a>
          <a
            href="#eventos"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-cream-200 hover:text-ember-400"
          >
            Eventos & Banquetes
          </a>

          <div className="pt-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MSG)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-ember-600 hover:bg-ember-500 text-white font-semibold py-3 px-4 rounded-xl shadow-glow"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Hacer Pedido por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
