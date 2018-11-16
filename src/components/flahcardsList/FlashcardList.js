import React, { Component } from 'react';
import FlashcardPresentation from '../flashcardPresentation/FlashcardPresentation';
import {
  Grid,
  Container
} from 'semantic-ui-react';

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
    // TODO Component rendering
    return (
      <div>
        <Container>
          <Grid>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <FlashcardPresentation />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <FlashcardPresentation />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <FlashcardPresentation />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <FlashcardPresentation />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <FlashcardPresentation />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <FlashcardPresentation />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <FlashcardPresentation />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <FlashcardPresentation />
            </Grid.Column>
          </Grid>
        </Container>
      </div >
    );
  }
}

export default FlashcardList;
