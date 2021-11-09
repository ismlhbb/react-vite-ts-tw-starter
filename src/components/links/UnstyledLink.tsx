import clsx from 'clsx';
import { Link, LinkProps } from 'react-router-dom';

export type UnstyledLinkProps = {
  to: string;
  children: React.ReactNode;
  openNewTab?: boolean;
  className?: string;
} & React.ComponentPropsWithoutRef<'a'> &
  LinkProps;

export default function UnstyledLink({
  children,
  to,
  openNewTab,
  className,
  ...rest
}: UnstyledLinkProps) {
  const isNewTab =
    openNewTab !== undefined
      ? openNewTab
      : to && !to.startsWith('/') && !to.startsWith('#');

  if (!isNewTab) {
    return (
      <Link {...rest} to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      href={to}
      {...rest}
      className={clsx(className, 'cursor-newtab')}
    >
      {children}
    </a>
  );
}
