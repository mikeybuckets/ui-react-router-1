import React from 'react';
import './app.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '.components/HomeSection';
import Signin from './pages/signin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={Signin} exact />
      </Switch>
    </Router>
  );
}

export default App;
