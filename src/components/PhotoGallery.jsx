import React, { useState } from 'react';
import { Camera, X, MessageCircle, ZoomIn, ArrowRight } from 'lucide-react';
import { GALLERY_PHOTOS, WHATSAPP_NUMBER } from '../data/menuData';

export default function PhotoGallery() {
  const [filter, setFilter] = useState('todos');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredPhotos = filter === 'todos' 
    ? GALLERY_PHOTOS 
    : GALLERY_PHOTOS.filter(p => p.category === filter);

  return (
    <section id="galeria" className="py-20 lg:py-28 bg-ember-950 relative border-t border-ember-900/60 overflow-hidden">
      
      {/* Glow effect */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-ember-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-ember-400 text-xs font-bold uppercase tracking-widest mb-2">
              <Camera className="w-4 h-4 fill-ember-500" />
              <span>Galería Fotográfica Real</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-cream-100 tracking-tight">
              De nuestro fogón a tu mesa.
            </h2>
            <p className="mt-3 text-cream-400 text-sm sm:text-base max-w-xl">
              Fotografías reales tomadas directamente en nuestro restaurante en Catambuco. Platos auténticos servidos con el cariño de nuestra casa.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'todos', label: 'Todos' },
              { id: 'platos', label: 'Platos Típicos' },
              { id: 'sopas', label: 'Sopas & Cazuelas' },
              { id: 'ambiente', label: 'El Restaurante' },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  filter === btn.id
                    ? 'bg-ember-600 text-white shadow-glow'
                    : 'bg-ember-900/40 text-cream-400 hover:text-cream-100 hover:bg-ember-900/80 border border-ember-800/50'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative rounded-2xl overflow-hidden bg-ember-900/30 border border-ember-800/40 cursor-pointer hover:border-ember-500/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow aspect-[4/3]"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ember-950 via-ember-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-ember-950/80 backdrop-blur-md border border-ember-700 flex items-center justify-center text-cream-200 opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4 text-amber-400" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="font-serif font-bold text-base text-cream-100 leading-snug group-hover:text-amber-400 transition-colors">
                  {photo.title}
                </h4>
                <p className="text-xs text-cream-400 mt-1 line-clamp-1">
                  {photo.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-ember-950 border border-ember-700/80 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-ember-900/80 border border-ember-700 text-cream-100 hover:text-white hover:bg-ember-700 flex items-center justify-center transition-colors"
              aria-label="Cerrar foto"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo */}
            <div className="md:w-3/5 bg-black flex items-center justify-center max-h-[500px] overflow-hidden">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Content info */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-amber-500 font-bold uppercase tracking-wider">
                  Delicia Sureña · Catambuco
                </span>
                <h3 className="font-serif font-bold text-2xl text-cream-100 mt-2">
                  {selectedPhoto.title}
                </h3>
                <p className="mt-3 text-sm text-cream-300 leading-relaxed">
                  {selectedPhoto.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-ember-800/60">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Delicia%20Sure%C3%B1a%2C%20vi%20la%20foto%20de%20${encodeURIComponent(selectedPhoto.title)}%20y%20quisiera%20pedirlo`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-ember-600 to-amber-600 hover:from-ember-500 hover:to-amber-500 text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-glow transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Pedir o Consultar por WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
