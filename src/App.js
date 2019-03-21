import React, {Fragment} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/Home';

import withMainLayout from './layout/withMainLayout';

function AppRouter() {
  return (
    <Router>
      <Fragment>
        <Route path="/" exact component={withMainLayout(Home)} />
        <Route path="/the-crew" exact component={withMainLayout(Home)} title="the crew"/>
        <Route path="/services" exact component={withMainLayout(Home)} />
        <Route path="/about" exact component={withMainLayout(Home)} />
        <Route path="/projects" exact component={withMainLayout(Home)} />
      </Fragment>
    </Router>
  );
}

export default AppRouter;
