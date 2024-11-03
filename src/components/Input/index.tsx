import { cn } from '@/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps, forwardRef } from 'react';

const inputStyles = cva(
  [
    'w-full',
    'text-zinc-900 dark:text-zinc-100 text-sm',
    'border-[1px]',
    'border-primary-200 dark:border-primary-800',
    'py-2 px-4',
    'rounded-md',
    'bg-transparent',
    'outline-none',
    'focus:border-primary-500 dark:focus:border-primary-300',
    'disabled:opacity-40 disabled:pointer-events-none',
    '[&::-webkit-calendar-picker-indicator]:cursor-pointer dark:[&::-webkit-calendar-picker-indicator]:invert-[0.95]',
    'transition-all duration-150',
  ],
  {
    variants: {
      error: {
        true: 'border-red-500 dark:border-red-500',
      },
    },
    defaultVariants: {},
  },
);

type InputProps = ComponentProps<'input'> & {
  errorMessage?: string;
} & VariantProps<typeof inputStyles>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ errorMessage, error, className, ...props }, ref) => {
    if (errorMessage) {
      error = !!errorMessage;
    }

    return (
      <div>
        <input
          ref={ref}
          {...props}
          className={cn(inputStyles({ error }), className)}
        />
        <span className="text-xs text-red-500">{errorMessage}</span>
      </div>
    );
  },
);
