import * as React from "react";

type InputTypes = {
  /** connects label with input */
  id: string;
  /** text for inputs label */
  label: string;
  /** type of input (text, number etc.) */
  type: string;
  /** forbids empty input */
  isRequired?: boolean;
};

const Input: React.FunctionComponent<InputTypes> = ({
  id,
  label,
  type,
  isRequired = false
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} type={type} required={isRequired} />
    </div>
  );
};

export default Input;
