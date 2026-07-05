import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1000', span: 'col-span-1 md:col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=1000', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1596450514735-111a2fe02935?auto=format&fit=crop&q=80&w=1000', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1000', span: 'col-span-1 md:col-span-2 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=1000', span: 'col-span-1 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1000', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000', span: 'col-span-1 md:col-span-3 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?auto=format&fit=crop&q=80&w=1000', span: 'col-span-1 row-span-1' },
];

const videos = [
  { src: '/assets/videos/video-1.mp4', title: 'Grand Opening Night — Metro Food Court' },
  { src: '/assets/videos/video-2.mp4', title: 'Behind the Scenes: Making of Our Dum Biryani' },
  { src: '/assets/videos/video-3.mp4', title: 'Holi Festival 2026 at Metro Food Court' },
  { src: '/assets/videos/video-4.mp4', title: 'A Day in the Life of Our Chai Master' },
  { src: '/assets/videos/video-5.mp4', title: 'Customer Testimonials & Food Court Tour' },
];

export const GalleryPage: React.FC = () => {
  return (
    <div className="pt-20 md:pt-24 pb-12 md:pb-24 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Photo Gallery */}
        <SectionHeading
          title="Our Gallery"
          subtitle="Immerse yourself in the Metro Food Court experience through our diverse collection of moments."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[140px] md:auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden border-2 border-border shadow-shadow hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-150 cursor-pointer ${image.span}`}
            >
              <img
                src={image.src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <span className="text-background font-heading text-lg border-b-2 border-background pb-1">
                  View Image
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="mt-24">
          <div className="flex justify-center mb-4">
            <Badge>Video Gallery</Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading text-foreground text-center mb-3">
            Our Stories in Motion
          </h2>
          <p className="text-foreground/60 text-center mb-12 max-w-xl mx-auto">
            Watch our events, behind-the-scenes moments, and customer experiences come to life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <Card
                key={index}
                className={`p-0 gap-0 overflow-hidden ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
              >
                <video
                  src={video.src}
                  controls
                  preload="metadata"
                  className={`w-full border-b-2 border-border bg-foreground ${index === 0 ? 'h-72' : 'h-52'}`}
                >
                  Your browser does not support the video tag.
                </video>
                <CardContent className="p-5">
                  <h3 className="font-heading text-foreground text-lg leading-snug">{video.title}</h3>
                  <p className="text-foreground/50 text-xs mt-1">Metro Food Court • Official</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
