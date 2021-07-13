import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from '../common/pageNotFound/NotFound';
import Header from '../components/header/Header';
import AppContainer from '../components/app/AppContainer';

const Routes = () => (
  <Router>
      <Header />
    <Switch>
      <Route exact path="/" component={AppContainer} />
      <Route exact component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
