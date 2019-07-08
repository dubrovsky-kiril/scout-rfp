import React from "react";
import { create } from "react-test-renderer";
import { mount, shallow } from "enzyme";
import Loader from "#components/Loader/Loader";
import Button from "./Button";

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
  test("Is displaying Loader component when pending", () => {
    const button = shallow(
      <Button isPending onClick={() => {}}>
        Submit
      </Button>
    );

    expect(button.contains(<Loader />)).toBe(true);
  });
});
