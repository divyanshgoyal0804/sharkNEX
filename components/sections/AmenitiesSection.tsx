'use client';

import { m } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AMENITIES } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import {
  Monitor,
  Users,
  Shield,
  Wifi,
  Coffee,
  Mail,
  Printer,
  Calendar,
  Car,
  Heart,
  Zap,
  BatteryCharging,
} from 'lucide-react';

const iconMap = {
  Monitor,
  Users,
  Shield,
  Wifi,
  Coffee,
  Mail,
  Printer,
  Calendar,
  Car,
  Heart,
};

export function AmenitiesSection() {
  return (
    <section id="amenities" className="bg-white py-8 md:py-12">
      <Container>
        <SectionHeading
          title="Everything You Need to Work Better"
          subtitle="Premium amenities designed for productivity and comfort."
        />

        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
        >
          {AMENITIES.map((amenity, index) => {
            const Icon = iconMap[amenity.icon as keyof typeof iconMap];
            return (
              <m.div
                key={index}
                variants={fadeInUp}
                className="flex items-center gap-3 rounded-xl border border-slate-navy/10 bg-cream/50 p-4"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-sharkspace-blue/10">
                  <Icon className="h-5 w-5 text-sharkspace-blue" />
                </div>
                <span className="text-sm font-medium text-slate-navy">
                  {amenity.text}
                </span>
              </m.div>
            );
          })}
        </m.div>

        {/* Highlight Box */}
        <m.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 rounded-2xl bg-gradient-to-r from-sharkspace-blue to-sharkspace-blue/80 p-6 text-center text-white md:p-8"
        >
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
            <div className="flex items-center gap-3">
              <Zap className="h-8 w-8" />
              <span className="text-lg font-semibold">Enterprise Internet</span>
            </div>
            <div className="hidden h-8 w-px bg-white/30 md:block" />
            <div className="flex items-center gap-3">
              <BatteryCharging className="h-8 w-8" />
              <span className="text-lg font-semibold">Power Backup</span>
            </div>
            <div className="hidden h-8 w-px bg-white/30 md:block" />
            <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
              Zero Downtime Guarantee
            </span>
          </div>
        </m.div>
      </Container>
    </section>
  );
}
