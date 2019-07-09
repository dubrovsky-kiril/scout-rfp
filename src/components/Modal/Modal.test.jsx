import React from "react";
import { shallow, mount } from "enzyme";
import { create } from "react-test-renderer";
import Modal from "./Modal";

describe("Modal component", () => {
  test("Matches the snapshot", () => {
    const modal = create(
      <Modal title="Title" msg="Message" buttonTxt="Click" onClick={() => {}} />
    );

    expect(modal.toJSON()).toMatchSnapshot();
  });
  test("Is showing exptected title", () => {
    const title = "Success!";
    const modal = shallow(
      <Modal title={title} msg="Message" buttonTxt="Click" onClick={() => {}} />
    );

    expect(modal.find("h2").text()).toEqual(title);
  });
  test("Is showing exptected message", () => {
    const msg = "Yur request succeed!";
    const modal = shallow(
      <Modal title="Success!" msg={msg} buttonTxt="Click" onClick={() => {}} />
    );

    expect(modal.find("p").text()).toEqual(msg);
  });
  test("Is showing exptected button text", () => {
    const buttonTxt = "Submit";
    const modal = mount(
      <Modal
        title="Success!"
        msg="Message"
        buttonTxt={buttonTxt}
        onClick={() => {}}
      />
    );

    expect(modal.find("button").text()).toEqual(buttonTxt);
  });
  test("Is button clickable", () => {
    const mockCallBack = jest.fn();

    const modal = mount(
      <Modal
        title="Success!"
        msg="Message"
        buttonTxt="Click"
        onClick={mockCallBack}
      />
    );

    modal.find("button").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
  test("Is passing onClick to Button", () => {
    const mockCallBack = jest.fn();

    const modal = mount(
      <Modal
        title="Success!"
        msg="Message"
        buttonTxt="Button"
        onClick={mockCallBack}
      />
    );

    expect(modal.find("button").prop("onClick")).toEqual(mockCallBack);
  });
});
