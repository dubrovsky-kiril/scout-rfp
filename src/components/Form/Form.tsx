import * as React from "react";
import Button from "../Button/Button";

type FormTypes = {
  /** should contain inputs, selectors or other data entrance elements  */
  children: JSX.Element;
  /** connects form with submit button */
  formId: string;
  /** should contain button text */
  buttonTxt: string;
  /** should contain submit handler function that will receive children elements data */
  onSubmit(event: React.FormEvent<HTMLElement>): void;
};

const Form = ({ formId, children, onSubmit, buttonTxt }: FormTypes) => (
  <form id={formId} onSubmit={onSubmit}>
    <div>{children}</div>
    <Button type="submit" form={formId} txt={buttonTxt} />
  </form>
);

export default Form;
