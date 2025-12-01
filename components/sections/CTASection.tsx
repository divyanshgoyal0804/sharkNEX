'use client';

import { m } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { fadeInUp } from '@/lib/animations';
import { ArrowRight, Phone } from 'lucide-react';
import { CONTACT } from '@/lib/constants';

export function CTASection() {
  return (
    <section className="bg-gradient-to-br from-sharkspace-blue to-sharkspace-blue/90 py-16 md:py-20">
      <Container>
        <m.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Ready to Upgrade Your Workspace?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Book a free tour today and discover how Sharkspace can transform the
            way your team works.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="#lead-form"
              variant="secondary"
              size="lg"
              className="bg-white text-sharkspace-blue hover:bg-white/90"
            >
              Book a Free Tour
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              href={`tel:${CONTACT.phone}`}
              variant="ghost"
              size="lg"
              className="text-white hover:bg-white/10"
            >
              <Phone className="mr-2 h-5 w-5" />
              {CONTACT.phoneDisplay}
            </Button>
          </div>
        </m.div>
      </Container>
    </section>
  );
}
