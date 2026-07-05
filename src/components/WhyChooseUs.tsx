import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { ShieldCheck, UtensilsCrossed, Coffee, Users, Tag, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  { icon: ShieldCheck, title: 'Hygienic Kitchens', desc: 'Lorem ipsum dolor sit amet consectetur.' },
  { icon: UtensilsCrossed, title: 'Multiple Food Options', desc: 'Adipiscing elit sed do eiusmod tempor.' },
  { icon: Coffee, title: 'Comfortable Seating', desc: 'Incididunt ut labore et dolore magna.' },
  { icon: Users, title: 'Family Friendly', desc: 'Aliqua ut enim ad minim veniam.' },
  { icon: Tag, title: 'Affordable Pricing', desc: 'Quis nostrud exercitation ullamco.' },
  { icon: MapPin, title: 'Prime Location', desc: 'Laboris nisi ut aliquip ex ea commodo.' },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-background border-t-2 border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Choose Metro Food Court"
          subtitle="We pride ourselves on providing an exceptional dining experience that brings people together."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform duration-150">
              <CardContent className="flex flex-col items-center text-center gap-4 pt-6">
                <div className="w-14 h-14 bg-main border-2 border-border shadow-shadow flex items-center justify-center text-main-foreground group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-xl text-foreground">{feature.title}</h3>
                <p className="text-foreground/70 text-sm">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
