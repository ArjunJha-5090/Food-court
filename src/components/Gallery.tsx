import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const galleryImages = [
  'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1596450514735-111a2fe02935?auto=format&fit=crop&q=80&w=800',
];

export const Gallery: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="gallery" className="py-12 md:py-24 bg-secondary-background border-t-2 border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Food Gallery"
          subtitle="A glimpse into the vibrant atmosphere and delicious offerings at Metro Food Court."
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="relative group overflow-hidden border-2 border-border shadow-shadow hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-150 cursor-pointer"
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <span className="text-background font-heading text-lg tracking-wide border-b-2 border-background pb-1">
                  View Image
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" onClick={() => navigate('/gallery')}>
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};
