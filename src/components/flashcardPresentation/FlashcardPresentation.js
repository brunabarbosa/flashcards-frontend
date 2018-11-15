import React, { Component } from 'react';
import './FlashcardPresentation.css';

class FlashcardPresentation extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

export default FlashcardPresentation;
