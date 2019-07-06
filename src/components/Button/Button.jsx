import React, { memo } from "react";
import PropTypes from "prop-types";
import styles from "./Button.scss";

const Button = ({ children, isDisabled, onClick }) => {
  return (
    <button
      className={styles.button}
      disabled={isDisabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  isDisabled: false
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

export default memo(Button);
