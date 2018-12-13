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
    date: '01/08/2018',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
  },
  {
    objectID: 2,
    title: 'flashcard 02',
    date: '06/05/2018',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
  },
  {
    objectID: 3,
    title: 'flashcard 03',
    date: '07/08/2018',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
  },
  {
    objectID: 4,
    title: 'flashcard 04',
    date: '02/03/2018',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
  },
  {
    objectID: 5,
    title: 'flashcard 05',
    date: '01/04/2018',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
  },
  {
    objectID: 6,
    title: 'flashcard 06',
    date: '01/08/2018',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
  },
  {
    objectID: 7,
    title: 'flashcard 07',
    date: '01/08/2018',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
  },
  {
    objectID: 8,
    title: 'flashcard 08',
    date: '01/08/2018',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
  }
];

class FlashcardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flashcardList: flashcardList
    };

    this.handleFlashcardDelete = this.handleFlashcardDelete.bind(this);

  }

  handleFlashcardDelete (flashcardID) {
    console.log(flashcardID);
  }


  render() {
    return (
      <div>
        <Container>
          <Grid>
            {this.state.flashcardList.map(flashcardItem =>
              <Grid.Column key={flashcardItem.objectID} mobile={16} tablet={8} computer={4}>
                  <FlashcardPresentation
                    objectID={flashcardItem.objectID}
                    title={flashcardItem.title}
                    date={flashcardItem.date}
                    body={flashcardItem.body}
                    onFlashcardDelete={this.handleFlashcardDelete}
                  />
              </Grid.Column>
            )}
          </Grid>
        </Container>
      </div>
    );
  }
}

export default FlashcardList;
