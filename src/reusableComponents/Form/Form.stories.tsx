import * as React from "react";
import { storiesOf } from "@storybook/react";
import Form from "./Form";
import Input from "../Input/Input";

storiesOf("Form", module).add("default", () => (
  <Form formId="productIdForm" onSubmit={() => {}} buttonTxt="Search">
    <Input id="productId" label="Product id" type="text" />
  </Form>
));
