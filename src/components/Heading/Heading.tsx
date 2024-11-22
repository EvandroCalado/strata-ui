import { cn } from '@/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps, forwardRef } from 'react';

const headingStyles = cva('text-primary-900 dark:text-primary-100', {
  variants: {
    as: {
      h1: '',
      h2: '',
      h3: '',
      h4: '',
      h5: '',
      h6: '',
    },
    weight: {
      thin: 'font-thin',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
      black: 'font-black',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  compoundVariants: [
    {
      as: 'h1',
      className: 'scroll-m-20 text-4xl tracking-tight lg:text-5xl',
    },
    {
      as: 'h2',
      className: 'scroll-m-20 text-3xl tracking-tight lg:text-4xl',
    },
    {
      as: 'h3',
      className: 'scroll-m-20 text-2xl tracking-tight lg:text-3xl',
    },
    {
      as: 'h4',
      className: 'scroll-m-20 text-xl tracking-tight lg:text-2xl',
    },
    {
      as: 'h5',
      className: 'scroll-m-20 text-lg tracking-tight lg:text-xl',
    },
    {
      as: 'h6',
      className: 'scroll-m-20 text-base tracking-tight lg:text-lg',
    },
  ],
  defaultVariants: {
    as: 'h2',
    weight: 'normal',
    align: 'left',
  },
});

type HeadingProps = ComponentProps<'h1'> & VariantProps<typeof headingStyles>;

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as, weight, align, className, ...props }, ref) => {
    const Component = as || 'h2';

    return (
      <Component
        ref={ref}
        {...props}
        className={cn(headingStyles({ as, weight, align, className }))}
      />
    );
  },
);
