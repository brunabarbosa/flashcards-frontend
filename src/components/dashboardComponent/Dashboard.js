import React, { Component } from 'react'
import {
  Segment,
  Button,
  Divider
} from 'semantic-ui-react'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1 className="ui medium header">Dashboard Title</h1>
        <Segment>
          <Button floated='right'>Add Dashboard</Button>
          <Divider clearing />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore...
        </Segment>
      </div>
    )
  }
}

export default Dashboard
