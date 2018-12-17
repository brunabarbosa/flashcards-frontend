import React, { Component } from "react";
import FlashcardList from "../flahcardsListComponent/FlashcardList";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: "8rem" }}>
        <h1 className="text-center">My dashboard</h1>
        <Link to="/new-flashcard" style={{ textDecoration: "none" }}>
          <div className="card text-white bg-dark mb-3">
            <div className="card-body">
              <h4 className="card-title">+ New Flashcard</h4>
              <p className="card-text">Save your notes</p>
            </div>
          </div>
        </Link>
        <FlashcardList />
      </div>
    );
  }
}

export default Dashboard;
