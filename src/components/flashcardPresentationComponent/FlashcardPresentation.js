import React, { Component } from "react";
import { Link } from "react-router-dom";

class FlashcardPresentation extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.onFlashcardDelete(this.props.objectId);
  }

  render() {
    const { objectId, title, body } = this.props;
    const MAX_LENGTH_HEADER = 30;
    const MAX_LENGTH_BODY = 100;

    return (
      <div className="col-sm-12 col-md-4 col-lg-3">
        <Link to={`/flashcard/${objectId}`} style={{ textDecoration: "none" }}>
          <div
            className="card mb-3 text-white bg-info"
            style={{ marginTop: "2rem", width: "18rem", height: "12rem" }}
          >
            <div className="card-header">
              {title.length > MAX_LENGTH_HEADER
                ? `${title.substring(0, MAX_LENGTH_HEADER)} ...`
                : title}
            </div>
            <div className="card-body">
              <p className="card-text">
                {body.length > MAX_LENGTH_BODY
                  ? `${body.substring(0, MAX_LENGTH_BODY)} ...`
                  : body}
              </p>
            </div>
          </div>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button
            type="button"
            className="btn btn btn-outline-danger btn-lg btn-block"
            style={{ marginTop: "2rem" }}
            onClick={this.handleDelete}
          >
            Delete flashcard
          </button>
        </Link>
      </div>
    );
  }
}

export default FlashcardPresentation;
