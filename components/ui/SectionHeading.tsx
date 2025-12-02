'use client';

import { cn } from '@/lib/utils';
import { m } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <m.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className={cn(
        'mb-8 md:mb-10',
        align === 'center' && 'text-center',
        className
      )}
    >
      <h2 className="font-heading text-3xl font-bold text-slate-navy md:text-4xl lg:text-[44px] lg:leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-slate-navy/70 md:text-xl">{subtitle}</p>
      )}
    </m.div>
  );
}
