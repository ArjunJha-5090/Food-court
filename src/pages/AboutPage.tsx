import React from 'react';
import { Heart, Flame, Leaf } from 'lucide-react';
import { GiElephant, GiLotus } from 'react-icons/gi';

// Micro-designs and decorative elements
const CornerFiligree = ({ className }: { className?: string }) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className={`absolute text-accent/30 pointer-events-none ${className}`}>
    <path d="M0 0H16C33.6731 0 48 14.3269 48 32V48H46C46 22.594 25.406 2 0 2V0Z" fill="currentColor"/>
    <path d="M0 8H8C24.5685 8 38 21.4315 38 38V48H36C36 28.1177 19.8823 12 0 12V8Z" fill="currentColor"/>
  </svg>
);

const DiyaMotif = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="currentColor" className={`text-accent ${className}`}>
    <path d="M50 10 C50 10 65 30 65 45 C65 60 50 65 50 65 C50 65 35 60 35 45 C35 30 50 10 50 10 Z" className="text-primary animate-pulse" />
    <path d="M20 60 C20 60 20 85 50 85 C80 85 80 60 80 60 C80 60 50 75 20 60 Z" />
    <path d="M30 80 L70 80 L65 95 L35 95 Z" opacity="0.7"/>
  </svg>
);

const RangoliWatermark = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="currentColor" className={className}>
    <g opacity="0.4">
      <path d="M50 0 C60 25 75 40 100 50 C75 60 60 75 50 100 C40 75 25 60 0 50 C25 40 40 25 50 0 Z" />
      <path d="M50 15 C55 30 70 45 85 50 C70 55 55 70 50 85 C45 70 30 55 15 50 C30 45 45 30 50 15 Z" transform="rotate(45 50 50)" fill="currentColor" opacity="0.6"/>
      <circle cx="50" cy="50" r="10" />
    </g>
  </svg>
);

const DecorativeLine = () => (
  <div className="indian-divider">
    <div className="indian-divider-motif">
      <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
      <DiyaMotif className="w-6 h-6" />
      <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
    </div>
  </div>
);

