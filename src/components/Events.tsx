import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const events = [
  {
    title: 'Diwali Special Feast',
    date: 'Oct 24 - Oct 26',
    image: 'https://images.unsplash.com/photo-1514222709107-a180c68d72b4?auto=format&fit=crop&q=80&w=1000',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Holi Food Festival',
    date: 'March 15 - March 17',
    image: 'https://images.unsplash.com/photo-1533606689650-32df9eb7e974?auto=format&fit=crop&q=80&w=1000',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Weekend Family Nights',
    date: 'Every Sat & Sun',
    image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1000',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
];

export const Events: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="events" className="py-12 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Events & Celebrations"
          subtitle="Join us for special occasions and create unforgettable memories with your loved ones."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {events.map((event, index) => (
            <Card key={index} className="p-0 gap-0 overflow-hidden group hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform duration-150">
              <div className="relative h-48 overflow-hidden border-b-2 border-border">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="neutral" className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {event.date}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6 flex flex-col gap-3">
                <h3 className="font-heading text-xl text-foreground">{event.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed flex-grow">{event.description}</p>
                <div className="pt-4 border-t-2 border-border mt-auto">
                  <Button variant="reverse" size="sm">Learn More →</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" onClick={() => navigate('/events')}>
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};
