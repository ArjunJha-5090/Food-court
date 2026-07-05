import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden border-t-2 border-border">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1400")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-foreground/85" />
      </div>

      {/* Top accent bar */}
      <div className="absolute top-0 left-0 w-full h-2 bg-main border-b-2 border-border z-10" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading text-background mb-6 uppercase">
          Visit Metro Food Court Today
        </h2>

        <p className="text-lg text-background/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          From street food to grand banquets — every visit is an experience worth coming back for. Come hungry, leave happy.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button
            size="lg"
            variant="neutral"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto gap-2"
          >
            <MapPin className="w-4 h-4" />
            Get Directions
          </Button>
          <Button
            size="lg"
            variant="reverse"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto gap-2"
          >
            <Phone className="w-4 h-4" />
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};
