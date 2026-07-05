import React from 'react';
import { Camera, Globe, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Menu', href: '/menu' },
  { name: 'Food Stalls', href: '/stalls' },
  { name: 'Banquets', href: '/banquets' },
  { name: 'Events', href: '/events' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Blog', href: '/blog' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-foreground text-background border-t-4 border-border pt-12 md:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10">

          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 bg-main border-2 border-border shadow-shadow flex items-center justify-center font-heading text-main-foreground text-xl">
                MF
              </div>
              <span className="font-heading text-xl tracking-wide text-background">
                Metro Food Court
              </span>
            </div>
            <p className="text-background/70 leading-relaxed mb-5 text-sm">
              Authentic flavours, vibrant atmosphere, and memories that last a lifetime — all under one roof.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Camera, label: 'Instagram', href: '#' },
                { icon: Globe, label: 'Website', href: '#' },
                { icon: MessageCircle, label: 'WhatsApp', href: 'https://api.whatsapp.com/send/?phone=919711240950' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 border-2 border-border bg-background/10 text-background flex items-center justify-center shadow-shadow hover:bg-main hover:text-main-foreground hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-none transition-all duration-150"
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg mb-4 text-main border-b-2 border-border pb-2">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-main transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-main border border-border flex-shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg mb-4 text-main border-b-2 border-border pb-2">Contact</h3>
            <ul className="space-y-4 text-background/70 text-sm">
              <li>
                <p className="font-heading text-background mb-1">Address</p>
                <p>Gyan Ganga Trade Centre,<br />Chamanchak, Bypass,<br />Patna - 27</p>
              </li>
              <li>
                <p className="font-heading text-background mb-1">Phone</p>
                <a href="tel:+916287601908" className="hover:text-main transition-colors">6287601908</a>
              </li>
              <li>
                <p className="font-heading text-background mb-1">WhatsApp</p>
                <a href="https://api.whatsapp.com/send/?phone=919711240950" target="_blank" rel="noopener noreferrer" className="hover:text-main transition-colors">Chat with us</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-heading text-lg mb-4 text-main border-b-2 border-border pb-2">Opening Hours</h3>
            <ul className="space-y-3 text-background/70 text-sm">
              <li className="flex justify-between border-b border-background/10 pb-2">
                <span>Mon – Fri</span>
                <span className="font-heading text-background">10am – 10pm</span>
              </li>
              <li className="flex justify-between border-b border-background/10 pb-2">
                <span>Sat – Sun</span>
                <span className="font-heading text-background">9am – 11pm</span>
              </li>
            </ul>
            <p className="mt-3 text-xs text-main italic">* timings may vary on public holidays</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t-2 border-background/10 flex flex-col sm:flex-row justify-between items-center text-background/50 text-xs sm:text-sm gap-3">
          <p>&copy; {new Date().getFullYear()} Metro Food Court. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-main transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-main transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
