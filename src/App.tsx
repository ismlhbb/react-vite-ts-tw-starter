import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeLayout from './layouts/home/HomeLayout';
import ScrollRestoration from 'components/ScrollRestoration';
import NotFoundPage from 'pages/404';

const App = () => {
  return (
    <Router>
      <ScrollRestoration />
      <Switch>
        <Route path='/' component={HomeLayout} />
        <Route path='*' component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;
