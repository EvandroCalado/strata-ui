import { cn } from '@/utils';
import { ComponentProps, forwardRef } from 'react';

type CardDescriptionProps = ComponentProps<'p'>;

export const CardDescription = forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>(({ className, ...props }, ref) => {
  return <p {...props} ref={ref} className={cn(className)} />;
});
