import React, { Component } from 'react';
import axios from 'axios';
import FlashcardPresentation from '../flashcardPresentation/FlashcardPresentation';
import {
  Grid,
  Container
} from 'semantic-ui-react';

class FlashcardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flashcardList: []
    };

    this.handleFlashcardDelete = this.handleFlashcardDelete.bind(this);
  }

  handleFlashcardDelete (flashcardID) {
    const deleteFlashcard = item => item._id !== flashcardID;
    const updatedList = this.state.flashcardList.filter(deleteFlashcard);
    
    axios.delete(`http://localhost:5000/flashcards/${flashcardID}`)
    .then(res => {
      this.setState({ flashcardList: updatedList });
    })
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/flashcards`)
    .then(res => {
      let flashcards = [];
      flashcards = res.data;
      this.setState({ flashcardList: flashcards });
    })
  }


  render() {
    return (
      <div>
        <Container>
          <Grid >
            {this.state.flashcardList.map(flashcardItem =>
              <Grid.Column key={flashcardItem._id} mobile={16} tablet={8} computer={4}>
                  <FlashcardPresentation
                    objectID={flashcardItem._id}
                    title={flashcardItem.title}
                    body={flashcardItem.text}
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
