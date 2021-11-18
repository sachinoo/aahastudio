import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./HeaderAndFooter/Header.js";
import Footer from "./HeaderAndFooter/Footer.js";
import Home from "./Home/Home.js";
import Portfolio from "./Portfolio/portfolio";
import Videography from "./Videography/videography";
import About from "./About/About.js";
import Contact from "./Contact/Contact";
import Social from "./Social/Social.js";

import "./App.css";

const App = () => (
  <div>
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/videography" exact component={Videography} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/social" exact component={Social} />
      </Switch>
    </Router>
    <Footer />
  </div>
);
export default App;
