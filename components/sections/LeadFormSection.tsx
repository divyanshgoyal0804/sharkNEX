'use client';

import { useState } from 'react';
import { m } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { CONTACT } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { Phone, Zap, CheckCircle } from 'lucide-react';

const requirementOptions = [
  { value: 'hot-desk', label: 'Hot Desk (1 person)' },
  { value: 'dedicated-desk', label: 'Dedicated Desk (1 person)' },
  { value: 'cabin-2-4', label: 'Private Cabin (2-4 seats)' },
  { value: 'cabin-5-10', label: 'Private Cabin (5-10 seats)' },
  { value: 'team-suite', label: 'Team Suite (10+ seats)' },
  { value: 'meeting-room', label: 'Meeting Room Only' },
  { value: 'other', label: 'Other / Not Sure' },
];

export function LeadFormSection() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    requirement: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="lead-form" className="bg-slate-navy py-16 md:py-24">
      <Container size="narrow">
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <m.div variants={fadeInUp} className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-[44px]">
              Ready to Book a Tour or Get Pricing?
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Tell us your team size and workspace preference — we'll share
              availability and offers instantly.
            </p>
          </m.div>

          <m.div variants={fadeInUp}>
            <Card className="overflow-hidden" animate={false}>
              {isSubmitted ? (
                <div className="py-8 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-forest-green/10">
                    <CheckCircle className="h-8 w-8 text-forest-green" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-slate-navy">
                    Thank You!
                  </h3>
                  <p className="mt-2 text-slate-navy/70">
                    Our team will reach out within 10 minutes.
                  </p>
                  <Button
                    href={`tel:${CONTACT.phone}`}
                    variant="outline"
                    className="mt-6"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us Now
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Input
                      id="name"
                      placeholder="Your Name"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      required
                    />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Mobile Number"
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState({ ...formState, phone: e.target.value })
                      }
                      required
                    />
                  </div>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    required
                  />
                  <Select
                    id="requirement"
                    options={requirementOptions}
                    placeholder="Select your requirement"
                    value={formState.requirement}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        requirement: e.target.value,
                      })
                    }
                    required
                  />

                  <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                    <Button
                      type="submit"
                      className="flex-1"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Request a Callback'}
                    </Button>
                    <Button
                      href={`tel:${CONTACT.phone}`}
                      variant="outline"
                      className="sm:w-auto"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </Button>
                  </div>

                  <div className="flex items-center justify-center gap-2 pt-2">
                    <Zap className="h-4 w-4 text-saffron" />
                    <span className="text-sm text-slate-navy/60">
                      Quick response — usually under 10 minutes
                    </span>
                  </div>
                </form>
              )}
            </Card>
          </m.div>
        </m.div>
      </Container>
    </section>
  );
}
