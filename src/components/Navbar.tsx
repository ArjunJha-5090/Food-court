import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Food Stalls', href: '/stalls' },
  { name: 'Menu', href: '/menu' },
  { name: 'Banquets', href: '/banquets' },
  { name: 'Events', href: '/events' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Blog', href: '/blog' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';
  const isTransparent = !isScrolled && isHomePage;

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-transparent'
          : 'bg-background border-b-2 border-border'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className={`h-9 w-9 border-2 border-border rounded-base flex items-center justify-center font-heading text-lg shadow-shadow group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 transition-transform duration-150 ${
              isTransparent ? 'bg-main text-main-foreground' : 'bg-main text-main-foreground'
            }`}>
              MF
            </div>
            <span className={`font-heading uppercase text-2xl tracking-wider transition-colors duration-300 ${
              isTransparent ? 'text-foreground' : 'text-foreground'
            }`}>
              Metro Food
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex">
            {/* Override the NavigationMenu root bg/border with transparent */}
            <NavigationMenu className="bg-transparent border-0 shadow-none p-0">
              <NavigationMenuList className="gap-0.5">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <NavigationMenuItem key={link.name}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={link.href}
                          className={`inline-flex h-9 items-center px-3 py-1.5 text-sm font-heading uppercase tracking-wide border-2 transition-all duration-150
                            ${isActive
                              ? 'border-border bg-main text-main-foreground shadow-shadow -translate-y-0.5 -translate-x-0.5'
                              : isTransparent
                                ? 'border-transparent text-foreground hover:border-border hover:bg-main hover:text-main-foreground hover:shadow-shadow hover:-translate-y-0.5 hover:-translate-x-0.5'
                                : 'border-transparent text-foreground hover:border-border hover:bg-main hover:text-main-foreground hover:shadow-shadow hover:-translate-y-0.5 hover:-translate-x-0.5'
                            }
                          `}
                        >
                          {link.name}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 border-2 border-border rounded-base bg-main text-main-foreground shadow-shadow hover:-translate-y-0.5 hover:-translate-x-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-150"
            >
              {isMobileMenuOpen
                ? <X className="h-5 w-5" strokeWidth={3} />
                : <Menu className="h-5 w-5" strokeWidth={3} />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-background border-b-2 border-border">
          <nav className="px-4 py-4 space-y-1.5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 border-2 border-border font-heading uppercase text-base tracking-wide transition-all duration-150
                    hover:shadow-shadow hover:-translate-y-0.5 hover:-translate-x-0.5
                    ${isActive
                      ? 'bg-main text-main-foreground shadow-shadow -translate-y-0.5 -translate-x-0.5'
                      : 'bg-background text-foreground hover:bg-main hover:text-main-foreground'
                    }
                  `}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
