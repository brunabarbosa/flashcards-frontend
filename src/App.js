import React, { Component } from 'react';
import './App.css';
import MenuComponent from './components/menuComponent/MenuComponent';
import Dashboard from './components/dashboardComponent/Dashboard';
import Footer from './components/footerComponent/Footer';

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