export const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Flame,
      title: 'Parampara',
      subtitle: 'Tradition',
      description: 'Rooted in centuries-old recipes, our culinary techniques have been meticulously preserved to offer the true essence of Indian street food.',
    },
    {
      icon: Heart,
      title: 'Atithi',
      subtitle: 'Hospitality',
      description: 'Embracing "Atithi Devo Bhava", we treat every guest as a divine visitor, offering sophisticated warmth and unmatched service.',
    },
    {
      icon: Leaf,
      title: 'Shuddhata',
      subtitle: 'Purity',
      description: 'Sourcing only the finest hand-ground spices and fresh produce, ensuring an authentic, pristine, and soulful dining experience.',
    },
  ];

  return (
    <div className="pt-24 pb-24 min-h-screen relative overflow-hidden bg-background">
      {/* Subtle textured background */}
      <div className="absolute inset-0 bg-indian-pattern opacity-[0.02] mix-blend-multiply pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20 flex flex-col items-center">
          <div className="relative mb-10 mt-8 group">
            <div className="absolute inset-[-16px] rounded-full border border-accent/40 border-dashed animate-[spin_30s_linear_infinite] transition-all group-hover:border-accent" />
            <div className="absolute inset-[-8px] rounded-full border border-primary/20 transition-all group-hover:scale-105" />
            <img 
              src="/assets/images/logo.png" 
              alt="Metro Food Court Logo" 
              className="w-28 h-28 object-contain rounded-full border-4 border-surface shadow-premium relative z-10 bg-white"
            />
          </div>
          
          <span className="inline-flex items-center gap-2 py-1.5 px-5 rounded-full bg-surface border border-accent/30 text-xs font-sans font-bold tracking-[0.25em] text-primary uppercase mb-6 shadow-sm">
            <span className="w-1 h-1 rounded-full bg-accent"></span>
            Heritage & Craft
            <span className="w-1 h-1 rounded-full bg-accent"></span>
          </span>
          
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-2 w-full">
            <GiElephant className="w-10 h-10 md:w-16 md:h-16 text-primary opacity-90 scale-x-[-1]" />
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-normal text-secondary tracking-tight">
              The Soul of Indian Cuisine
            </h1>
            <GiElephant className="w-10 h-10 md:w-16 md:h-16 text-primary opacity-90" />
          </div>
          
          <DecorativeLine />
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
          {/* Image Container with Mughal Arch inspiration */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-t-[10rem] rounded-b-sm blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="aspect-[3/4] rounded-t-[10rem] rounded-b-sm overflow-hidden shadow-heritage relative z-10 border-8 border-surface p-2 bg-surface">
              <CornerFiligree className="top-0 left-0" />
              <CornerFiligree className="top-0 right-0 scale-x-[-1]" />
              <img 
                src="https://images.unsplash.com/photo-1589301760014-d929f39ce9b0?auto=format&fit=crop&q=80&w=1974" 
                alt="Traditional Indian Spices" 
                className="w-full h-full object-cover rounded-t-[9.5rem] rounded-b-sm group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-60 rounded-t-[9.5rem]"></div>
            </div>
          </div>

          {/* Typography & Copy */}
          <div className="lg:col-span-7 lg:pl-10">
            <h2 className="text-3xl lg:text-5xl font-heading text-secondary mb-8 leading-[1.1]">
              A Curated Journey of <br/>
              <span className="text-primary italic font-serif flex items-center gap-3">
                Flavours & Tradition <GiLotus className="w-8 h-8 text-accent" />
              </span>
            </h2>
            <div className="space-y-6 text-text text-lg leading-relaxed font-sans font-light">
              <p className="first-letter:text-5xl first-letter:font-heading first-letter:text-primary first-letter:mr-2 first-letter:float-left">
                In the bustling heart of the city, Metro Food Court was conceived from a profound vision: to distill the electrifying energy and unparalleled depth of authentic Indian cuisine, presenting it in a refined environment that honors its roots.
              </p>
              <p>
                From the complex, layered spices of Delhi's historic lanes to the fragrant, delicate preparations of the South, our menu is a meticulously curated mosaic. We collaborate directly with regional artisans and farmers, ensuring every pinch of spice carries the unadulterated essence of the subcontinent.
              </p>
              
              <div className="relative py-6 my-8">
                {/* Elegant quote border */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent to-transparent"></div>
                <blockquote className="pl-8">
                  <p className="font-heading text-2xl text-primary leading-snug tracking-wide">
                    "Gastronomy is not merely sustenance; it is the most intimate celebration of our shared history and culture."
                  </p>
                </blockquote>
              </div>
              
              <p>
                We invite you to partake in this timeless celebration. Whether indulging in a nostalgic delicacy or discovering a new regional specialty, you become part of an enduring legacy of culinary excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="relative">
          {/* Subtle background frame */}
          <div className="absolute inset-0 border border-accent/20 rounded-3xl transform translate-x-3 translate-y-3 pointer-events-none hidden md:block"></div>
          
          <div className="bg-surface rounded-3xl shadow-premium p-12 lg:p-20 relative overflow-hidden border border-accent/10">
            <div className="absolute inset-0 opacity-[0.03] bg-henna-pattern pointer-events-none" />
            
            {/* Giant Indian Assets as Watermarks */}
            <RangoliWatermark className="absolute -bottom-48 -right-48 w-[800px] h-[800px] text-accent/5 animate-[spin_120s_linear_infinite] pointer-events-none" />
            <GiLotus className="absolute -top-32 -left-32 w-[600px] h-[600px] text-primary/5 pointer-events-none" />
            
            <CornerFiligree className="top-4 left-4 text-primary/20" />
            <CornerFiligree className="top-4 right-4 text-primary/20 scale-x-[-1]" />
            <CornerFiligree className="bottom-4 left-4 text-primary/20 scale-y-[-1]" />
            <CornerFiligree className="bottom-4 right-4 text-primary/20 scale-x-[-1] scale-y-[-1]" />
            
            <div className="relative z-10 text-center mb-16">
              <span className="text-accent font-sans font-semibold tracking-[0.2em] uppercase text-sm mb-3 block">Our Philosophy</span>
              <h2 className="text-4xl font-heading text-secondary">The Three Pillars</h2>
              <DecorativeLine />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative z-10">
              {values.map((value, index) => (
                <div key={index} className="text-center group flex flex-col items-center">
                  <div className="relative mb-8 w-24 h-24 flex items-center justify-center">
                    {/* Rotating outer dash ring */}
                    <div className="absolute inset-0 rounded-full border border-dashed border-accent/50 group-hover:rotate-180 transition-transform duration-1000"></div>
                    {/* Inner solid ring */}
                    <div className="absolute inset-2 rounded-full border border-primary/10 bg-background group-hover:bg-primary/5 transition-colors duration-500"></div>
                    
                    <value.icon className="w-10 h-10 text-primary relative z-10 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="font-heading text-2xl text-secondary mb-1 tracking-wide group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-accent text-sm font-bold tracking-[0.15em] uppercase mb-4">
                    {value.subtitle}
                  </p>
                  <p className="text-text/80 leading-relaxed font-light text-sm lg:text-base">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
