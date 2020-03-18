import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "../views/Home";
import About from "../views/About";
import Contact from "../views/Contact";
import Login from "../views/Login";
import SignUp from "../views/SignUp";
import Dashboard from "../views/Dashboard";
import NotFound from "../views/404";
import ThemeProvider from "../helpers/themes/ThemeProvider.helper";
import Blog from "../views/Blog";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/about"} component={About} />
          <Route exact path={"/contact"} component={Contact} />
          <Route exact path={"/blog"} component={Blog} />
          <Route exact path={"/login"} component={Login} />
          <Route exact path={"/sign-up"} component={SignUp} />
          <Route exact path={"/dashboard"} component={Dashboard} />
          <Route path={"*"} component={NotFound} />
        </Switch>
      </Router>
      </ThemeProvider>
  );
};

export default App;
