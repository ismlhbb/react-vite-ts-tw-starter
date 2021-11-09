import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import PageLoadingBar from 'components/PageLoadingBar';
import Header from 'components/header/Header';

import NotFoundPage from 'pages/404';
import HomePage from 'pages/home';
import CounterPage from 'pages/counter';
import ExamplePage from 'pages/example';

const HomeLayout = () => {
  return (
    <>
      <Header />
      <main>
        <section className='bg-gray-50'>
          <div className='layout'>
            <PageLoadingBar isFallback={false} />
            <React.Suspense fallback={<PageLoadingBar isFallback={true} />}>
              <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/counter' component={CounterPage} />
                <Route exact path='/example' component={ExamplePage} />
                <Route path='*' component={NotFoundPage} />
              </Switch>
            </React.Suspense>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomeLayout;
