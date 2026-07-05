import React, { useState } from 'react';
import { Coffee, Flame, UtensilsCrossed, Soup, Sparkles, IceCream, ChevronDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface MenuItem { name: string; isVeg: boolean; badge?: string; }
interface MenuCategory { title: string; icon: React.ComponentType<{ className?: string }>; description: string; items: MenuItem[]; }

const FoodSymbol: React.FC<{ isVeg: boolean }> = ({ isVeg }) => (
  <div className={`w-4 h-4 border-2 flex items-center justify-center flex-shrink-0 ${isVeg ? 'border-green-600' : 'border-red-600'}`}>
    <div className={`w-2 h-2 rounded-full ${isVeg ? 'bg-green-600' : 'bg-red-600'}`} />
  </div>
);

const vegMenu: MenuCategory[] = [
  { title: 'Welcome Drink (Choose 2)', icon: Coffee, description: 'Refreshing hot and cold beverages to greet your guests', items: [{ name: 'Soft Drinks', isVeg: true }, { name: 'Jal Jeera', isVeg: true }, { name: 'Fruit Punch', isVeg: true }, { name: 'Tea', isVeg: true }, { name: 'Coffee', isVeg: true }, { name: 'Khus Surprise', isVeg: true }, { name: 'Rose Blossom', isVeg: true }, { name: 'Blue Lagoon', isVeg: true }, { name: 'Aam Ka Panna', isVeg: true }, { name: 'Mint Mojito', isVeg: true }] },
  { title: 'Soup Veg (Choose 1)', icon: Soup, description: 'Warm, savory vegetable broths', items: [{ name: 'Veg. Manchow Soup', isVeg: true }, { name: 'Veg. Lemon Coriander Soup', isVeg: true }, { name: 'Veg. Hot & Sour Soup', isVeg: true }, { name: 'Veg. Sweet Corn Soup', isVeg: true }, { name: 'Tomato Soup', isVeg: true }, { name: 'Tamater Dhaniya Shorba', isVeg: true }] },
  { title: 'Starter Vegetable (Choose 2)', icon: Flame, description: 'Crispy and spiced starters cooked to perfection', items: [{ name: 'Choice of Paneer Tikka', isVeg: true, badge: 'Popular' }, { name: 'Hara Bhara Kebab', isVeg: true }, { name: 'Aloo Corn Tikki', isVeg: true }, { name: 'Paneer Kurkure', isVeg: true }, { name: 'Paneer Chilli Dry', isVeg: true }, { name: 'Cheese Corn Ball', isVeg: true }, { name: 'Chilli Baby Corn', isVeg: true }, { name: 'Crispy Veg.', isVeg: true }, { name: 'Honey Chilli Potato', isVeg: true }, { name: 'Mushroom Chilli Dry', isVeg: true }] },
  { title: 'Hi-Tea Counter (Choose 2)', icon: Sparkles, description: 'Interactive street food and fast-food counters', items: [{ name: 'Pani-Poori Counter', isVeg: true, badge: 'Live' }, { name: 'Aloo Tikki Chaat', isVeg: true }, { name: 'Papdi Chaat', isVeg: true }, { name: 'Chhola Chaat', isVeg: true }, { name: 'Litti Chokha', isVeg: true }, { name: 'Moong Dal Chilla Counter', isVeg: true, badge: 'Live' }, { name: 'Mini Dosa Counter', isVeg: true, badge: 'Live' }, { name: 'Pav-Bhaji', isVeg: true }, { name: 'Chole Bhature', isVeg: true }] },
  { title: 'Paneer Specialty (Choose 1)', icon: UtensilsCrossed, description: 'Exquisite cottage cheese preparations in various rich gravies', items: [{ name: 'Paneer Butter Masala', isVeg: true }, { name: 'Paneer Lababdar', isVeg: true }, { name: 'Kadhai Paneer', isVeg: true }, { name: 'Paneer Do Pyaza', isVeg: true }, { name: 'Paneer Handi', isVeg: true }, { name: 'Matar Paneer', isVeg: true }, { name: 'Malai Kofta', isVeg: true }, { name: 'Chilly Paneer', isVeg: true }] },
  { title: 'Vegetables Main (Choose 2)', icon: UtensilsCrossed, description: 'Delicious vegetable and potato-based slow cooked curries', items: [{ name: 'Aloo Dum Banarsi', isVeg: true }, { name: 'Veg. Kofta Curry', isVeg: true }, { name: 'Mushroom Matar', isVeg: true }, { name: 'Mix Veg.', isVeg: true }, { name: 'Corn Palak', isVeg: true }, { name: 'Methi Matar Malai', isVeg: true }, { name: 'Veg. Kolhapuri', isVeg: true }, { name: 'Dum Aloo', isVeg: true }] },
  { title: 'Rice & Biryani (Choose 1)', icon: Soup, description: 'Fragrant basmati rice options and traditional biryanis', items: [{ name: 'Moti Pulao', isVeg: true }, { name: 'Veg. Pulao', isVeg: true }, { name: 'Kashmiri Pulao', isVeg: true }, { name: 'Jeera Rice', isVeg: true }, { name: 'Steamed Rice', isVeg: true }, { name: 'Veg. Biryani', isVeg: true }, { name: 'Paneer Biryani', isVeg: true }] },
  { title: 'Dal Specialty (Choose 1)', icon: Soup, description: 'Rich slow-cooked lentils and beans', items: [{ name: 'Dal Makhani', isVeg: true }, { name: 'Dal Panchmel', isVeg: true }, { name: 'Yellow Dal Tadka', isVeg: true }, { name: 'Chana Dal Tadka', isVeg: true }, { name: 'Dal Maharani', isVeg: true }, { name: 'Rajma Raseela', isVeg: true }] },
  { title: 'Assorted Indian Breads (Choose 3)', icon: Soup, description: 'Clay-oven baked flatbreads and deep-fried poories', items: [{ name: 'Naan', isVeg: true }, { name: 'Laccha Paratha', isVeg: true }, { name: 'Methi Paratha', isVeg: true }, { name: 'Tandoori Roti', isVeg: true }, { name: 'Stuffed Poori', isVeg: true }, { name: 'Plain Poori', isVeg: true }] },
  { title: 'Indian Dessert (Choose 1)', icon: IceCream, description: 'Authentic Indian hot and cold desserts', items: [{ name: 'Gulab Jamun', isVeg: true }, { name: 'Moong Dal Halwa', isVeg: true }, { name: 'Rasgulla', isVeg: true }, { name: 'Gajar Halwa', isVeg: true }, { name: 'Jalebi with Rabdi', isVeg: true, badge: 'Special' }, { name: 'Rice Kheer', isVeg: true }] },
  { title: 'Choice of Ice-Cream (Choose 1)', icon: IceCream, description: 'Chilled premium ice cream flavors', items: [{ name: 'Vanilla', isVeg: true }, { name: 'Butterscotch', isVeg: true }, { name: 'Chocolate', isVeg: true }, { name: 'Strawberry', isVeg: true }, { name: 'Mango', isVeg: true }] },
];

const nonVegMenu: MenuCategory[] = [
  ...vegMenu.slice(0, 2),
  { title: 'Soup Non-Veg (Choose 1)', icon: Soup, description: 'Flavorful non-vegetarian broths', items: [{ name: 'Chix Manchow Soup', isVeg: false }, { name: 'Chix Lemon Coriander Soup', isVeg: false }, { name: 'Chix Hot & Sour Soup', isVeg: false }] },
  vegMenu[2],
  { title: 'Starter Non-Veg (Choose 1)', icon: Flame, description: 'Succulent meat kebabs and crispy seafood starters', items: [{ name: 'Choice of Chicken Tikka', isVeg: false, badge: 'Tandoor Special' }, { name: 'Mahi Fish Tikka', isVeg: false }, { name: 'Chicken Malai Tikka', isVeg: false }, { name: 'Chicken Chilli Dry', isVeg: false }, { name: 'Fish Finger', isVeg: false }] },
  ...vegMenu.slice(3, 4),
  { title: 'Main Course Non-Veg (Choose 2)', icon: UtensilsCrossed, description: 'Slow-cooked non-vegetarian chicken and fish options', items: [{ name: 'Chicken Kassa / Adrakhi / Curry / Kadhai / Dehati', isVeg: false, badge: 'Signature' }, { name: 'Rahu Fish Fry / Bengali Fish Curry / Fish Masala', isVeg: false }] },
  ...vegMenu.slice(4),
];

export const BanquetsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'veg' | 'nonveg'>('veg');
  const [expanded, setExpanded] = useState<number | null>(null);
  const currentMenu = activeTab === 'veg' ? vegMenu : nonVegMenu;

  return (
    <div className="pt-24 pb-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="text-center mb-14 flex flex-col items-center">
          <div className="flex justify-center mb-4">
            <Badge>Banquet Packages</Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading text-foreground mb-6">
            Grand Banquet Silver Menus
          </h1>
          <p className="max-w-2xl text-foreground/70 text-lg leading-relaxed">
            Crafting memorable catering experiences for your grand events, weddings, and parties.
          </p>
          <div className="w-24 h-1 bg-main border-2 border-border shadow-shadow mt-8" />
        </div>

        {/* Veg / Non-Veg Tabs */}
        <div className="flex justify-center mb-14">
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as 'veg' | 'nonveg')}>
            <TabsList>
              <TabsTrigger value="veg" className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-600 border border-border" />
                Silver Veg (@900)
              </TabsTrigger>
              <TabsTrigger value="nonveg" className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 border border-border" />
                Silver Non-Veg (@1100)
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {currentMenu.map((category, index) => {
            const IconComponent = category.icon;
            const isOpen = expanded === index;
            return (
              <Card
                key={index}
                className="cursor-pointer hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform duration-150"
                onClick={() => setExpanded(isOpen ? null : index)}
              >
                <CardContent className="p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-main border-2 border-border shadow-shadow flex items-center justify-center text-main-foreground flex-shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-heading text-lg text-foreground leading-tight">{category.title}</h3>
                      <p className="text-foreground/50 text-xs mt-0.5">{category.items.length} items</p>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-foreground/50 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </div>

                  <p className="text-foreground/70 text-sm leading-relaxed">{category.description}</p>

                  {isOpen && (
                    <div className="pt-4 border-t-2 border-border grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                      {category.items.map((item, i) => (
                        <div key={i} className="flex gap-2 items-center py-1">
                          <FoodSymbol isVeg={item.isVeg} />
                          <span className="text-foreground text-sm leading-tight">{item.name}</span>
                          {item.badge && <Badge className="text-[9px] px-1.5 py-0">{item.badge}</Badge>}
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Booking CTA */}
        <Card className="mt-16">
          <CardContent className="flex flex-col items-center text-center gap-6 py-12">
            <h2 className="text-3xl font-heading text-foreground">Book Your Banquet Today</h2>
            <p className="text-foreground/70 text-lg max-w-2xl leading-relaxed">
              Whether you need customized menus, extra live stalls, or structural setups, our team handles it all with perfection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="/#contact">Inquire & Book</a>
              </Button>
              <Button size="lg" variant="neutral" asChild>
                <a href="tel:+916287601908">Call Event Coordinator</a>
              </Button>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};
