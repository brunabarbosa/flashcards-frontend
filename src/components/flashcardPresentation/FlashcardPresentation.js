import React, { Component } from 'react';
import { Card, Icon, Button } from 'semantic-ui-react'

const ipsum = `Lorem ipsum dolor sit amet, 
consectetur adipiscing elit. Quisque cursus, 
enim porttitor tincidunt cursus, libero lectus pulvinar justo, 
ut imperdiet magna leo non massa.`;

class FlashcardPresentation extends Component {

  render() {
    return (
      <div>
        <Card>
          <Card.Content header='Flashcard Title' meta='Created in 08/08/2018'/>
          <Card.Content description={ipsum} />
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
