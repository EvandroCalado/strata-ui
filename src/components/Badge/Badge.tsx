import { cn } from '@/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps, forwardRef } from 'react';

const badgeStyles = cva(
  [
    'w-max',
    'flex',
    'items-center',
    'justify-center',
    'gap-2',
    'rounded-full',
    'font-semibold',
    'text-xs',
    'px-2 py-0.5',
    'transition-colors',
    'duration-150',
  ],
  {
    variants: {
      variant: {
        primary:
          'bg-primary-900 text-primary-100 hover:bg-primary-800 dark:bg-primary-100 dark:text-primary-900 dark:hover:bg-primary-200',
        secondary:
          'bg-primary-200 text-primary-900 hover:bg-primary-300 dark:bg-primary-800 dark:text-primary-100 dark:hover:bg-primary-700',
        destructive:
          'bg-red-500 focus:outline-red-500 text-white hover:bg-red-600',
        outline:
          'text-primary-900 border-[1px] border-primary-600 bg-transparent hover:bg-primary-200 dark:text-primary-100 dark:hover:bg-primary-800',
        ghost:
          'text-primary-800 bg-transparent hover:bg-primary-200 dark:text-primary-200 dark:hover:bg-primary-800',
      },
    },

    defaultVariants: {
      variant: 'primary',
    },
  },
);

type BadgeProps = ComponentProps<'span'> & VariantProps<typeof badgeStyles>;

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant, className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        {...props}
        className={cn(badgeStyles({ variant, className }))}
      />
    );
  },
);
