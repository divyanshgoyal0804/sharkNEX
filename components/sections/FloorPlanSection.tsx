'use client';

import { m } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { fadeInUp, slideInRight } from '@/lib/animations';
import { Layout, Users, Maximize } from 'lucide-react';

const features = [
  {
    icon: Layout,
    title: '2-Seat Cabins',
    description: 'Perfect for small teams and startups',
  },
  {
    icon: Users,
    title: 'Multi-Team Suites',
    description: 'Flexible layouts for growing teams',
  },
  {
    icon: Maximize,
    title: 'Custom Layouts',
    description: 'Designed around your workflow',
  },
];

export function FloorPlanSection() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <m.div variants={fadeInUp}>
              <SectionHeading
                title="Seats Designed Around People — Not Cubicles"
                subtitle="See exactly how your team can fit into the space. From 2-seat cabins to custom multi-team suites — we plan the layouts based on your workflow needs."
                align="left"
              />
            </m.div>

            <m.div variants={fadeInUp} className="grid gap-4 sm:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-slate-navy/10 bg-white p-4 text-center"
                >
                  <feature.icon className="mx-auto mb-3 h-8 w-8 text-sharkspace-blue" />
                  <h4 className="font-heading font-semibold text-slate-navy">
                    {feature.title}
                  </h4>
                  <p className="mt-1 text-sm text-slate-navy/60">
                    {feature.description}
                  </p>
                </div>
              ))}
            </m.div>

            <m.div variants={fadeInUp} className="mt-8">
              <Button href="#lead-form">
                Explore Floor Plan & Availability
              </Button>
            </m.div>
          </m.div>

          {/* Visual Placeholder */}
          <m.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-slate-navy/10 bg-white p-8 shadow-soft">
              <div className="grid h-full grid-cols-3 gap-3">
                {/* Floor plan grid representation */}
                <div className="col-span-2 row-span-2 rounded-xl bg-sharkspace-blue/10 p-4">
                  <p className="text-xs font-medium text-sharkspace-blue">
                    Open Workspace
                  </p>
                </div>
                <div className="rounded-xl bg-forest-green/10 p-3">
                  <p className="text-xs font-medium text-forest-green">Cabin</p>
                </div>
                <div className="rounded-xl bg-forest-green/10 p-3">
                  <p className="text-xs font-medium text-forest-green">Cabin</p>
                </div>
                <div className="col-span-2 rounded-xl bg-saffron/10 p-3">
                  <p className="text-xs font-medium text-saffron">
                    Meeting Room
                  </p>
                </div>
                <div className="rounded-xl bg-slate-navy/10 p-3">
                  <p className="text-xs font-medium text-slate-navy/60">
                    Lounge
                  </p>
                </div>
              </div>
            </div>
          </m.div>
        </div>
      </Container>
    </section>
  );
}
