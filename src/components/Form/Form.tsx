import * as React from "react";
import Button from "../Button/Button";

type FormTypes = {
  /** connects form with submit button */
  formId: string;
  /** should contain inputs, selectors or other data entrance elements  */
  children: JSX.Element;
  /** should contain submit handler function that will receive children elements data */
  onSubmit(event: React.FormEvent<HTMLElement>): void;
  /** should contain button text */
  buttonTxt: string;
};

const Form: React.FunctionComponent<FormTypes> = ({
  formId,
  children,
  onSubmit,
  buttonTxt
}) => (
  <form id={formId} onSubmit={onSubmit}>
    <div>{children}</div>
    <Button type="submit" form={formId} txt={buttonTxt} />
  </form>
);

export default Form;
