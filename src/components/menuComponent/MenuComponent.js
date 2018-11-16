import React, { Component } from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default class MenuComponent extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            name='My Dashboards'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Button primary>Sign up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>

      </div>
    )
  }
}
