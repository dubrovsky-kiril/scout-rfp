import React from "react";
import PropTypes from "prop-types";
import Button from "#components/Button/Button";
import styles from "./App.scss";

const App = ({ onClick, isDataFetching }) => {
  return (
    <div className={styles.app}>
      <Button isDisabled={isDataFetching} onClick={onClick}>
        Get rates
      </Button>
    </div>
  );
};

App.propTypes = {
  isDataFetching: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default React.memo(App);
