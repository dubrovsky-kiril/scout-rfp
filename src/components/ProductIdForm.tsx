import * as React from "react";
import Form from "../reusableComponents/Form/Form";
import Input from "../reusableComponents/Input/Input";

const FORM_ID: string = "productIdForm";
const INPUT_ID: string = "productId";

const handleOnSubmit = (e: React.FormEvent<HTMLElement>): void => {
  e.preventDefault();

  console.log(INPUT_ID, e.target[INPUT_ID].value);
};

const ProductIdForm: React.FunctionComponent = () => (
  <Form formId={FORM_ID} onSubmit={handleOnSubmit} buttonTxt="Search">
    <Input id={INPUT_ID} type="text" label="Product id" isRequired />
  </Form>
);

export default ProductIdForm;
