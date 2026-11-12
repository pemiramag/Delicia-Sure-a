import React from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Signatures from './components/Signatures';
import MenuChapters from './components/MenuChapters';
import CraftStory from './components/CraftStory';
import PhotoGallery from './components/PhotoGallery';
import LocationCard from './components/LocationCard';
import ReviewsSection from './components/ReviewsSection';
import CateringSection from './components/CateringSection';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-ember-950 text-cream-100 font-sans selection:bg-ember-500 selection:text-white">
      <TopBar />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Signatures />
        <MenuChapters />
        <CraftStory />
        <PhotoGallery />
        <LocationCard />
        <ReviewsSection />
        <CateringSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
