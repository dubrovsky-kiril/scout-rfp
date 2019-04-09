import * as React from "react";

type InputTypes = {
  id: string;
  label: string;
  type: string;
  isRequired?: boolean;
};

const Input = ({ id, label, type, isRequired = false }: InputTypes) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} type={type} required={isRequired} />
    </div>
  );
};

export default Input;
