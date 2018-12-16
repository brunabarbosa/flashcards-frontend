import React, { Component } from "react";
import { Link } from "react-router-dom";

class FlashcardPresentation extends Component {
  render() {
    const { objectId, title, body } = this.props;
    const MAX_LENGTH = 100;
    return (
      <div className="col-sm-12 col-md-4 col-lg-3">
        <Link to={`/flashcard/${objectId}`} style={{ textDecoration: "none" }}>
          <div
            className="card mb-3 text-white bg-info"
            style={{ marginTop: "2rem", width: "18rem", height: "12rem" }}
          >
            <div className="card-header">{title}</div>
            <div className="card-body">
              <p className="card-text">
                {body.length > MAX_LENGTH
                  ? `${body.substring(0, MAX_LENGTH)} ...`
                  : body}
              </p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default FlashcardPresentation;
