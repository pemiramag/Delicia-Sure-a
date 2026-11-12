import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MSG } from '../data/menuData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-ember-950/85 backdrop-blur-md border-b border-ember-900/60 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand with Framer Motion hover */}
          <motion.a 
            href="#" 
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-ember-600/60 p-0.5 bg-ember-900/80 shadow-glow group-hover:border-amber-400 transition-colors">
              <img 
                src="/logo_delicia.png" 
                alt="Logo Delicia Sureña" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg tracking-wider text-cream-100 group-hover:text-amber-400 transition-colors uppercase">
                Delicia Sureña
              </span>
              <span className="text-[10px] tracking-widest text-amber-500 font-semibold uppercase">
                Comida Tradicional Nariñense
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-cream-300">
            {[
              { href: "#especialidades", label: "Especialidades" },
              { href: "#menu", label: "La Carta" },
              { href: "#galeria", label: "Galería" },
              { href: "#fogon", label: "El Fogón" },
              { href: "#ubicacion", label: "Catambuco" },
              { href: "#opiniones", label: "Opiniones" },
              { href: "#eventos", label: "Eventos" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 hover:text-amber-400 transition-colors text-xs uppercase tracking-wider font-semibold"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <motion.a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MSG)}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(217, 107, 30, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-ember-600 to-ember-500 hover:from-ember-500 hover:to-amber-500 text-white font-semibold text-xs uppercase tracking-wider py-3 px-5 rounded-full shadow-glow transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Pedir por WhatsApp</span>
            </motion.a>
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

      {/* Mobile Drawer with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-ember-950 border-b border-ember-900 px-4 pt-3 pb-6 space-y-3 overflow-hidden"
          >
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
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-ember-600 to-amber-600 hover:from-ember-500 hover:to-amber-500 text-white font-semibold py-3 px-4 rounded-xl shadow-glow"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Hacer Pedido por WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
