import * as React from "react";
import styled from "styled-components";

// just an example of styled-components use
const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  cursor: pointer;
`;

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
    <StyledButton type={type} form={form}>
      {isPending ? "Loading" : txt}
    </StyledButton>
  );
};

export default Button;
