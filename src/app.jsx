import * as React from 'react';
import { Route, Switch,  } from 'wouter';
import Index from './domain/Index';
import Home from './domain/Home';

const App = () => (
  <Switch>
    <Route path="/" component={Index} />
    <Route path="/home" component={Home} />
  </Switch>
);

export default App;