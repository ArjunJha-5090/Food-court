import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface MenuItem { name: string; price: string; isVeg?: boolean; isEgg?: boolean; }
interface MenuSection { title: string; note?: string; items: MenuItem[]; }

const VegDot: React.FC<{ isVeg?: boolean; isEgg?: boolean }> = ({ isVeg, isEgg }) => {
  if (isEgg) return (
    <span className="inline-flex items-center justify-center w-4 h-4 border-2 border-amber-600 flex-shrink-0">
      <span className="w-2 h-2 rounded-full bg-amber-600" />
    </span>
  );
  if (isVeg) return (
    <span className="inline-flex items-center justify-center w-4 h-4 border-2 border-green-600 flex-shrink-0">
      <span className="w-2 h-2 rounded-full bg-green-600" />
    </span>
  );
  return (
    <span className="inline-flex items-center justify-center w-4 h-4 border-2 border-red-600 flex-shrink-0">
      <span className="w-2 h-2 rounded-full bg-red-600" />
    </span>
  );
};

const MenuCard: React.FC<{ section: MenuSection; accentClass?: string; filterTab: string }> = ({ section, accentClass = 'bg-main', filterTab }) => {
  const filteredItems = section.items.filter(item => {
    if (filterTab === 'all') return true;
    if (filterTab === 'veg') return item.isVeg === true;
    if (filterTab === 'nonveg') return item.isVeg === false || item.isEgg === true;
    return true;
  });

  if (filteredItems.length === 0) return null;

  return (
    <div className="border-2 border-border shadow-shadow overflow-hidden">
      <div className={`${accentClass} px-6 py-4 border-b-2 border-border`}>
        <h3 className="font-heading text-xl text-white uppercase tracking-widest">{section.title}</h3>
        {section.note && <p className="text-white/70 text-xs mt-1">{section.note}</p>}
      </div>
      <ul className="divide-y-2 divide-border bg-secondary-background">
        {filteredItems.map((item, i) => (
          <li key={i} className="flex items-center justify-between gap-3 px-5 py-3 hover:bg-background transition-colors group">
            <div className="flex items-center gap-2.5 min-w-0">
              {(item.isVeg !== undefined || item.isEgg) && <VegDot isVeg={item.isVeg} isEgg={item.isEgg} />}
              <span className="text-sm text-foreground leading-snug">{i + 1}. {item.name}</span>
            </div>
            <span className="font-heading font-bold text-main text-sm whitespace-nowrap">₹{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const indianVeg: MenuSection = { title: 'Indian Veg.', note: 'Full / Half available', items: [{ name: 'Paneer Tikka Masala', price: '370 / 190', isVeg: true }, { name: 'Paneer Butter Masala', price: '300', isVeg: true }, { name: 'Mushroom Masala', price: '350 / 180', isVeg: true }, { name: 'Kadhai Paneer', price: '290', isVeg: true }, { name: 'Malai Kofta', price: '310', isVeg: true }, { name: 'Matar Paneer', price: '200', isVeg: true }, { name: 'Mix Veg', price: '200', isVeg: true }, { name: 'Chana Dal Tadka', price: '140', isVeg: true }, { name: 'Plain Rice', price: '120', isVeg: true }, { name: 'Jeera Rice', price: '140', isVeg: true }, { name: 'Veg Pulao', price: '180', isVeg: true }, { name: 'Veg Biryani', price: '180', isVeg: true }, { name: 'Paneer Pakoda', price: '120', isVeg: true }, { name: 'Raita', price: '50', isVeg: true }] };
const indianNonVeg: MenuSection = { title: 'Indian Non Veg.', note: 'Full / Half available', items: [{ name: 'Chicken Biryani + Raita', price: '230', isVeg: false }, { name: 'Egg Biryani', price: '180', isEgg: true }, { name: 'Chicken Biryani Special', price: '300', isVeg: false }, { name: 'Chicken Kassa', price: '350 / 180', isVeg: false }, { name: 'Chicken Butter Masala', price: '350 / 180', isVeg: false }, { name: 'Chicken Dehati', price: '330 / 170', isVeg: false }, { name: 'Chicken Kadai', price: '340 / 180', isVeg: false }, { name: 'Mutton Curry', price: '480 / 250', isVeg: false }, { name: 'Fish Curry', price: '290', isVeg: false }, { name: 'Fish Fry (4 pcs)', price: '240', isVeg: false }, { name: 'Egg Curry (4 pcs)', price: '180', isEgg: true }, { name: 'Murgh Musallam', price: '590', isVeg: false }, { name: 'Chicken Fry (12 pcs)', price: '360', isVeg: false }] };
const tandoor: MenuSection = { title: 'Tandoor', note: 'Full / Half available', items: [{ name: 'Paneer Tikka', price: '250', isVeg: true }, { name: 'Paneer Malai Tikka', price: '260', isVeg: true }, { name: 'Chicken Tikka', price: '310', isVeg: false }, { name: 'Chicken Malai Tikka', price: '310', isVeg: false }, { name: 'Chicken Tandoori', price: '420 / 220', isVeg: false }, { name: 'Chicken Seekh Kabab', price: '380', isVeg: false }, { name: 'Mutton Seekh Kabab', price: '540 / 260', isVeg: false }, { name: 'Tandoori Momo', price: '190', isVeg: true }, { name: 'Mushroom Tikka', price: '360', isVeg: true }, { name: 'Veg Seekh Kabab', price: '330', isVeg: true }] };
const chinese: MenuSection = { title: 'Chinese', note: 'Full / Half available', items: [{ name: 'Veg Manchurian', price: '220', isVeg: true }, { name: 'Paneer Manchurian', price: '240', isVeg: true }, { name: 'Chicken Lollipop', price: '300', isVeg: false }, { name: 'Chicken Fried Rice', price: '220', isVeg: false }, { name: 'Veg Fried Rice', price: '180', isVeg: true }, { name: 'Egg Fried Rice', price: '180', isEgg: true }, { name: 'Veg Noodles', price: '150', isVeg: true }, { name: 'Chicken Noodles', price: '230', isVeg: false }, { name: 'Schezwan Noodles', price: '190', isVeg: true }, { name: 'Chicken Chilli Boneless', price: '300 / 160', isVeg: false }, { name: 'Paneer Chilli', price: '240', isVeg: true }, { name: 'Honey Chicken Chilli', price: '300', isVeg: false }] };
const soup: MenuSection = { title: 'Soup', items: [{ name: 'Veg Hot & Sour', price: '100', isVeg: true }, { name: 'Chicken Hot & Sour', price: '120', isVeg: false }, { name: 'Veg Manchow', price: '100', isVeg: true }, { name: 'Sweet Corn Veg Soup', price: '100', isVeg: true }, { name: 'Sweet Corn Chicken Soup', price: '120', isVeg: false }] };
const rolls: MenuSection = { title: 'Rolls', items: [{ name: 'Egg Roll', price: '70', isEgg: true }, { name: 'Double Egg Roll', price: '80', isEgg: true }, { name: 'Chicken Roll', price: '100', isVeg: false }, { name: 'Chicken Egg Roll', price: '110', isVeg: false }, { name: 'Chicken Tikka Egg Roll', price: '140', isVeg: false }, { name: 'Paneer Roll', price: '100', isVeg: true }] };
const momo: MenuSection = { title: 'Momo', items: [{ name: 'Paneer Momo Steam', price: '90', isVeg: true }, { name: 'Paneer Momo Fried', price: '100', isVeg: true }, { name: 'Chicken Momo Steam', price: '130', isVeg: false }, { name: 'Chicken Momo Fried', price: '140', isVeg: false }] };
const roti: MenuSection = { title: 'Roti', items: [{ name: 'Tandoori Roti / Butter Roti', price: '25 / 30', isVeg: true }, { name: 'Lachha Paratha', price: '40', isVeg: true }, { name: 'Naan / Butter Naan', price: '35 / 40', isVeg: true }, { name: 'Garlic Naan', price: '45', isVeg: true }, { name: 'Rumali Roti', price: '50', isVeg: true }, { name: 'Veg Kulcha', price: '150', isVeg: true }] };
const thali: MenuSection = { title: 'Thali', items: [{ name: 'Veg Thali', price: '210', isVeg: true }, { name: 'Non Veg Thali', price: '250', isVeg: false }] };
const beverage: MenuSection = { title: 'Beverage', items: [{ name: 'Tea', price: '30', isVeg: true }, { name: 'Coffee', price: '30', isVeg: true }, { name: 'Cold Drink', price: 'On request', isVeg: true }, { name: 'Water', price: 'Complimentary', isVeg: true }] };
const dessert: MenuSection = { title: 'Dessert', items: [{ name: 'Sweets', price: 'Seasonal', isVeg: true }, { name: 'Rasgulla', price: 'Seasonal', isVeg: true }, { name: 'Halwa', price: 'Seasonal', isVeg: true }, { name: 'Dahi Sudha', price: 'Seasonal', isVeg: true }] };

const tabs = [
  { id: 'all', label: 'All' },
  { id: 'veg', label: '🟢 Veg' },
  { id: 'nonveg', label: '🔴 Non Veg' },
  { id: 'tandoor', label: '🔥 Tandoor' },
  { id: 'chinese', label: '🥢 Chinese' },
  { id: 'snacks', label: '🥙 Snacks & More' },
];

export const MenuPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const showCategory = (cat: 'indian' | 'tandoor' | 'chinese' | 'snacks') => {
    if (activeTab === 'all' || activeTab === 'veg' || activeTab === 'nonveg') return true;
    if (activeTab === 'tandoor') return cat === 'tandoor';
    if (activeTab === 'chinese') return cat === 'chinese';
    if (activeTab === 'snacks') return cat === 'snacks';
    return true;
  };

  // item-level filter passed down to MenuCard
  const itemFilter = activeTab;

  return (
    <div className="pt-24 pb-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-4">
            <Badge>Metro Food Court</Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading text-foreground mb-4">Our Full Menu</h1>
          <p className="text-foreground/60 max-w-xl mx-auto text-lg">Fresh ingredients · Authentic recipes · Cooked to order</p>

          {/* Legend */}
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-foreground/70">
            <span className="flex items-center gap-2"><span className="inline-flex items-center justify-center w-4 h-4 border-2 border-green-600"><span className="w-2 h-2 rounded-full bg-green-600" /></span>Vegetarian</span>
            <span className="flex items-center gap-2"><span className="inline-flex items-center justify-center w-4 h-4 border-2 border-red-600"><span className="w-2 h-2 rounded-full bg-red-600" /></span>Non-Veg</span>
            <span className="flex items-center gap-2"><span className="inline-flex items-center justify-center w-4 h-4 border-2 border-amber-600"><span className="w-2 h-2 rounded-full bg-amber-600" /></span>Egg</span>
          </div>
        </div>

        {/* Free Delivery badge */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 bg-main text-main-foreground font-heading text-base uppercase tracking-widest px-8 py-3 border-2 border-border shadow-shadow rotate-[-1deg]">
            🚀 Free Home Delivery
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="-mx-4 px-4 overflow-x-auto scrollbar-none mb-10">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="flex justify-center">
            <TabsList className="min-w-max sm:min-w-0 sm:flex-wrap">
              {tabs.map(tab => (
                <TabsTrigger key={tab.id} value={tab.id}>{tab.label}</TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {showCategory('indian') && <div className="md:col-span-2 xl:col-span-1"><MenuCard section={indianVeg} accentClass="bg-green-700" filterTab={itemFilter} /></div>}
          {showCategory('indian') && <div className="md:col-span-2 xl:col-span-1"><MenuCard section={indianNonVeg} accentClass="bg-red-700" filterTab={itemFilter} /></div>}
          {showCategory('tandoor') && <div className="md:col-span-2 xl:col-span-1"><MenuCard section={tandoor} accentClass="bg-orange-700" filterTab={itemFilter} /></div>}
          {showCategory('chinese') && <div className="md:col-span-2 xl:col-span-1"><MenuCard section={chinese} accentClass="bg-red-600" filterTab={itemFilter} /></div>}
          {showCategory('snacks') && <>
            <div><MenuCard section={soup} accentClass="bg-teal-700" filterTab={itemFilter} /></div>
            <div><MenuCard section={rolls} accentClass="bg-amber-700" filterTab={itemFilter} /></div>
            <div><MenuCard section={momo} accentClass="bg-purple-700" filterTab={itemFilter} /></div>
            <div><MenuCard section={roti} accentClass="bg-yellow-700" filterTab={itemFilter} /></div>
            <div><MenuCard section={thali} accentClass="bg-main" filterTab={itemFilter} /></div>
          </>}
          {showCategory('snacks') && <>
            <div><MenuCard section={beverage} accentClass="bg-sky-700" filterTab={itemFilter} /></div>
            <div><MenuCard section={dessert} accentClass="bg-pink-700" filterTab={itemFilter} /></div>
          </>}
        </div>

        <p className="text-center text-foreground/40 text-xs mt-16">
          * Prices inclusive of all taxes. Menu items and prices subject to change without prior notice.
        </p>
      </div>
    </div>
  );
};
