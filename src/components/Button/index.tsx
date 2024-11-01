import { cn } from '@/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps, forwardRef } from 'react';

const buttonStyles = cva(
  [
    'w-full',
    'flex',
    'items-center',
    'gap-2',
    'rounded-md',
    'font-semibold',
    'focus:outline-primary-500',
    'disabled:pointer-events-none disabled:opacity-10',
    'transition-colors',
    'duration-150',
    'cursor-pointer',
  ],
  {
    variants: {
      variant: {
        primary: '',
        secondary: '',
        destructive: '',
        outline: '',
        ghost: '',
        link: '',
      },
      size: {
        sm: 'text-sm px-4 py-2',
        md: 'text-base px-4 py-2',
        lg: 'text-lg px-6 py-3',
      },
      isLoading: {
        true: '',
      },
    },
    compoundVariants: [
      {
        variant: 'primary',
        className:
          'bg-primary-900 text-primary-100 hover:bg-primary-800 dark:bg-primary-100 dark:text-primary-900 dark:hover:bg-primary-200',
      },
      {
        variant: 'secondary',
        className:
          'bg-primary-200 text-primary-900 hover:bg-primary-300 dark:bg-primary-800 dark:text-primary-100 dark:hover:bg-primary-700',
      },
      {
        variant: 'destructive',
        className:
          'bg-destructive-500 focus:outline-destructive-500 text-white hover:bg-destructive-600',
      },
      {
        variant: 'outline',
        className:
          'text-primary-900 border-[1px] border-primary-600 bg-transparent hover:bg-primary-200 dark:text-primary-100 dark:hover:bg-primary-800',
      },
      {
        variant: 'ghost',
        className:
          'text-primary-800 bg-transparent hover:bg-primary-200 dark:text-primary-200 dark:hover:bg-primary-800',
      },
      {
        variant: 'link',
        className:
          'text-primary-800 focus:outline-none focus:outline-0 focus:text-primary-600 bg-transparent hover:underline hover:underline-offset-4 dark:text-primary-200 dark:focus:text-primary-400',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

type ButtonProps = ComponentProps<'button'> &
  ComponentProps<'a'> &
  VariantProps<typeof buttonStyles> & {
    as?: React.ElementType;
  };

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    { variant, size, isLoading, as: Component = 'button', className, ...props },
    ref,
  ) => (
    <Component
      className={cn(buttonStyles({ variant, size, isLoading, className }))}
      ref={ref}
      {...props}
      disabled={!!isLoading || props.disabled}
    >
      {isLoading && (
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      )}
      {props.children}
    </Component>
  ),
);
