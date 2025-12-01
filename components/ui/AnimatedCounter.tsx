'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { m } from 'framer-motion';
import { counterAnimation } from '@/lib/animations';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = '',
  duration = 2,
  className,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      const steps = 60;
      const increment = value / steps;
      const stepDuration = (duration * 1000) / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current * 10) / 10);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [inView, value, duration]);

  return (
    <m.span
      ref={ref}
      variants={counterAnimation}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {count % 1 === 0 ? Math.floor(count) : count.toFixed(1)}
      {suffix}
    </m.span>
  );
}
