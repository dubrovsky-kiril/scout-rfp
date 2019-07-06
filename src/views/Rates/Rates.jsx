import React from "react";
import RatesTable from "#views/Rates/RatesTable";
import RatesButton from "#views/Rates/RatesButton";
import styles from "./Rates.scss";

const Rates = () => {
  return (
    <div className={styles.container}>
      <div className={styles.rates}>
        <RatesTable />
        <RatesButton />
      </div>
    </div>
  );
};

export default Rates;
