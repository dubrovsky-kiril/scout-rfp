import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Button from "./Button";

describe("Button", () => {
  it("should apply 'type' prop or default one", () => {
    const wrapper = shallow(<Button txt="Search" />);

    expect(wrapper.props().type).toBe("button");

    wrapper.setProps({ type: "submit" });

    expect(wrapper.props().type).toBe("submit");
  });
  it("should apply 'form' prop or default one", () => {
    const wrapper = shallow(<Button txt="Search" />);

    expect(wrapper.props().form).toBe("");

    wrapper.setProps({ form: "productId" });

    expect(wrapper.props().form).toBe("productId");
  });
  it("should apply 'txt' prop to children", () => {
    const wrapper = shallow(<Button txt="Search" />);

    expect(wrapper.props().children).toBe("Search");
  });
  it("should return Loading text with true 'isPending' prop", () => {
    const wrapper = shallow(<Button txt="Search" isPending />);

    expect(wrapper.props().children).toBe("Loading");
  });
  it("should match snapshot", () => {
    const tree = shallow(<Button txt="Search" />);

    expect(toJson(tree)).toMatchSnapshot();
  });
});
