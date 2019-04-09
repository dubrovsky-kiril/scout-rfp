import * as React from "react";
import Button from "../Button/Button";

type FormTypes = {
  children: JSX.Element;
  formId: string;
  buttonTxt: string;
  onSubmit(event: React.FormEvent<HTMLElement>): void;
};

const Form = ({ formId, children, onSubmit, buttonTxt }: FormTypes) => (
  <form id={formId} onSubmit={onSubmit}>
    <div>{children}</div>
    <Button type="submit" form={formId} txt={buttonTxt} />
  </form>
);

export default Form;
