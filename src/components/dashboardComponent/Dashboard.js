import React, { Component } from 'react';
import {
  Container,
  Header
} from 'semantic-ui-react';

class Dashboard extends Component {
  render() {
    return (
      <div className='Dashboard-content'>
        <Container text style={{ marginTop: '7em' }}>
          <Header as='h1'>Semantic UI React Fixed Template</Header>
          <p>This is a basic fixed menu template using fixed size containers.</p>
          <p>
            A text container is used for the main container, which is useful for single column layouts.
        </p>

        </Container>
      </div>
    )
  }
}

export default Dashboard;
