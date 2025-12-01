'use client';

import { Container } from '@/components/ui/Container';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { CONTACT } from '@/lib/constants';
import { MapPin, Phone, Mail } from 'lucide-react';
import { m } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export function Footer() {
  return (
    <footer className="bg-slate-navy py-16 text-white md:py-20">
      <Container>
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand & Contact */}
          <m.div variants={fadeInUp} className="lg:col-span-1">
            <div className="mb-6 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sharkspace-blue">
                <span className="font-heading text-lg font-bold text-white">S</span>
              </div>
              <span className="font-heading text-xl font-bold">Sharkspace</span>
            </div>
            <div className="space-y-3 text-white/70">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-sharkspace-blue" />
                <span>
                  {CONTACT.address}
                  <br />
                  <span className="text-sm">{CONTACT.landmark}</span>
                </span>
              </p>
              <a
                href={`tel:${CONTACT.phone}`}
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Phone className="h-5 w-5 text-sharkspace-blue" />
                {CONTACT.phoneDisplay}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Mail className="h-5 w-5 text-sharkspace-blue" />
                {CONTACT.email}
              </a>
            </div>
          </m.div>

          {/* Quick Links */}
          <m.div variants={fadeInUp}>
            <h4 className="mb-4 font-heading text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#pricing" className="transition-colors hover:text-white">
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="#amenities" className="transition-colors hover:text-white">
                  Amenities
                </a>
              </li>
              <li>
                <a href="#location" className="transition-colors hover:text-white">
                  Location
                </a>
              </li>
              <li>
                <a href="#faq" className="transition-colors hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </m.div>

          {/* Workspaces */}
          <m.div variants={fadeInUp}>
            <h4 className="mb-4 font-heading text-lg font-semibold">Workspaces</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#pricing" className="transition-colors hover:text-white">
                  Hot Desk
                </a>
              </li>
              <li>
                <a href="#pricing" className="transition-colors hover:text-white">
                  Dedicated Desk
                </a>
              </li>
              <li>
                <a href="#pricing" className="transition-colors hover:text-white">
                  Private Cabin
                </a>
              </li>
              <li>
                <a href="#pricing" className="transition-colors hover:text-white">
                  Team Suite
                </a>
              </li>
            </ul>
          </m.div>

          {/* Quick Form */}
          <m.div variants={fadeInUp}>
            <h4 className="mb-4 font-heading text-lg font-semibold">Get Pricing</h4>
            <form className="space-y-3">
              <Input
                placeholder="Your Name"
                className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
              />
              <Button type="submit" className="w-full">
                Request Pricing
              </Button>
            </form>
          </m.div>
        </m.div>

        {/* Bottom Bar */}
        <m.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row"
        >
          <p>© 2025 Sharkspace. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms" className="transition-colors hover:text-white">
              Terms
            </a>
            <a href="/careers" className="transition-colors hover:text-white">
              Careers
            </a>
          </div>
        </m.div>
      </Container>
    </footer>
  );
}
