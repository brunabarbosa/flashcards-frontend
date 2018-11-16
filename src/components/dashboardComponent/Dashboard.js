import React, { Component } from 'react';
import {
  Container,
  Header,
  Grid,
  Image
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

        <Container text style={{ marginTop: '2em' }}>
          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
              </Grid.Column>
              <Grid.Column width={8}>
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={8}>
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
              </Grid.Column>
              <Grid.Column width={8}>
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={8}>
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
              </Grid.Column>
              <Grid.Column width={8}>
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={8}>
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
              </Grid.Column>
              <Grid.Column width={8}>
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default Dashboard;
