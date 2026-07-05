import React, { useState } from 'react';
import { Clock, User, Tag, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const categories = ['All', 'Food Stories', 'Recipes', 'Events', 'Behind the Scenes', 'Culture'];

const blogPosts = [
  { id: 1, title: 'The Art of the Perfect Dum Biryani: A Heritage Recipe', excerpt: 'Journey into the royal kitchens of Lucknow and discover the ancient secrets behind the slow-cooked Dum Biryani that has enchanted food lovers for centuries.', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=1200', category: 'Food Stories', author: 'Chef Rajeev Sharma', date: 'June 28, 2026', readTime: '6 min read', featured: true },
  { id: 2, title: 'How We Source Our Spices: A Journey Across India', excerpt: 'From the pepper farms of Kerala to the saffron fields of Kashmir — we take you on a road trip to find the purest spices for Metro Food Court.', image: 'https://images.unsplash.com/photo-1589301760014-d929f39ce9b0?auto=format&fit=crop&q=80&w=1200', category: 'Behind the Scenes', author: 'Priya Mehta', date: 'June 20, 2026', readTime: '8 min read', featured: false },
  { id: 3, title: 'Celebrating Holi at Metro Food Court: An Event to Remember', excerpt: 'Colours, music, and the finest street food. Read about how we brought the festival of Holi alive inside our food court this spring.', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200', category: 'Events', author: 'Events Team', date: 'June 12, 2026', readTime: '4 min read', featured: false },
  { id: 4, title: '5 South Indian Dishes You Must Try Before You Die', excerpt: 'Idli, Dosa, Sambar, Rasam, and Chettinad Curry — a definitive guide to the most iconic dishes from the southern tip of India.', image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&q=80&w=1200', category: 'Culture', author: 'Ananya Rao', date: 'June 5, 2026', readTime: '5 min read', featured: false },
  { id: 5, title: 'Recipe: Authentic Chaat in 20 Minutes', excerpt: 'Our head chaat-wala shares his foolproof recipe for pani puri, sev puri, and papdi chaat — the perfect snack for any occasion.', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=1200', category: 'Recipes', author: 'Chef Ramesh', date: 'May 29, 2026', readTime: '7 min read', featured: false },
  { id: 6, title: 'Meet Our Chai Master: The Story Behind Every Cup', excerpt: 'Suresh ji has been brewing masala chai for over 30 years. We sit down with him to learn the magic behind the perfect cup.', image: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&q=80&w=1200', category: 'Behind the Scenes', author: 'Deepa Nair', date: 'May 18, 2026', readTime: '5 min read', featured: false },
];

export const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory);

  const featured = filtered.find(p => p.featured) || filtered[0];
  const rest = filtered.filter(p => p.id !== featured?.id);

  return (
    <div className="pt-24 pb-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-4">
            <Badge>Stories & Insights</Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading text-foreground mb-4">
            The Metro Blog
          </h1>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Recipes, cultural stories, behind-the-scenes journeys, and everything in between.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <Tabs value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="flex-wrap h-auto gap-2">
              {categories.map(cat => (
                <TabsTrigger key={cat} value={cat}>{cat}</TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Featured Post */}
        {featured && (
          <Card className="p-0 gap-0 overflow-hidden mb-12 group cursor-pointer hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform duration-150">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-72 lg:h-full min-h-[320px] overflow-hidden border-b-2 lg:border-b-0 lg:border-r-2 border-border">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4">
                  <Badge>Featured</Badge>
                </div>
              </div>
              <CardContent className="p-10 lg:p-14 flex flex-col justify-center gap-4">
                <div className="flex items-center gap-1.5">
                  <Tag className="w-3 h-3 text-main" />
                  <span className="text-main text-xs font-bold tracking-widest uppercase">{featured.category}</span>
                </div>
                <h2 className="font-heading text-3xl lg:text-4xl text-foreground leading-tight">
                  {featured.title}
                </h2>
                <p className="text-foreground/70 leading-relaxed">{featured.excerpt}</p>
                <div className="flex items-center gap-5 text-sm text-foreground/50">
                  <span className="flex items-center gap-1.5"><User className="w-4 h-4" />{featured.author}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{featured.readTime}</span>
                </div>
                <div>
                  <Button className="gap-2">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        )}

        {/* Blog Grid */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map(post => (
              <Card key={post.id} className="p-0 gap-0 overflow-hidden group cursor-pointer hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform duration-150">
                <div className="relative h-52 overflow-hidden border-b-2 border-border">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-3 left-3">
                    <Badge variant="neutral">{post.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col gap-3">
                  <h3 className="font-heading text-xl text-foreground leading-snug">{post.title}</h3>
                  <p className="text-foreground/65 text-sm leading-relaxed flex-grow">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-foreground/45 pt-4 border-t-2 border-border">
                    <span className="flex items-center gap-1.5"><User className="w-3 h-3" />{post.author}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-24 text-foreground/40">
            <p className="text-2xl font-heading">No posts in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};
