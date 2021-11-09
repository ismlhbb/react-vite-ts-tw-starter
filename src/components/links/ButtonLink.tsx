import clsx from 'clsx';

import UnstyledLink, { UnstyledLinkProps } from 'components/links/UnstyledLink';

enum ButtonVariant {
  'dark',
  'light',
  'primary',
}

type ButtonLinkProps = {
  variant?: keyof typeof ButtonVariant;
} & UnstyledLinkProps;

export default function ButtonLink({
  children,
  className = '',
  variant = 'dark',
  ...rest
}: ButtonLinkProps) {
  return (
    <UnstyledLink
      {...rest}
      className={clsx(
        'py-2 px-4 inline-block rounded font-bold animated-underline',
        'border border-gray-600 shadow-sm',
        'focus:outline-none',
        {
          'bg-dark text-white hover:text-primary focus-visible:text-primary':
            variant === 'dark',
          'bg-white text-dark hover:bg-gray-200 hover:text-dark focus-visible:text-dark border-gray-400':
            variant === 'light',
          'bg-primary text-white hover:bg-primary/90 hover:text-white border-primary-darker focus-visible:text-white':
            variant === 'primary',
        },
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
      {children}
    </UnstyledLink>
  );
}
