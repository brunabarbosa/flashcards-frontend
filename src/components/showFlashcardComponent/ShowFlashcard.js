import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class ShowFlashcard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: null,
      text: null
    };
  }

  async componentDidMount() {
    const {
      match: { params }
    } = this.props;
    const flashcard = (await axios.get(
      `http://localhost:5000/flashcards/${params.objectId}`
    )).data;
    this.setState({
      title: flashcard.title,
      text: flashcard.text
    });
  }

  render() {
    return (
      <div style={{ marginTop: "8rem" }} className="container">
        <div className="row">
          <div className="jumbotron col-12">
            <h1 className="display-3">{this.state.title}</h1>
            <hr className="my-4" />
            <p>{this.state.text}</p>
          </div>
        </div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button
            type="button"
            className="btn btn btn-outline-primary btn-lg btn-block"
          >
            Return home
          </button>
        </Link>
      </div>
    );
  }
}
