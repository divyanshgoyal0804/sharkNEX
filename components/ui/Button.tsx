'use client';

import { cn } from '@/lib/utils';
import { m, HTMLMotionProps } from 'framer-motion';
import { buttonHover, buttonTap } from '@/lib/animations';
import { forwardRef } from 'react';

type MotionButtonProps = HTMLMotionProps<'button'>;

interface ButtonProps extends Omit<MotionButtonProps, 'ref'> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      children,
      href,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sharkspace-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-xl';

    const variants = {
      primary:
        'bg-sharkspace-blue text-white hover:bg-sharkspace-blue/90 shadow-soft',
      secondary:
        'bg-slate-navy text-white hover:bg-slate-navy/90 shadow-soft',
      ghost:
        'bg-transparent text-slate-navy hover:bg-slate-navy/5',
      outline:
        'border-2 border-slate-navy/20 text-slate-navy hover:border-slate-navy/40 hover:bg-slate-navy/5',
    };

    const sizes = {
      sm: 'h-10 px-4 text-sm',
      md: 'h-12 px-6 text-base',
      lg: 'h-14 px-8 text-lg',
    };

    if (href) {
      return (
        <m.a
          href={href}
          whileHover={buttonHover}
          whileTap={buttonTap}
          className={cn(baseStyles, variants[variant], sizes[size], className)}
        >
          {children}
        </m.a>
      );
    }

    return (
      <m.button
        ref={ref}
        whileHover={buttonHover}
        whileTap={buttonTap}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </m.button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
