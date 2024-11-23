import { cn } from '@/utils';
import { ComponentProps, forwardRef } from 'react';

type CardFooterProps = ComponentProps<'footer'>;

export const CardFooter = forwardRef<HTMLElement, CardFooterProps>(
  ({ className, ...props }, ref) => {
    return <footer ref={ref} {...props} className={cn(className)} />;
  },
);
