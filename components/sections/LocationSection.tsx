'use client';

import { m } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { CONTACT } from '@/lib/constants';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '@/lib/animations';
import { MapPin, Car, Coffee, Shield } from 'lucide-react';

const highlights = [
  { icon: Car, text: 'Ample parking' },
  { icon: Shield, text: 'Safe neighbourhood' },
  { icon: Coffee, text: 'Cafes & food courts nearby' },
];

export function LocationSection() {
  return (
    <section id="location" className="bg-cream py-16 md:py-24">
      <Container>
        <SectionHeading
          title="Perfectly Connected — Right on Noida Expressway"
          subtitle="Located in Sector-135, minutes away from major tech parks, corporates and residential neighborhoods. Skip the commute chaos and work closer to where life happens."
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Map Placeholder */}
          <m.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-navy/10 bg-white shadow-soft"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-slate-navy/5">
              <div className="text-center">
                <MapPin className="mx-auto mb-3 h-12 w-12 text-sharkspace-blue" />
                <p className="font-heading text-lg font-semibold text-slate-navy">
                  Sector-135, Noida
                </p>
                <p className="mt-1 text-sm text-slate-navy/60">
                  Interactive map coming soon
                </p>
              </div>
            </div>
          </m.div>

          {/* Location Details */}
          <m.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <m.div variants={fadeInUp} className="mb-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-sharkspace-blue/10 px-4 py-2 text-sm text-sharkspace-blue">
                <MapPin className="h-4 w-4" />
                <span>
                  5 min from Sector 142 Metro, 10–15 min drive from Sector-63 /
                  DND / Noida City Centre
                </span>
              </div>
            </m.div>

            <m.div
              variants={fadeInUp}
              className="mb-8 grid grid-cols-3 gap-4"
            >
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center rounded-xl border border-slate-navy/10 bg-white p-4 text-center"
                >
                  <item.icon className="mb-2 h-6 w-6 text-forest-green" />
                  <span className="text-sm font-medium text-slate-navy">
                    {item.text}
                  </span>
                </div>
              ))}
            </m.div>

            <m.div
              variants={fadeInUp}
              className="rounded-2xl border border-slate-navy/10 bg-white p-6"
            >
              <h4 className="mb-3 font-heading text-lg font-semibold text-slate-navy">
                Address
              </h4>
              <p className="mb-1 text-slate-navy/70">{CONTACT.address}</p>
              <p className="text-sm text-slate-navy/50">
                📍 {CONTACT.landmark}
              </p>
              <div className="mt-4 flex gap-3">
                <Button href="#lead-form" size="sm">
                  Book a Visit
                </Button>
                <Button
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  variant="outline"
                  size="sm"
                >
                  Get Directions
                </Button>
              </div>
            </m.div>
          </m.div>
        </div>
      </Container>
    </section>
  );
}
