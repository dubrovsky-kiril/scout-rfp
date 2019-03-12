import * as React from "react";
import { storiesOf } from "@storybook/react";
import Input from "./Input";

storiesOf("Input", module).add("default", () => (
  <Input id="productId" label="Product id" type="text" />
));
