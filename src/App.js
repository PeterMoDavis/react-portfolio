import React, { Component } from "react";
import Header from "./components/Header";
import "./app.css";
import Footer from "./components/Footer";
import Container from "./components/Container";
import About from "./components/About";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch />
          <Header />
          <Switch>
            <Route path="/" exact component={Container} />
            <Switch />
            <Route path="/about" component={About} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
