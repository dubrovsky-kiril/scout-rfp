import React from "react";
import PropTypes from "prop-types";
import Button from "#components/Button/Button";
import styles from "./App.scss";

const handleOnClick = () => {
  console.log("clicked");
};

const App = ({ currency, lastUpdateDate, rates }) => {
  console.log(currency, lastUpdateDate, rates);
  return (
    <div className={styles.app}>
      <Button onClick={handleOnClick}>Get rates</Button>
    </div>
  );
};

App.propTypes = {
  currency: PropTypes.string.isRequired,
  lastUpdateDate: PropTypes.string.isRequired,
  rates: PropTypes.objectOf(PropTypes.number).isRequired
};

export default React.memo(App);
