import React, { Component } from "react";
import axios from "axios";
import FlashcardPresentation from "../flashcardPresentation/FlashcardPresentation";

class FlashcardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flashcards: null
    };

    this.handleFlashcardDelete = this.handleFlashcardDelete.bind(this);
  }

  async componentDidMount() {
    const flashcards = (await axios.get(
      "https://protected-gorge-19021.herokuapp.com/flashcards/"
    )).data;

    this.setState({ flashcards });
  }

  handleFlashcardDelete(flashcardId) {
    const deleteFlashcard = item => item._id !== flashcardId;
    const updatedList = this.state.flashcards.filter(deleteFlashcard);

    axios
      .delete(
        `https://protected-gorge-19021.herokuapp.com/flashcards/${flashcardId}`
      )
      .then(res => {
        this.setState({ flashcards: updatedList });
      });
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
                onFlashcardDelete={this.handleFlashcardDelete}
              />
            ))}
        </div>
      </div>
    );
  }
}
export default FlashcardList;
