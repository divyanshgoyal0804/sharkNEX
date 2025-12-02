'use client';

import { m } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { PRICING_DATA } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { Check, ArrowRight } from 'lucide-react';

export function PricingSection() {
  return (
    <section id="pricing" className="bg-white py-8 md:py-12">
      <Container>
        <SectionHeading
          title="Plans that Scale with Your Team"
          subtitle="From hot desks to custom team suites — find the perfect workspace for your needs."
        />

        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {PRICING_DATA.map((plan, index) => (
            <m.div key={index} variants={fadeInUp}>
              <Card
                className={`relative h-full ${
                  plan.popular
                    ? 'border-sharkspace-blue ring-2 ring-sharkspace-blue/20'
                    : ''
                }`}
                hover={true}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="primary">Most Popular</Badge>
                  </div>
                )}
                <div className="pt-2">
                  <h3 className="font-heading text-xl font-semibold text-slate-navy">
                    {plan.type}
                  </h3>
                  {plan.subtitle && (
                    <p className="mt-1 text-sm text-slate-navy/60">
                      {plan.subtitle}
                    </p>
                  )}
                  <div className="mt-4 flex items-baseline">
                    <span
                      className={`font-heading text-3xl font-bold ${
                        plan.price === 'Request Pricing'
                          ? 'text-xl'
                          : ''
                      } text-slate-navy`}
                    >
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="ml-1 text-slate-navy/60">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-sm text-slate-navy/70">
                    {plan.includes}
                  </p>
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-slate-navy/70">
                      <Check className="h-4 w-4 text-forest-green" />
                      High-speed Wi-Fi
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-navy/70">
                      <Check className="h-4 w-4 text-forest-green" />
                      24/7 access
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-navy/70">
                      <Check className="h-4 w-4 text-forest-green" />
                      Tea & coffee
                    </div>
                  </div>
                  <Button
                    href="#lead-form"
                    variant={plan.popular ? 'primary' : 'outline'}
                    className="mt-6 w-full"
                  >
                    {plan.price === 'Request Pricing'
                      ? 'Contact Us'
                      : 'Get Started'}
                  </Button>
                </div>
              </Card>
            </m.div>
          ))}
        </m.div>

        <m.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button href="#lead-form" variant="ghost" className="group">
            Check exact pricing for your team
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </m.div>
      </Container>
    </section>
  );
}
