import * as React from 'react';
import clsx from 'clsx';
import { ImSpinner2 } from 'react-icons/im';

enum ButtonVariant {
  'dark',
  'light',
  'primary',
}

type ButtonProps = {
  isLoading?: boolean;
  variant?: keyof typeof ButtonVariant;
} & React.ComponentPropsWithoutRef<'button'>;

export default function Button({
  children,
  className,
  disabled: buttonDisabled,
  isLoading,
  variant = 'dark',
  ...rest
}: ButtonProps) {
  const disabled = isLoading || buttonDisabled;

  return (
    <button
      {...rest}
      disabled={disabled}
      className={clsx(
        'py-2 px-4 rounded font-bold',
        'border border-gray-600 shadow-sm',
        'focus:outline-none',
        {
          'bg-dark disabled:bg-gray-700 text-white hover:text-primary focus-visible:text-primary disabled:hover:text-white':
            variant === 'dark',
          'bg-white disabled:bg-gray-200 text-dark hover:bg-gray-200 hover:text-dark focus-visible:text-dark border-gray-400 disabled:hover:text-dark':
            variant === 'light',
          'bg-primary text-black hover:bg-primary/90 hover:text-black border-primary-darker disabled:hover:bg-primary disabled:brightness-75  focus-visible:text-dark':
            variant === 'primary',
        },
        'disabled:cursor-not-allowed',
        !disabled && 'animated-underline',
        isLoading &&
          'relative text-transparent hover:!text-transparent !cursor-wait transition-none',
        className
      )}
      style={
        variant === 'primary'
          ? ({
              '--clr-primary': 'white',
              '--clr-primary-darker': 'white',
            } as React.CSSProperties)
          : undefined
      }
    >
      {isLoading && (
        <div
          className={clsx(
            'absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2',
            variant !== 'dark' ? 'text-black' : 'text-white'
          )}
        >
          <ImSpinner2 className='animate-spin' />
        </div>
      )}
      {children}
    </button>
  );
}
