import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './Home';
import App from './App';
import Quote from './Quote';
import Error from './Error';

// navbar
import Navbar from './Navbar';

const ReactRouterSetup = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route path="/app">
        <App />
      </Route>
      <Route path="/quote">
        <Quote />
      </Route>
      <Route path="*">
        <Error />
      </Route>
    </Switch>
  </Router>
);

export default ReactRouterSetup;
