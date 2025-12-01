'use client';

import { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { CONTACT } from '@/lib/constants';
import { Phone } from 'lucide-react';

export function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <m.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-navy/10 bg-cream/95 px-4 py-3 shadow-card backdrop-blur-md md:hidden"
        >
          <div className="flex gap-3">
            <Button href="#lead-form" className="flex-1">
              Book a Free Tour
            </Button>
            <Button
              href={`tel:${CONTACT.phone}`}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              Call
            </Button>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
