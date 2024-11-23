import { cn } from '@/utils';
import { ComponentProps, forwardRef } from 'react';

type CardProps = ComponentProps<'article'>;

export const Card = forwardRef<HTMLElement, CardProps>(
  ({ className, ...props }, ref) => {
    return (
      <article ref={ref} {...props} className={cn('space-y-4', className)} />
    );
  },
);
