import { useLocation } from 'react-router-dom';
import NProgress from 'nprogress';
import * as React from 'react';

interface PageLoadingBarProps {
  isFallback: boolean;
}

export default function PageLoadingBar({ isFallback }: PageLoadingBarProps) {
  const location = useLocation();
  const progress = NProgress.configure({
    showSpinner: false,
  });
  React.useEffect(() => {
    progress.start();
    return () => {
      if (isFallback) {
        progress.done();
      } else {
        setTimeout(() => progress.done(), 200);
      }
    };
  }, [!isFallback ? location : undefined]);

  return <></>;
}
