import React, {Fragment} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import withMainLayout from './layout/withMainLayout';

import Home from './pages/Home';
import Crew from './pages/Crew';
import Services from './pages/Services';
import About from './pages/About';
import Projects from './pages/Projects';

function AppRouter() {
  return (
    <Router>
      <Fragment>
        <Route path="/" exact component={withMainLayout(Home)} />
        <Route path="/the-crew" exact component={withMainLayout(Crew)}/>
        <Route path="/services" exact component={withMainLayout(Services)} />
        <Route path="/about" exact component={withMainLayout(About)} />
        <Route path="/projects" exact component={withMainLayout(Projects)} />
      </Fragment>
    </Router>
  );
}

export default AppRouter;
