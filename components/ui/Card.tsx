'use client';

import { cn } from '@/lib/utils';
import { m } from 'framer-motion';
import { fadeInUp, scaleOnHover } from '@/lib/animations';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  animate?: boolean;
}

export function Card({
  children,
  className,
  hover = true,
  animate = true,
}: CardProps) {
  const Wrapper = animate ? m.div : 'div';
  const animationProps = animate
    ? {
        variants: fadeInUp,
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: true, margin: '-50px' },
        whileHover: hover ? scaleOnHover : undefined,
      }
    : {};

  return (
    <Wrapper
      className={cn(
        'rounded-[14px] border border-[#E2DFDA] bg-white p-6 shadow-soft transition-shadow hover:shadow-card',
        className
      )}
      {...animationProps}
    >
      {children}
    </Wrapper>
  );
}
