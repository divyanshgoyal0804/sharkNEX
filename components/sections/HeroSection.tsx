'use client';

import Image from 'next/image';
import { m } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { HeroForm } from '@/components/sections/HeroForm';
import { CONTACT, STATS } from '@/lib/constants';
import { fadeInUp, staggerContainer, slideInRight } from '@/lib/animations';
import { Phone, Star, ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Full Screen Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Sharkspace Coworking Space"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay for better text readability - 95% transparency (5% opacity) */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream/5 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto w-full px-6 lg:px-12 xl:px-16">
        <div className="grid min-h-[calc(100vh-80px)] items-center gap-8 py-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          {/* Left Content */}
          <m.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left lg:max-w-xl xl:max-w-2xl lg:pl-4 xl:pl-8"
          >
            <m.div variants={fadeInUp}>
              <Badge variant="primary" className="mb-6">
                🚀 Launching Soon in Sector-135
              </Badge>
            </m.div>

            <m.h1
              variants={fadeInUp}
              className="font-heading text-4xl font-bold leading-tight text-slate-navy md:text-5xl lg:text-6xl xl:text-[68px]"
            >
              Flexible Coworking &{' '}
              <span className="text-sharkspace-blue">Managed Offices</span> on
              Noida Expressway
            </m.h1>

            <m.p
              variants={fadeInUp}
              className="mt-6 text-lg text-slate-navy/70 md:text-xl lg:max-w-xl"
            >
              Premium hot desks, dedicated desks & private cabins with meeting
              rooms, 24×7 access, enterprise Wi-Fi & community perks — now
              launching in Sector-135.
            </m.p>

            {/* CTAs */}
            <m.div
              variants={fadeInUp}
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            >
              <Button href="#lead-form" size="lg">
                Book a Free Tour
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button href="#pricing" variant="outline" size="lg">
                Get Pricing
              </Button>
            </m.div>

            {/* Phone CTA */}
            <m.a
              variants={fadeInUp}
              href={`tel:${CONTACT.phone}`}
              className="mt-6 inline-flex items-center gap-2 text-slate-navy/70 transition-colors hover:text-sharkspace-blue"
            >
              <Phone className="h-5 w-5" />
              <span className="font-medium">{CONTACT.phoneDisplay}</span>
            </m.a>

            {/* Trust Strip */}
            <m.div
              variants={fadeInUp}
              className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-slate-navy/10 bg-white/50 p-4 sm:flex-row sm:gap-6 lg:justify-start"
            >
              <p className="text-sm text-slate-navy/70">
                Trusted by <strong className="text-slate-navy">100+</strong>{' '}
                founders, startups and SMEs across Noida
              </p>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-saffron text-saffron" />
                <span className="text-sm font-semibold text-slate-navy">
                  Rated 4.6/5
                </span>
                <span className="text-sm text-slate-navy/50">
                  across locations
                </span>
              </div>
            </m.div>
          </m.div>

          {/* Right Visual - Sticky Form */}
          <m.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="relative hidden lg:block lg:justify-self-end lg:pr-4 xl:pr-8"
          >
            <div className="sticky top-24">
              <HeroForm />

              {/* Floating Stats Cards */}
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -left-16 bottom-0 rounded-2xl border border-slate-navy/10 bg-white p-4 shadow-card"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-green/10">
                    <Star className="h-5 w-5 text-forest-green" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-navy">
                      <AnimatedCounter value={4.9} suffix="/5" />
                    </p>
                    <p className="text-xs text-slate-navy/50">Average Rating</p>
                  </div>
                </div>
              </m.div>
            </div>
          </m.div>
        </div>

        {/* Stats Bar - Mobile */}
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8 grid grid-cols-3 gap-4 lg:hidden"
        >
          {STATS.map((stat, index) => (
            <m.div
              key={index}
              variants={fadeInUp}
              className="text-center"
            >
              <p className="font-heading text-2xl font-bold text-slate-navy">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs text-slate-navy/60">{stat.label}</p>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
