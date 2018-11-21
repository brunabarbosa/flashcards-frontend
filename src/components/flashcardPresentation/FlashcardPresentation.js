import React, { Component } from 'react';
import { Card, Icon, Button } from 'semantic-ui-react'

class FlashcardPresentation extends Component {

  render() {
    return (
      <div key={this.props.key}>
        <Card>
          <Card.Content header={this.props.title} meta={`Created in ${this.props.date}`} />
          <Card.Content description={this.props.body} />
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
