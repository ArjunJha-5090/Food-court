import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Flame } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background pt-16">
      
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23111111\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mt-6 lg:mt-10">
        
        {/* Left Text Block */}
        <div className="flex-1 text-center lg:text-left w-full">
          <div className="inline-block bg-primary text-white font-heading px-3 py-1.5 sm:px-4 sm:py-2 border-2 border-secondary uppercase tracking-widest mb-4 sm:mb-6 rotate-[-2deg] shadow-brutal-sm text-xs sm:text-sm">
            Est. 2024 • The Best In Town
          </div>
          
          <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-heading text-secondary mb-4 sm:mb-6 leading-[0.9] uppercase">
            Serious <br />
            <span className="text-primary" style={{ textShadow: '3px 3px 0px #111111' }}>Flavour.</span><br />
            Zero BS.
          </h1>
          
          <p className="text-base sm:text-xl text-secondary/80 font-sans max-w-2xl mx-auto lg:mx-0 mb-8 sm:mb-10 font-bold leading-relaxed">
            Drop in for mind-blowing food stalls, epic banquets, and vibes that never quit. Come hungry.
          </p>
      
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-6">
            <Button 
              size="lg" 
              icon={ArrowRight}
              className="w-full sm:w-auto text-lg sm:text-2xl"
              onClick={() => navigate('/stalls')}
            >
              Feed Me
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              icon={Flame} 
              className="w-full sm:w-auto text-lg sm:text-2xl bg-accent"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Find Us
            </Button>
          </div>
        </div>

        {/* Right Graphic/Image Block — visible md+ */}
        <div className="flex-1 relative w-full max-w-sm sm:max-w-lg lg:max-w-none hidden md:block">
          {/* Main Hero Image in a Brutalist Card */}
          <div className="relative z-10 border-4 border-secondary bg-white p-2 shadow-brutal-lg rotate-[3deg] transition-transform hover:rotate-0 duration-300">
            <img 
              src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=900" 
              alt="Epic Burger" 
              className="w-full h-auto object-cover border-2 border-secondary"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          
          {/* Decorative Badge */}
          <div className="absolute -bottom-8 -left-8 z-20 bg-accent rounded-full h-24 w-24 lg:h-32 lg:w-32 border-4 border-secondary shadow-brutal flex items-center justify-center animate-[spin_15s_linear_infinite]">
            <div className="text-center">
              <span className="block font-heading text-xl lg:text-2xl leading-none text-secondary">100%</span>
              <span className="block font-heading text-base lg:text-xl leading-none text-secondary uppercase">Fresh</span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Footer for Hero */}
      <div className="w-full bg-primary border-y-4 border-secondary mt-12 lg:mt-20 overflow-hidden py-2.5 relative z-10">
        <div className="animate-marquee whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-xl sm:text-3xl font-heading text-white uppercase mx-6 sm:mx-8" style={{ textShadow: '2px 2px 0px #111111' }}>
              • Burgers • Pizzas • Tacos • Sushi • BBQ •
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
