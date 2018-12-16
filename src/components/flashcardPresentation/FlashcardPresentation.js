import React, { Component } from 'react';
import { Card, Icon, Button, Container } from 'semantic-ui-react'

class FlashcardPresentation extends Component {

  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.onFlashcardDelete(this.props.objectID);
  }

  render() {
    return (
      <div>
        <Card>
          <Card.Content header={this.props.title} />
            <Card.Content>
            <Container fluid>
              <span>
                {this.props.body}
              </span>
            </Container>
            </Card.Content>
          <Card.Content extra>
            <Button.Group icon>
              <Button basic color='blue'>
                <Icon name='edit' floated='right' />
              </Button>
              <Button basic color='blue'>
                <Icon name='trash alternate' floated='right' 
                  onClick={this.handleDelete}
                />
              </Button>
            </Button.Group>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default FlashcardPresentation;
