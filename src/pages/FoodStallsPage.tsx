import React, { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Specialities } from '../components/Specialities';
import { Reviews } from '../components/Reviews';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Contact } from '../components/Contact';
import { FinalCTA } from '../components/FinalCTA';
import { Star, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const allStalls = [
  { name: 'Royal Tandoor', category: 'North Indian', image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80&w=2070', description: 'Authentic clay-oven cooking with rich gravies, freshly baked breads, and aromatic kebabs straight from the tandoor.', rating: '4.8' },
  { name: 'Chaat Junction', category: 'Street Food', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000', description: 'The iconic flavours of India\'s street food scene — from pani puri to papdi chaat, every bite is an explosion of taste.', rating: '4.9' },
  { name: 'Dosa Express', category: 'South Indian', image: 'https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?auto=format&fit=crop&q=80&w=2000', description: 'Crisp, golden dosas served with an array of chutneys and sambar, bringing the spirit of South India to your plate.', rating: '4.7' },
  { name: 'Biryani House', category: 'Mughlai', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=2000', description: 'Slow-cooked Dum Biryani layered with fragrant basmati rice and premium ingredients — a regal Mughal feast.', rating: '4.9' },
  { name: 'Sweet Treats', category: 'Desserts', image: 'https://images.unsplash.com/photo-1585237466854-4775438865f9?auto=format&fit=crop&q=80&w=2000', description: 'From creamy kulfi to delicate gulab jamun, our dessert stall is a sweet ending to every perfect meal.', rating: '4.6' },
  { name: 'Chai Point', category: 'Beverages', image: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&q=80&w=2000', description: 'Artisanal masala chai, fresh lassi, and refreshing sherbets brewed to perfection for every palate.', rating: '4.8' },
  { name: 'Pizza Corner', category: 'Italian', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=2000', description: 'Delicious wood-fired pizzas with authentic Italian ingredients and flavors.', rating: '4.5' },
  { name: 'Burger Joint', category: 'Fast Food', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=2000', description: 'Juicy, gourmet burgers served with crispy fries and special house sauce.', rating: '4.7' },
];

export const FoodStallsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStalls = allStalls.filter(stall =>
    stall.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    stall.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <div className="pt-24 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="All Food Stalls"
            subtitle="Discover all the amazing culinary options available at Metro Food Court."
          />

          {/* Search */}
          <div className="max-w-md mx-auto mb-12 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40 w-5 h-5 z-10" />
            <Input
              type="text"
              placeholder="Search by name or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {filteredStalls.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-heading text-2xl text-foreground/50">No stalls found matching "{searchTerm}"</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStalls.map((stall, index) => (
                <Card key={index} className="p-0 gap-0 overflow-hidden group hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform duration-150">
                  <div className="relative h-56 overflow-hidden border-b-2 border-border">
                    <img src={stall.image} alt={stall.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute top-3 right-3">
                      <Badge className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-main-foreground" />{stall.rating}
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
          )}
        </div>
      </div>

      <Specialities />
      <Reviews />
      <WhyChooseUs />
      <Contact />
      <FinalCTA />
    </div>
  );
};
