import * as React from "react";

type ButtonTypes = {
  type?: "button" | "submit" | "reset";
  form?: string;
  txt: string;
  isPending?: boolean;
};

const Button = ({
  type = "button",
  form = "",
  txt,
  isPending = false
}: ButtonTypes) => {
  return (
    <button type={type} form={form}>
      {isPending ? "Loading" : txt}
    </button>
  );
};

export default Button;
