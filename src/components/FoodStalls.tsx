import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const stalls = [
  {
    name: 'Royal Tandoor',
    category: 'North Indian',
    image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80&w=2070',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
    rating: '4.8',
  },
  {
    name: 'Chaat Junction',
    category: 'Street Food',
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    rating: '4.9',
  },
  {
    name: 'Dosa Express',
    category: 'South Indian',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?auto=format&fit=crop&q=80&w=2000',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
    rating: '4.7',
  },
];

export const FoodStalls: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="stalls" className="py-12 md:py-24 bg-secondary-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Food Stalls"
          subtitle="Explore a diverse range of culinary delights brought to you by our premium vendors."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {stalls.map((stall, index) => (
            <Card key={index} className="p-0 gap-0 overflow-hidden group hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform duration-150">
              <div className="relative h-56 overflow-hidden border-b-2 border-border">
                <img
                  src={stall.image}
                  alt={stall.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3">
                  <Badge className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-main-foreground" />
                    {stall.rating}
                  </Badge>
                </div>
                <div className="absolute bottom-3 left-3">
                  <Badge variant="neutral">{stall.category}</Badge>
                </div>
              </div>
              <CardContent className="p-6 flex flex-col gap-3">
                <h3 className="font-heading text-2xl text-foreground">{stall.name}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed flex-grow">{stall.description}</p>
                <div className="pt-4 border-t-2 border-border mt-auto">
                  <Button variant="reverse" size="sm">View Menu →</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" onClick={() => navigate('/stalls')}>
            View All Stalls
          </Button>
        </div>
      </div>
    </section>
  );
};
