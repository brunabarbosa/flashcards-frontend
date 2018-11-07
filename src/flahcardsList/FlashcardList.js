import React, { Component } from 'react';
import './FlashcardList.css';
import FlashcardPresentation from '../flashcardPresentation/FlashcardPresentation';

const flashcardList = [
  {
    objectID: 1,
    title: 'flashcard 01',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
  },
  {
    objectID: 2,
    title: 'flashcard 02',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
  },
  {
    objectID: 3,
    title: 'flashcard 03',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
  }
];

class FlashcardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: flashcardList,
    };
  }

  render() {

    const flashcard = flashcardList[0];

    return (
      <div>
        <FlashcardPresentation flashcard />
      </div >
    );
  }
}

export default FlashcardList;
