import React, { Component } from "react";
import axios from "axios";
import FlashcardPresentation from "../flashcardPresentation/FlashcardPresentation";

class FlashcardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flashcards: null
    };
  }
  async componentDidMount() {
    const flashcards = (await axios.get("http://localhost:5000/flashcards"))
      .data;

    this.setState({ flashcards });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.flashcards === null && <p>Loading flashcards...</p>}
          {this.state.flashcards &&
            this.state.flashcards.map(flashcard => (
              <FlashcardPresentation
                key={flashcard._id}
                objectId={flashcard._id}
                title={flashcard.title}
                body={flashcard.text}
              />
            ))}
        </div>
      </div>
    );
  }
}
export default FlashcardList;
