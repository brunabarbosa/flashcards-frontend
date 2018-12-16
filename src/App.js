import React, { Component } from "react";
import NavBar from "./components/navbarComponent/NavBar";
import Dashboard from "./components/dashboardComponent/Dashboard";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route exact path="/" component={Dashboard} />
      </div>
    );
  }
}

export default App;
