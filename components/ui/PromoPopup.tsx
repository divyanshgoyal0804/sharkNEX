'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, Gift } from 'lucide-react';
import { m, AnimatePresence } from 'framer-motion';

export function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if popup was already dismissed in this session
    const dismissed = sessionStorage.getItem('promoPopupDismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Show popup after 10 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('promoPopupDismissed', 'true');
  };

  const handleCTAClick = () => {
    handleClose();
    // Scroll to contact section
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Popup */}
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 m-auto flex h-fit w-[640px] max-w-[90vw] flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 shadow-md transition-colors hover:bg-gray-100"
              aria-label="Close popup"
            >
              <X className="h-6 w-6 text-slate-navy" />
            </button>

            {/* Image */}
            <div className="relative h-72 w-full">
              <Image
                src="/hero.webp"
                alt="Sharkspace Coworking"
                fill
                className="object-cover"
                sizes="640px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Badge */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-saffron px-4 py-2">
                <Gift className="h-5 w-5 text-white" />
                <span className="text-sm font-bold text-white">LIMITED OFFER</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 text-center">
              <h3 className="font-heading text-3xl font-bold text-slate-navy">
                Free Coworking Day Pass
              </h3>
              <p className="mt-3 text-lg text-slate-navy/70">
                on inquiry
              </p>

              <button
                onClick={handleCTAClick}
                className="mt-6 w-full rounded-xl bg-sharkspace-blue px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-sharkspace-blue/90 hover:shadow-lg"
              >
                Claim Your Free Day Pass
              </button>

              <p className="mt-4 text-sm text-slate-navy/50">
                No credit card required
              </p>
            </div>
          </m.div>
        </>
      )}
    </AnimatePresence>
  );
}
