'use client';

import { m } from 'framer-motion';
import { HeroForm } from '@/components/sections/HeroForm';
import { CONTACT } from '@/lib/constants';
import { fadeInUp, staggerContainer, slideInRight } from '@/lib/animations';
import { Phone, Star } from 'lucide-react';

export function HeroContent() {
  return (
    <div className="relative mx-auto hidden w-full px-6 md:block lg:px-12 xl:px-16">
      <div className="grid min-h-[calc(100vh-80px)] items-center gap-8 py-12 lg:grid-cols-[1fr_auto] lg:gap-16">
        {/* Left Content */}
        <m.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left lg:max-w-xl xl:max-w-2xl lg:pl-4 xl:pl-8"
        >
          <m.h1
            variants={fadeInUp}
            className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl xl:text-[68px]"
          >
            <span className="text-sharkspace-blue">Flexible Coworking</span> &{' '}
            Managed Offices on
            Noida Expressway
          </m.h1>
          <m.p
            variants={fadeInUp}
            className="mt-6 text-xl text-white md:text-2xl lg:max-w-xl"
          >
            Premium hot desks, dedicated desks & private cabins with meeting
            rooms, 24×7 access, enterprise Wi-Fi & community perks — now
            launching in Sector-132.
          </m.p>

          {/* Phone CTA */}
          <m.a
            variants={fadeInUp}
            href={`tel:${CONTACT.phone}`}
            className="mt-6 inline-flex items-center gap-2 text-white text-xl transition-colors hover:text-sharkspace-blue"
          >
            <Phone className="h-6 w-6" />
            <span className="font-medium">{CONTACT.phoneDisplay}</span>
          </m.a>

          {/* Trust Strip */}
          <m.div
            variants={fadeInUp}
            className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-slate-navy/10 bg-white/80 p-4 sm:flex-row sm:gap-6 lg:justify-start"
          >
            <p className="text-sm text-slate-navy/70">
              Trusted by <strong className="text-slate-navy">100+</strong>{' '}
              founders, startups and SMEs across Noida
            </p>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-saffron text-saffron" />
              <span className="text-sm font-semibold text-slate-navy">
                Rated 4.7/5
              </span>
              <span className="text-sm text-slate-navy/50">
                across locations
              </span>
            </div>
          </m.div>
        </m.div>

        {/* Right Visual - Sticky Form (Desktop) */}
        <m.div
          variants={slideInRight}
          initial="hidden"
          animate="visible"
          className="relative lg:justify-self-end lg:mr-8 xl:mr-16"
        >
          <div className="sticky top-24">
            <HeroForm />
          </div>
        </m.div>
      </div>
    </div>
  );
}
