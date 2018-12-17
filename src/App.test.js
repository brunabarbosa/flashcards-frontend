import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import ShowFlashcard from "./components/showFlashcardComponent/ShowFlashcard";

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
