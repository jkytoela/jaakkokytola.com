import * as React from 'react';
import { Route, Switch, Redirect } from 'wouter';
import Index from './domain/Index';
import Home from './domain/Home';

const App = () => (
  <Switch>
    <Route path="/home" component={Home} />
    <Route path="/" component={Index} />
  </Switch>
);

export default App;