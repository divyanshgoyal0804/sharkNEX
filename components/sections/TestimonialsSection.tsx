'use client';

import { m } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { TESTIMONIALS } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <Container>
        <SectionHeading
          title="Teams Grow Faster Here"
          subtitle="Hear from founders and teams who made Sharkspace their workspace."
        />

        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-6 md:grid-cols-3"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <m.div key={index} variants={fadeInUp}>
              <Card className="h-full">
                <Quote className="mb-4 h-8 w-8 text-sharkspace-blue/30" />
                <p className="text-slate-navy/80 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-slate-navy/10 pt-4">
                  <div>
                    <p className="font-heading font-semibold text-slate-navy">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-slate-navy/60">
                      {testimonial.role}
                    </p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-saffron text-saffron"
                      />
                    ))}
                  </div>
                </div>
              </Card>
            </m.div>
          ))}
        </m.div>
      </Container>
    </section>
  );
}
