import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import auth0Client from "../../auth/Auth";
import axios from "axios";

class CreateFlashcard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: false,
      title: "",
      text: ""
    };
  }

  updateText(value) {
    this.setState({
      text: value
    });
  }

  updateTitle(value) {
    this.setState({
      title: value
    });
  }

  async submit() {
    if (this.state.title !== "" && this.state.text !== "") {
      this.setState({
        disabled: true
      });

      await axios.post(
        "http://localhost:5000/flashcards",
        {
          title: this.state.title,
          text: this.state.text
        },
        {
          headers: { Authorization: `Bearer ${auth0Client.getIdToken()}` }
        }
      );

      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div
        className="container"
        style={{ marginTop: "8rem", textDecoration: "none" }}
      >
        <div className="row">
          <div className="col-12">
            <div className="card border-primary">
              <div className="card-header">New Flashcard</div>
              <div className="card-body text-left">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Title:</label>
                  <input
                    disabled={this.state.disabled}
                    type="text"
                    onBlur={e => {
                      this.updateTitle(e.target.value);
                    }}
                    className="form-control"
                    placeholder="Give your flashcard a title."
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Text:</label>
                  <textarea
                    disabled={this.state.disabled}
                    rows={10}
                    type="text"
                    onBlur={e => {
                      this.updateText(e.target.value);
                    }}
                    className="form-control"
                    placeholder="Give more context to your flashcard."
                  />
                </div>
                <button
                  disabled={this.state.disabled}
                  className="btn btn-primary"
                  onClick={() => {
                    this.submit();
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CreateFlashcard);
