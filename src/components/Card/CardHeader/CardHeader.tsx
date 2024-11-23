import { cn } from '@/utils';
import { ComponentProps, forwardRef } from 'react';

type CardHeaderProps = ComponentProps<'header'>;

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => {
    return <header ref={ref} {...props} className={cn(className)} />;
  },
);
