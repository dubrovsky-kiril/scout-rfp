import React, { memo } from "react";
import PropTypes from "prop-types";
import Loader from "#components/Loader/Loader";
import styles from "./Button.scss";

const Button = ({ children, isDisabled, onClick, isPending }) => {
  return (
    <button
      className={styles.button}
      disabled={isDisabled}
      onClick={onClick}
      type="button"
    >
      {isPending && <Loader />}
      {children}
    </button>
  );
};

Button.defaultProps = {
  isDisabled: false,
  isPending: false
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  isPending: PropTypes.bool
};

export default memo(Button);
