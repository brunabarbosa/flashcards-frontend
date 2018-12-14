import React, { Component } from 'react';
import Dashboard from './components/dashboardComponent/Dashboard';
import Footer from './components/footerComponent/Footer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Segment, Menu } from 'semantic-ui-react';


import './App.css';
import Login from './components/loginComponent/Login';
import FlashcardForm from './components/flashcardForm/flashcardForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Segment inverted>
            <Menu inverted pointing secondary>
              <Link to="/">
                <Menu.Item name='home' />
              </Link>
              <Link to="/createflashcard">
                <Menu.Item name='create flashcard' />
              </Link>

              <Menu.Menu position='right'>
                <Link to="/login">
                  <Menu.Item>
                    Login
                  </Menu.Item>
                </Link>
                <Menu.Item>
                  Sign Up
                </Menu.Item>
              </Menu.Menu>
            </Menu>
          </Segment>

          <Route exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/createflashcard" component={FlashcardForm} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
