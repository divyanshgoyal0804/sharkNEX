'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { m, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { CONTACT } from '@/lib/constants';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Plans', href: '#pricing' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Locations', href: '#locations' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-cream/95 shadow-soft backdrop-blur-md'
          : 'bg-cream/80 backdrop-blur-sm md:bg-transparent'
      )}
    >
      <Container size="wide">
        <nav className="flex h-14 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo1.webp"
              alt="Sharkspace Coworking Logo - Shared Office Space Sector 132 Noida Expressway"
              width={150}
              height={50}
              priority
              className="h-8 w-auto md:h-auto md:w-auto"
            />
            <span className="font-heading text-2xl font-bold text-slate-navy">
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-navy/70 transition-colors hover:text-slate-navy"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={`tel:${CONTACT.phone}`}
              className="flex items-center gap-2 text-sm font-medium text-slate-navy/70 transition-colors hover:text-slate-navy"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden lg:inline">{CONTACT.phoneDisplay}</span>
            </a>
            <Button href="#lead-form" size="sm">
              Book a Tour
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 text-slate-navy shadow-sm md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <m.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-slate-navy/10 bg-cream md:hidden"
          >
            <Container>
              <div className="py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 text-base font-medium text-slate-navy/70"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-4 flex flex-col gap-3">
                  <Button href="#lead-form" className="w-full">
                    Book a Tour
                  </Button>
                  <Button
                    href={`tel:${CONTACT.phone}`}
                    variant="outline"
                    className="w-full"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                </div>
              </div>
            </Container>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
