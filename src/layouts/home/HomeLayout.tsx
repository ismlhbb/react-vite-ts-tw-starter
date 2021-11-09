import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from 'pages/404';
import PageLoadingBar from 'components/PageLoadingBar';
import Header from 'components/header/Header';

const Home = React.lazy(() => import('pages/home'));
const CounterPage = React.lazy(() => import('pages/counter'));
const ExamplePage = React.lazy(() => import('pages/example'));

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
                <Route exact path='/' component={Home} />
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
