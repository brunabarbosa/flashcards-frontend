import React, { Component } from 'react';
import './App.css';
import MenuComponent from './components/menuComponent/MenuComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuComponent />
      </div>
    );
  }
}

export default App;
