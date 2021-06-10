import React from 'react';
import {NativeRouter, Route, Switch} from 'react-router-dom';
import App from '../App';


const Router = () => (
  <NativeRouter>
    <Switch>
      <Route exact path="/" component={App} />
      {/* <Route exact component={NotFound} /> */}
    </Switch>
  </NativeRouter>
);

export default Router;
