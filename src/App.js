import React, { Component } from "react";
import NavBar from "./components/navbarComponent/NavBar";
import Dashboard from "./components/dashboardComponent/Dashboard";
import { Route, withRouter } from "react-router-dom";
import ShowFlashcard from "./components/showFlashcardComponent/ShowFlashcard";
import Callback from "./components/callbackComponent/Callback";
import CreateFlashcard from "./components/createFlashcardComponent/CreateFlashcard";
import SecuredRoute from "./securedRoute/SecuredRoute";
import auth0Client from "./auth/Auth";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkingSession: true
    };
  }

  async componentDidMount() {
    if (this.props.location.pathname === "/callback") {
      this.setState({ checkingSession: false });
      return;
    }
    try {
      await auth0Client.silentAuth();
      this.forceUpdate();
    } catch (err) {
      if (err.error !== "login_required") console.log(err.error);
    }

    this.setState({ checkingSession: false });
  }

  render() {
    return (
      <div>
        <NavBar />
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/flashcard/:objectId" component={ShowFlashcard} />
        <Route exact path="/callback" component={Callback} />
        <SecuredRoute
          path="/new-flashcard"
          component={CreateFlashcard}
          checkingSession={this.state.checkingSession}
        />
      </div>
    );
  }
}

export default withRouter(App);
