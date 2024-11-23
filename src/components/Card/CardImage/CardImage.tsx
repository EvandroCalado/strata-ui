import { cn } from '@/utils';
import { ComponentProps, forwardRef } from 'react';

type CardImageProps = ComponentProps<'img'>;

export const CardImage = forwardRef<HTMLImageElement, CardImageProps>(
  ({ className, ...props }, ref) => {
    return <img ref={ref} {...props} className={cn(className)} />;
  },
);
