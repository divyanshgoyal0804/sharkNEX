'use client';

import { m } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { CONTACT } from '@/lib/constants';
import { fadeInUp, staggerContainer, slideInLeft } from '@/lib/animations';
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
          subtitle="Located in Sector-132, minutes away from major tech parks, corporates and residential neighborhoods. Skip the commute chaos and work closer to where life happens."
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Google Map */}
          <m.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-navy/10 bg-white shadow-soft"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.0333565677342!2d77.37683682549627!3d28.508644125732683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce8826931d419%3A0x3f229bc2b2adfdd8!2sLOGIX%20TECHNOVA%2C%20Block%20B%2C%20Sector%20132%2C%20Noida%2C%20Uttar%20Pradesh%20201304!5e0!3m2!1sen!2sin!4v1764679491627!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
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
                  href="https://www.google.com/maps/dir/?api=1&destination=LOGIX+TECHNOVA,+Block+B,+Sector+132,+Noida,+Uttar+Pradesh+201304"
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
