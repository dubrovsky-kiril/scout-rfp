import React, { memo } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import RatesTable from "#views/Rates/RatesTable";
import RatesButton from "#views/Rates/RatesButton";
import styles from "./Rates.scss";

const mapStateToProps = state => {
  const { data, isFetched } = state;

  return {
    base: isFetched ? data.base : "",
    date: isFetched ? data.date : "",
    isFetched
  };
};

const Rates = ({ base, date, isFetched }) => {
  return (
    <div className={styles.container}>
      <div className={styles.rates}>
        {isFetched ? (
          <h2>{`Exchange rates for ${base} based on ${date}`}</h2>
        ) : (
          <h2>Exchange rates</h2>
        )}
        <RatesTable />
        <RatesButton />
      </div>
    </div>
  );
};

Rates.propTypes = {
  isFetched: PropTypes.bool.isRequired,
  base: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(memo(Rates));
