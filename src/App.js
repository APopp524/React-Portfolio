import React from "react";
import "./style.css";
import { Portfolio } from './components/Portfolio/Portfolio';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navigation } from './components/Navigation/Navigation';
import { Contact } from './components/Contact/Contact';
import { About } from './components/About/About';
import { Home } from './components/Home/Home';
import { Nav } from "reactstrap";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home}/>
        <Route path="/Navigation" component={Navigation} />
        <Route path="/About" component={About} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route exact path="/Contact" component={Contact}/>
      </Router>
    </div>
  );
}

export default App;
