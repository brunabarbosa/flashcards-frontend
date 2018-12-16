import React, { Component } from "react";
import FlashcardList from "../flahcardsList/FlashcardList";

class Dashboard extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: "2rem" }}>
        <h1 className="text-center">My dashboard</h1>
        <FlashcardList />
      </div>
    );
  }
}

export default Dashboard;
