import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const contactItems = [
  { icon: MapPin, label: 'Location', value: 'Gyan Ganga Trade Centre,\nChamanchak, Bypass,\nPatna - 27' },
  { icon: Phone, label: 'Phone', value: '+91 (628) 760-1908' },
  { icon: Mail, label: 'Email', value: 'hello@metrofoodcourt.com' },
  { icon: Clock, label: 'Hours', value: 'Mon-Sun: 10am - 10pm' },
];

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 md:py-24 bg-secondary-background border-t-2 border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get In Touch"
          subtitle="We'd love to hear from you. Here's how you can reach us."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactItems.map((item, i) => (
                <Card key={i}>
                  <CardContent className="flex gap-4 pt-6">
                    <div className="w-10 h-10 bg-main border-2 border-border shadow-shadow flex items-center justify-center text-main-foreground flex-shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-heading text-foreground mb-1">{item.label}</p>
                      <p className="text-foreground/70 text-sm whitespace-pre-line">{item.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="w-full h-56 bg-background border-2 border-border shadow-shadow flex items-center justify-center text-foreground/50 font-medium">
              Google Maps Embedded View
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardContent className="flex flex-col gap-4 pt-6">
              <h3 className="font-heading text-2xl text-foreground">Send us a message</h3>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" type="text" placeholder="John Doe" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="message">Your Message</Label>
                <Textarea id="message" rows={4} placeholder="How can we help you?" />
              </div>

              <Button type="button" className="w-full">Send Message</Button>

              <a
                href="https://api.whatsapp.com/send/?phone=919711240950"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 px-6 py-3 border-2 border-border bg-[#25D366] text-white font-heading text-base shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all duration-150"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
