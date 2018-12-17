import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import ShowFlashcard from "./components/showFlashcardComponent/ShowFlashcard";
import FlashcardList from "./components/flahcardsListComponent/FlashcardList";
import FlashcardPresentation from "./components/flashcardPresentationComponent/FlashcardPresentation";

configure({ adapter: new Adapter() });

describe("<ShowFlashcard />", () => {
  it("renders a title", () => {
    const view = shallow(<ShowFlashcard />);
    expect(view.find("h1").length).toEqual(1);
  });

  it("renders a body", () => {
    const view = shallow(<ShowFlashcard />);
    expect(view.find("p").length).toEqual(1);
  });
});

describe("<FlashcardList />", () => {
  it("renders w/out exploding", () => {
    expect(shallow(<FlashcardList />).length).toEqual(1);
  });
});

describe("<FlashcardPresentation />", () => {
  //props are required for the FlashcardPresentation component
  it("renders w/out exploding", () => {
    const props = { objectId: 1, title: "test title", body: "test body" };
    expect(shallow(<FlashcardPresentation {...props} />).length).toEqual(1);
  });
});
