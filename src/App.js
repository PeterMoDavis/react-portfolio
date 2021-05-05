import React, { Component } from "react";
import Header from "./components/Header";
import "./app.css";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Welcome from "./components/Welcome";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Welcome />
        <Container />
        <Footer />
      </div>
    );
  }
}

export default App;
