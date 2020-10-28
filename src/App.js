import React from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation } from './components/Navigation/Nav';
import { Contact } from './components/Contact/Contact';
import { About } from './components/About/About';
import { Home } from './components/Home/Home';
import { Portfolio } from './components/Portfolio/Portfolio';

function App() {
  return (
    <React.Fragment>
    <Router>
      <Navigation />
      <Switch>
  <Route exact path="/" component={Home} />
  <Route path="/About" component={About} />
  <Route path="/Portfolio" component={Portfolio} />
  <Route path="/Contact" component={Contact} />

</Switch>
    </Router>
  </React.Fragment>
  );
}

export default App;
