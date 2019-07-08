import React, { memo } from "react";
import PropTypes from "prop-types";
import Button from "#components/Button/Button";
import styles from "./Modal.scss";

const Modal = ({ title, msg, onClick }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>{title}</h2>
        <p>{msg}</p>
        <Button onClick={onClick}>Return back</Button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default memo(Modal);
