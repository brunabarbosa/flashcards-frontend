import React, { Component } from "react";
import Dashboard from "./components/dashboardComponent/Dashboard";
import { Route } from "react-router-dom";

import "./App.css";
import Nav from "./components/navComponent/Nav";
import Profile from "./components/profileComponent/Profile";
import Login from "./components/loginComponent/Login";
import Auth from "./auth/Auth";
import Callback from "./components/callbackComponent/Callback";

class App extends Component {
  constructor(props) {
    super(props);

    this.auth = new Auth(this.props.history);
  }
  render() {
    return (
      <>
        <Nav />
        <div className="body">
          <Route
            path="/"
            exact
            render={props => <Dashboard auth={this.auth} {...props} />}
          />
          <Route
            path="/callback"
            render={props => <Callback auth={this.auth} {...props} />}
          />
          <Route path="/profile" component={Profile} />
        </div>
      </>
    );
  }
}

export default App;
