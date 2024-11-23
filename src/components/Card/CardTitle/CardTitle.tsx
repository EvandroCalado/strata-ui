import { cn } from '@/utils';
import { ArrowUpRight } from 'lucide-react';
import { ComponentProps, forwardRef } from 'react';

type CardTitleProps = { icon?: boolean } & ComponentProps<'h1'>;

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ icon, className, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        {...props}
        className={cn(
          'my-4 flex items-center justify-between text-xl font-semibold',
          className,
        )}
      >
        <span>Card Title</span>
        {icon && <ArrowUpRight />}
      </h1>
    );
  },
);
