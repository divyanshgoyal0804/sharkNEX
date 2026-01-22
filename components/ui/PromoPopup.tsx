'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, Gift, CheckCircle, Loader2 } from 'lucide-react';
import { m, AnimatePresence } from 'framer-motion';
import { sendLeadForm } from '@/lib/email';

export function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const success = await sendLeadForm(
        formData.name,
        formData.email,
        formData.phone,
        'Free Day Pass Inquiry (Popup)'
      );

      if (success) {
        setIsSubmitted(true);
        // Auto close after 3 seconds on success
        setTimeout(() => {
          handleClose();
        }, 3000);
      } else {
        setError('Failed to send. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
                sizes="(max-width: 640px) 90vw, 640px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Badge */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-saffron px-4 py-2">
                <Gift className="h-5 w-5 text-white" />
                <span className="text-sm font-bold text-white">LIMITED OFFER</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              {isSubmitted ? (
                <div className="py-4">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-slate-navy">
                    Thank You!
                  </h3>
                  <p className="mt-2 text-slate-navy/70">
                    We&apos;ll contact you shortly with your free day pass.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-heading text-2xl font-bold text-slate-navy">
                    Free Coworking Day Pass
                  </h3>
                  <p className="mt-1 text-sm text-slate-navy/70">
                    Fill in your details to claim your free pass
                  </p>

                  <form onSubmit={handleSubmit} className="mt-4 space-y-3 text-left">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-slate-navy/20 px-4 py-3 text-sm outline-none transition-colors focus:border-sharkspace-blue focus:ring-2 focus:ring-sharkspace-blue/20"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-slate-navy/20 px-4 py-3 text-sm outline-none transition-colors focus:border-sharkspace-blue focus:ring-2 focus:ring-sharkspace-blue/20"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-slate-navy/20 px-4 py-3 text-sm outline-none transition-colors focus:border-sharkspace-blue focus:ring-2 focus:ring-sharkspace-blue/20"
                      />
                    </div>

                    {error && (
                      <p className="text-center text-sm text-red-500">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-xl bg-sharkspace-blue px-6 py-3 text-base font-semibold text-white transition-all hover:bg-sharkspace-blue/90 hover:shadow-lg disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Submitting...
                        </span>
                      ) : (
                        'Claim Your Free Day Pass'
                      )}
                    </button>
                  </form>

                  <p className="mt-3 text-xs text-slate-navy/50">
                    No credit card required
                  </p>
                </>
              )}
            </div>
          </m.div>
        </>
      )}
    </AnimatePresence>
  );
}
