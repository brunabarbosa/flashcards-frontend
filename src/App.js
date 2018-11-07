import React, { Component } from 'react';
import './App.css';
import Dashborad from './dashboard/Dashboard';
import FlashcardList from './flahcardsList/FlashcardList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashborad/>
      </div>
    );
  }
}

export default App;
