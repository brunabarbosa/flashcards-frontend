import React, { Component } from 'react';
import MenuComponent from './components/menuComponent/MenuComponent';
import Dashboard from './components/dashboardComponent/Dashboard';
import Footer from './components/footerComponent/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuComponent />
        <Dashboard />
        <Footer />
      </div>
    );
  }
}

export default App;
