import React from "react";
import "./styles.css";
import { Portfolio } from './components/Portfolio';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation } from './components/Navigation';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { Home } from './components/Home';

function App() {
  return (
    <React.Fragment>
    <Router>
      <Navigation />
      <Switch>
  <Route exact path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/portfolio" component={Portfolio} />
  <Route path="/contact" component={Contact} />

</Switch>
    </Router>
  </React.Fragment>
  );
}

export default App;
