import * as React from "react";

type ButtonTypes = {
  /** defines type of button (submit, button etc.) */
  type?: string;
  /** defines form of which button belongs to */
  form?: string;
  /** defines button text */
  txt: string;
  /** defines show status of loader */
  isPending?: boolean;
};

const Button: React.FunctionComponent<ButtonTypes> = ({
  type = "button",
  form = "",
  txt,
  isPending = false
}) => {
  return (
    <button type={type} form={form}>
      {isPending ? "Loading" : txt}
    </button>
  );
};

export default Button;
