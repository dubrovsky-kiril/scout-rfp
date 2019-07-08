import React, { memo } from "react";
import PropTypes from "prop-types";
import Button from "#components/Button/Button";
import styles from "./Modal.scss";

const Modal = ({ title, msg, onClick, buttonTxt }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>{title}</h2>
        <p>{msg}</p>
        <Button onClick={onClick}>{buttonTxt}</Button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  buttonTxt: PropTypes.string.isRequired
};

export default memo(Modal);
