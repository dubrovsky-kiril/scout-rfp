import React from "react";
import ExchangeRates from "#views/ExchangeRates";
import styles from "./App.scss";

const App = () => {
  return (
    <div className={styles.app}>
      <ExchangeRates />
    </div>
  );
};

export default App;
