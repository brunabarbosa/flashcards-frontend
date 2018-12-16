import React, { Component } from "react";
import { Form, Button, Container } from "semantic-ui-react";

import axios from "axios";
import FlashcardPresentation from "../flashcardPresentation/FlashcardPresentation";

class FlashcardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      text: ""
    };

    this.saveTitle = this.saveTitle.bind(this);
    this.saveText = this.saveText.bind(this);

    this.saveFlashcard = this.saveFlashcard.bind(this);
  }

  componentDidMount() {}

  saveTitle(event) {
    this.setState({
      title: event.target.value
    });
    console.log(this.state);
  }

  saveText(event) {
    this.setState({
      text: event.target.value
    });
    console.log(this.state);
  }

  saveFlashcard() {
    if (this.state.title && this.state.text) {
      const f = { title: this.state.title, text: this.state.text };
      console.log("f: ", f);
      axios.post(`http://localhost:5000/flashcards`, f).then(res => {
        console.log(res);
        console.log(res.data);
      });
    }
  }

  render() {
    return (
      <div>
        <div className="Dashboard-content">
          <Container text textAlign="center" style={{ marginTop: "5em" }}>
            <Form>
              <Form.Field>
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={this.saveTitle}
                />
              </Form.Field>
              <Form.Field>
                <label>Title</label>
                <textarea
                  type="text"
                  name="text"
                  value={this.state.text}
                  onChange={this.saveText}
                />
              </Form.Field>
              <Button
                color="teal"
                fluid
                size="large"
                onClick={this.saveFlashcard}
              >
                Submit
              </Button>
            </Form>
          </Container>
        </div>
      </div>
    );
  }
}

export default FlashcardForm;
