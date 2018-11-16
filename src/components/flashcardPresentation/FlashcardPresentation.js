import React, { Component } from 'react';
import { Card, Icon, Button } from 'semantic-ui-react'

class FlashcardPresentation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Card>
          <Card.Content header='Flashcard title' />
          <Card.Content description='description' />
          <Card.Content extra>
            <Button.Group icon>
              <Button basic color='blue'>
                <Icon name='edit' floated='right' />
              </Button>
              <Button basic color='blue'>
                <Icon name='trash alternate' floated='right' />
              </Button>
            </Button.Group>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default FlashcardPresentation;
