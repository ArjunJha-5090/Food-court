import React from 'react';
import { SectionHeading } from './ui/SectionHeading';

const specialities = [
  { name: 'North Indian', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=800' },
  { name: 'South Indian', image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&q=80&w=800' },
  { name: 'Chinese', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800' },
  { name: 'Street Food', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800' },
  { name: 'Beverages', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&q=80&w=800' },
  { name: 'Desserts', image: 'https://images.unsplash.com/photo-1515037893149-de7f840978e2?auto=format&fit=crop&q=80&w=800' },
];

export const Specialities: React.FC = () => {
  return (
    <section id="specialities" className="py-12 md:py-24 bg-background border-t-2 border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Metro Specialities"
          subtitle="Discover the most loved and highly recommended dishes across our entire food court."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {specialities.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden border-2 border-border shadow-shadow hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-150 cursor-pointer aspect-[4/3]"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/50 group-hover:bg-foreground/70 transition-colors duration-200" />
              <div className="absolute inset-0 p-4 flex flex-col justify-end">
                <h3 className="font-heading text-xl md:text-2xl text-background">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
