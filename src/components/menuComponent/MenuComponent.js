import React, { Component } from 'react';
import { Segment, Menu } from 'semantic-ui-react';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//const About = () => <h2>About</h2>;

export default class MenuComponent extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Segment inverted>
          <Menu inverted pointing secondary>
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
            <Menu.Item
              name='messages'
              active={activeItem === 'messages'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='friends'
              active={activeItem === 'friends'}
              onClick={this.handleItemClick}
            />

            <Menu.Menu position='right'>
              <Menu.Item>
                Login
              </Menu.Item>
              <Menu.Item>
                Sign Up
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Segment>
      </div>
    )
  }
}
