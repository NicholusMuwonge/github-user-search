import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../components/app/App';
import NotFound from '../common/pageNotFound/NotFound';
import Header from '../components/header/Header';

const Routes = () => (
  <Router>
      <Header />
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
