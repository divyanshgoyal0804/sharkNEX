'use client';

import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FAQS } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-16 md:py-24">
      <Container size="narrow">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Sharkspace coworking."
        />

        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-3"
        >
          {FAQS.map((faq, index) => (
            <m.div
              key={index}
              variants={fadeInUp}
              className="overflow-hidden rounded-xl border border-slate-navy/10 bg-cream/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <span className="pr-4 font-heading text-lg font-semibold text-slate-navy">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    'h-5 w-5 flex-shrink-0 text-slate-navy/50 transition-transform duration-300',
                    openIndex === index && 'rotate-180'
                  )}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <m.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="border-t border-slate-navy/10 px-5 pb-5 pt-4">
                      <p className="text-slate-navy/70">{faq.answer}</p>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </m.div>
          ))}
        </m.div>
      </Container>
    </section>
  );
}
