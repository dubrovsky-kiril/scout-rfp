import React from "react";
import { create } from "react-test-renderer";
import Modal from "./Modal";

describe("Button component", () => {
  test("Matches the snapshot", () => {
    const button = create(
      <Modal title="Title" msg="Message" buttonTxt="Click" onClick={() => {}} />
    );

    expect(button.toJSON()).toMatchSnapshot();
  });
  test("Is showing exptected title", () => {});
  test("Is showing exptected message", () => {});
  test("Is showing exptected button text", () => {});
  test("Is passing onClick to Button", () => {});
});
