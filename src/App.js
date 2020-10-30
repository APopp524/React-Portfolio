import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from './components/Header/Header';
import { Contact } from './components/Contact/Contact';
import { Portfolio } from './components/Portfolio/Portfolio';
import { About } from './components/About/About';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Footer />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Header" component={Header} />
        <Route path="/About" component={About} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/Contact" component={Contact}/>
        <Route path="/Footer" component={Footer}/>
        </Switch>
    </Router>
    </div>
  );
}

export default App;