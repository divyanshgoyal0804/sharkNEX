'use client';

import { m } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { VALUE_PROPS } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { CalendarCheck, Building, Users } from 'lucide-react';

const iconMap = {
  CalendarCheck,
  Building,
  Users,
};

export function ValuePropsSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-6 md:grid-cols-3"
        >
          {VALUE_PROPS.map((prop, index) => {
            const Icon = iconMap[prop.icon as keyof typeof iconMap];
            return (
              <m.div key={index} variants={fadeInUp}>
                <Card className="h-full text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-sharkspace-blue/10">
                    <Icon className="h-7 w-7 text-sharkspace-blue" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-slate-navy">
                    {prop.title}
                  </h3>
                  <p className="mt-2 text-slate-navy/60">{prop.description}</p>
                </Card>
              </m.div>
            );
          })}
        </m.div>
      </Container>
    </section>
  );
}
