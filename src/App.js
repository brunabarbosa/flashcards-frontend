import React, { Component } from "react";
import NavBar from "./components/navbarComponent/NavBar";
import Dashboard from "./components/dashboardComponent/Dashboard";
import { Route } from "react-router-dom";
import ShowFlashcard from "./components/showFlashcardComponent/ShowFlashcard";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/flashcard/:objectId" component={ShowFlashcard} />
      </div>
    );
  }
}

export default App;
