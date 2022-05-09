import * as React from 'react';
import CustomLink from 'components/links/CustomLink';
import ButtonLink from 'components/links/ButtonLink';
import UnstyledLink from 'components/links/UnstyledLink';

const Data = {
  projectLink: 'https://github.com/ismlhbb/react-vite-ts-tw-starter',
  projectName: 'React Vite + Typescript + Tailwind + Redux Starter',
  profileLink: 'https://ismlhbb.xyz',
  profileName: 'Ismail Habibi Herman',
  vercelDeployUrl:
    'https://vercel.com/import/git?s=https://github.com/ismlhbb/react-vite-ts-tw-starter',
  netlifyDeployUrl:
    'https://app.netlify.com/start/deploy?repository=https://github.com/ismlhbb/react-vite-ts-tw-starter',
  vercelButtonUrl: 'https://vercel.com/button',
  netlifyButtonUrl: 'https://www.netlify.com/img/deploy/button.svg',
  generateTemplateUrl:
    'https://github.com/ismlhbb/react-vite-ts-tw-starter/generate',
};

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center text-center min-h-main'>
      <h3>{Data.projectName}</h3>
      <p className='mt-2 text-sm text-gray-700'>
        🔥 An opinionated React.js with Vite, Typescript, Tailwind and Redux
        Starter.
      </p>
      <p className='mt-2 text-sm text-gray-800'>
        <CustomLink to={Data.projectLink}>See the repository</CustomLink>
      </p>
      <div className='flex justify-center gap-1 mt-2 align-center'>
        <ButtonLink to='/counter'>Counter example</ButtonLink>
        <ButtonLink to='/example'>Fetch example</ButtonLink>
      </div>
      <div className='flex justify-center gap-1 mt-2 align-center'>
        <UnstyledLink to={Data.vercelDeployUrl}>
          <img
            width={92}
            height={32}
            src={Data.vercelButtonUrl}
            alt='Vercel deploy button'
          />
        </UnstyledLink>
        <UnstyledLink to={Data.netlifyDeployUrl}>
          <img
            width={146}
            height={32}
            src={Data.netlifyButtonUrl}
            alt='Netlify deploy button'
          />
        </UnstyledLink>
      </div>
      <code className='p-2 mt-2 bg-gray-200 rounded-lg'>
        npx degit ismlhbb/react-vite-ts-tw-starter {'<YOUR_APP_NAME>'}
      </code>
      <ButtonLink
        className='mt-2'
        variant='primary'
        to={Data.generateTemplateUrl}
      >
        Use this template
      </ButtonLink>
      <footer className='absolute text-gray-600 bottom-2'>
        © {new Date().getFullYear()} By{' '}
        <CustomLink to={Data.profileLink}>{Data.profileName}</CustomLink>
      </footer>
    </div>
  );
}
