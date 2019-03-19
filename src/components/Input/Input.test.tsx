import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Input from "./Input";

describe("Input", () => {
  it("should apply 'id' prop to labels htmlFor attr and inputs id attr", () => {
    const wrapper = shallow(
      <Input id="productId" label="Product id" type="text" />
    );

    expect(wrapper.find("label").props().htmlFor).toBe("productId");
    expect(wrapper.find("input").props().id).toBe("productId");
  });
  it("should apply 'label' prop to labels child", () => {
    const wrapper = shallow(
      <Input id="productId" label="Product id" type="text" />
    );

    expect(wrapper.find("label").text()).toEqual("Product id");
  });
  it("should apply 'type' prop to input", () => {
    const wrapper = shallow(
      <Input id="productId" label="Product id" type="text" />
    );

    expect(wrapper.find("input").props().type).toBe("text");
  });
  it("should apply 'isRequired' prop to input", () => {
    const wrapper = shallow(
      <Input id="productId" label="Product id" type="text" />
    );

    expect(wrapper.find("input").props().required).toBe(false);

    wrapper.setProps({ isRequired: true });

    expect(wrapper.find("input").props().required).toBe(true);
  });
  it("should match snapshot", () => {
    const tree = shallow(
      <Input id="productId" label="Product id" type="text" />
    );

    expect(toJson(tree)).toMatchSnapshot();
  });
});
