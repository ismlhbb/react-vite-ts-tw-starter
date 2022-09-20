import * as React from 'react';

import UnstyledLink from 'components/links/UnstyledLink';

const links = [
  { to: '/counter', label: 'Counter' },
  { to: '/example', label: 'Fetch' },
];

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-white shadow'>
      <div className='flex items-center justify-between h-14 layout'>
        <UnstyledLink to='/' className='font-bold hover:text-gray-600'>
          React Starter
        </UnstyledLink>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ to, label }) => (
              <li key={`${to}${label}`}>
                <UnstyledLink to={to} className='hover:text-gray-600'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
