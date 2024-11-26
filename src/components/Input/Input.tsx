import { cn } from '@/utils';
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { ComponentProps, forwardRef } from 'react';

const inputStyles = cva(
  [
    'w-full',
    'text-zinc-900 dark:text-zinc-100',
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
  label?: string;
} & VariantProps<typeof inputStyles>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ errorMessage, error, label, className, ...props }, ref) => {
    if (errorMessage) {
      error = !!errorMessage;
    }

    return (
      <div>
        {label && (
          <label
            htmlFor={label}
            className={clsx('text-sm', {
              'pointer-events-none opacity-40': props.disabled,
            })}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          {...props}
          id={label}
          className={cn(inputStyles({ error }), className)}
        />
        {errorMessage && (
          <span className="text-xs text-red-500 w-max">{errorMessage}</span>
        )}
      </div>
    );
  },
);
