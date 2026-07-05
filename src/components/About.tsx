import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Sparkles, Utensils } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const About: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Sparkles,
      title: 'Hygienic Environment',
      description: 'Sed do eiusmod tempor incididunt ut labore.',
    },
    {
      icon: Utensils,
      title: 'Authentic Flavour',
      description: 'Duis aute irure dolor in reprehenderit in voluptate.',
    },
  ];

  return (
    <section id="about" className="py-12 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image Side */}
          <div className="relative">
            <div className="border-4 border-border shadow-brutal-lg">
              <img
                src="/assets/images/image.png"
                alt="Birthday Party Setup at Metro Food Court"
                className="w-full h-full object-cover aspect-[4/3] md:aspect-[4/5]"
              />
            </div>
          </div>

          {/* Content Side */}
          <div>
            <SectionHeading
              title="Welcome to Metro Food Court"
              subtitle="Where tradition meets modern culinary excellence in the heart of Patna."
              centered={false}
            />

            <p className="text-foreground/80 text-lg mb-8 leading-relaxed">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <Card key={index}>
                  <CardContent className="flex gap-4 pt-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-main border-2 border-border shadow-shadow flex items-center justify-center text-main-foreground">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg text-foreground mb-1">{feature.title}</h3>
                      <p className="text-foreground/70 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button size="lg" variant="neutral" onClick={() => navigate('/about')}>
              Read Our Full Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
