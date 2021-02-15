import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ProjectPage from "./components/pages/ProjectPage";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/pluraledge" component={ProjectPage} />
          <Route path="/laglamorer" component={ProjectPage} />
          <Route path="/franchise" component={ProjectPage} />
          <Route path="/ellie" component={ProjectPage} />
          <Route path="/airbuild" component={ProjectPage} />
          
          <Route component={NotFound} /> // without path
        </Switch>
      </Router>
    </>
  );
}

export default App;
