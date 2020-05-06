import Nav from "NavBar";
import Home from "Homepage";
import React, { Component } from "react";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Nav />
        <Home />
      </div>
    );
  }
}

export default App;
