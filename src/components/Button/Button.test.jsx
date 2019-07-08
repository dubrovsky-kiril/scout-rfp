import React from "react";
import { create } from "react-test-renderer";
import { mount, shallow } from "enzyme";
import Button from "./Button";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("Button component", () => {
  test("Matches the snapshot", () => {
    const button = create(<Button onClick={() => {}}>Submit</Button>);

    expect(button.toJSON()).toMatchSnapshot();
  });
  test("Is clickable", () => {
    const mockCallBack = jest.fn();

    const button = shallow(<Button onClick={mockCallBack}>Submit</Button>);

    button.find("button").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
  test("Is unclickable when disabled", () => {
    const mockCallBack = jest.fn();

    const button = mount(
      <Button isDisabled onClick={mockCallBack}>
        Submit
      </Button>
    );

    button.find("button").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(0);
  });
  test("Is displaying exptected text", () => {
    const button = shallow(<Button onClick={() => {}}>Submit</Button>);

    expect(button.text()).toEqual("Submit");
  });
});
