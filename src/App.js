import React, {Fragment} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Test from './pages/Test';

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <Router>
      <Fragment>
        <Route path="/" exact component={Home} />
        <Route path="/test" component={Test} />
      </Fragment>
    </Router>
  );
}

export default AppRouter;
