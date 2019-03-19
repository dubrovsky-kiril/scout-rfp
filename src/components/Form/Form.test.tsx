import * as React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Form from "./Form";

describe("Form", () => {
  it("should apply 'formId' prop to form and Button", () => {
    const wrapper = shallow(
      <Form formId="productIdForm" onSubmit={() => {}} buttonTxt="Search">
        <input />
      </Form>
    );

    expect(wrapper.find("form").props().id).toBe("productIdForm");
    expect(wrapper.find("Button").props().form).toBe("productIdForm");
  });
  it("should contain passed children ", () => {
    const children = <input />;
    const wrapper = shallow(
      <Form formId="productIdForm" onSubmit={() => {}} buttonTxt="Search">
        {children}
      </Form>
    );

    expect(
      wrapper
        .find("div")
        .children()
        .contains(children)
    ).toEqual(true);
  });
  it("should apply onSubmit handler", () => {
    const handleOnSubmit = () => {};
    const wrapper = shallow(
      <Form formId="productIdForm" onSubmit={handleOnSubmit} buttonTxt="Search">
        <input />
      </Form>
    );

    expect(wrapper.find("form").props().onSubmit).toBe(handleOnSubmit);
  });
  it("should apply 'buttonTxt' prop to Button", () => {
    const wrapper = mount(
      <Form formId="productIdForm" onSubmit={() => {}} buttonTxt="Search">
        <input />
      </Form>
    );

    expect(wrapper.find("button").text()).toBe("Search");
    wrapper.unmount();
  });
  it("should match snapshot", () => {
    const tree = shallow(
      <Form formId="productIdForm" onSubmit={() => {}} buttonTxt="Search">
        <input />
      </Form>
    );

    expect(toJson(tree)).toMatchSnapshot();
  });
});
