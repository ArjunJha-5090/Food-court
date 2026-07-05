import React, { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Calendar, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const allEvents = [
  { title: 'Diwali Special Feast', date: 'Oct 24 - Oct 26', image: 'https://images.unsplash.com/photo-1514222709107-a180c68d72b4?auto=format&fit=crop&q=80&w=1000', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { title: 'Holi Food Festival', date: 'March 15 - March 17', image: 'https://images.unsplash.com/photo-1533606689650-32df9eb7e974?auto=format&fit=crop&q=80&w=1000', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { title: 'Weekend Family Nights', date: 'Every Sat & Sun', image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1000', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
  { title: 'Live Music Evenings', date: 'Every Friday', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1000', description: 'Enjoy live performances from local bands while you dine.' },
  { title: 'Kids Culinary Workshop', date: '1st Sunday of Month', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1000', description: 'Fun cooking and decorating workshops for kids under 12.' },
];

export const EventsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = allEvents.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24 pb-24 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="All Events & Celebrations"
          subtitle="Explore our calendar of upcoming events and special celebrations."
        />

        <div className="max-w-md mx-auto mb-12 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40 w-5 h-5 z-10" />
          <Input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {filteredEvents.length === 0 ? (
          <div className="text-center py-16">
            <p className="font-heading text-2xl text-foreground/50">No events found matching "{searchTerm}"</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, index) => (
              <Card key={index} className="p-0 gap-0 overflow-hidden group hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform duration-150">
                <div className="relative h-48 overflow-hidden border-b-2 border-border">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-3 left-3">
                    <Badge variant="neutral" className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />{event.date}
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
        )}
      </div>
    </div>
  );
};
