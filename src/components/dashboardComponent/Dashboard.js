import React, { Component } from 'react';
import {
  Container,
  Header,
  Divider,
} from 'semantic-ui-react';
import FlashcardList from '../flahcardsList/FlashcardList';

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard-content">
        <Container text textAlign="center" style={{ marginTop: '5em' }}>
          <Header as='h1' textAlign='center'>Dashboard Title</Header>
          <p>
            Description
            </p>
        </Container>
        <Divider />
        <FlashcardList />

      </div>
    )
  }
}

export default Dashboard;
