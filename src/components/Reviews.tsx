import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const reviews = [
  {
    name: 'Rahul Sharma',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amazing experience overall!',
  },
  {
    name: 'Priya Patel',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Best food court in the city.',
  },
  {
    name: 'Amit Kumar',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    rating: 4,
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Great variety of options.',
  },
];

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-12 md:py-24 bg-secondary-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Our Customers Say"
          subtitle="Real experiences from our valued guests."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="relative">
              <CardContent className="flex flex-col items-center text-center gap-4 pt-6">
                <Avatar className="w-16 h-16 border-2 border-border shadow-shadow">
                  <AvatarImage src={review.photo} alt={review.name} />
                  <AvatarFallback className="bg-main text-main-foreground font-heading">
                    {review.name[0]}
                  </AvatarFallback>
                </Avatar>

                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-main fill-main" />
                  ))}
                </div>

                <p className="text-foreground/80 text-sm leading-relaxed italic">
                  "{review.text}"
                </p>

                <p className="font-heading text-foreground font-semibold border-t-2 border-border w-full pt-3">
                  {review.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
