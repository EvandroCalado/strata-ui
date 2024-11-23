import { cn } from '@/utils';
import { ComponentProps, forwardRef } from 'react';

type CardContentProps = ComponentProps<'main'>;

export const CardContent = forwardRef<HTMLElement, CardContentProps>(
  ({ className, ...props }, ref) => {
    return <main ref={ref} {...props} className={cn(className)} />;
  },
);
