import React, { Component } from 'react';
import './Dashborad.css';
import FlashcardList from '../flahcardsList/FlashcardList';

class Dashborad extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <h2>Titulo: Main</h2>
        <FlashcardList dashboardTitle="Titulo" />
      </div>
    );
  }
}

export default Dashborad;
