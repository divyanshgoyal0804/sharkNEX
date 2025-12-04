'use client';

import { useState } from 'react';
import { m } from 'framer-motion';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { CONTACT } from '@/lib/constants';
import { fadeInUp } from '@/lib/animations';
import { sendHeroForm } from '@/lib/email';
import { Phone, CheckCircle, ArrowRight } from 'lucide-react';

export function HeroForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    requirement: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const success = await sendHeroForm(
        formState.name,
        formState.email,
        formState.phone
      );

      if (success) {
        setIsSubmitted(true);
      } else {
        setError('Failed to send. Please try again or call us directly.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <m.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="w-full max-w-2xl rounded-3xl border border-slate-navy/10 bg-white p-6 shadow-card md:p-10"
    >
      <h3 className="mb-4 font-heading text-xl font-semibold text-slate-navy md:mb-8 md:text-2xl">
        Request a Call Back
      </h3>

      {isSubmitted ? (
        <div className="py-4 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-forest-green/10">
            <CheckCircle className="h-6 w-6 text-forest-green" />
          </div>
          <p className="font-heading font-semibold text-slate-navy">
            Thank You!
          </p>
          <p className="mt-1 text-sm text-slate-navy/70">
            We'll call you within 10 minutes.
          </p>
          <Button
            href={`tel:${CONTACT.phone}`}
            variant="outline"
            size="sm"
            className="mt-4"
          >
            <Phone className="mr-2 h-4 w-4" />
            Call Now
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            id="hero-name"
            label="Your Name"
            placeholder="Full Name"
            value={formState.name}
            onChange={(e) =>
              setFormState({ ...formState, name: e.target.value })
            }
            required
            className="h-12"
          />
          <Input
            id="hero-email"
            type="email"
            label="Your Email"
            placeholder="Email Address"
            value={formState.email}
            onChange={(e) =>
              setFormState({ ...formState, email: e.target.value })
            }
            required
            className="h-12"
          />
          <Input
            id="hero-phone"
            type="tel"
            label="Mobile Number"
            placeholder="Mobile"
            value={formState.phone}
            onChange={(e) =>
              setFormState({ ...formState, phone: e.target.value })
            }
            required
            className="h-12"
          />
         

          <Button
            type="submit"
            className="mt-2 w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              'Submitting...'
            ) : (
              <>
                Request Callback
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>

          {error && (
            <p className="text-center text-sm text-red-500">{error}</p>
          )}

          <div className="flex items-center justify-center gap-1.5 pt-2">
            <br />         
          </div>
        </form>
      )}
    </m.div>
  );
}
