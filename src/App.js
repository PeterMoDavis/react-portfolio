import React, { Component } from "react";
import Header from "./components/Header";
import "./app.css";
import Footer from "./components/Footer";
import Container from "./components/Container";
import About from "./components/About";
import { HashRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Switch />
          <Header />
          <Switch>
            <Route path="/" exact component={Container} />
            <Route path="/about" component={About} />
          </Switch>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
