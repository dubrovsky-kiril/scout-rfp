import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, isDisabled, onClick }) => {
  return (
    <button disabled={isDisabled} onClick={onClick} type="button">
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default React.memo(Button);
