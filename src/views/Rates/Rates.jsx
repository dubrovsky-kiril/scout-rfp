import React from "react";
import PropTypes from "prop-types";
import RatesButton from "#views/Rates/RatesButton";
import styles from "./Rates.scss";

const data = JSON.parse(
  JSON.stringify({
    rates: {
      CAD: 1.4819,
      HKD: 8.8194,
      ISK: 141.7,
      PHP: 57.781,
      DKK: 7.4639,
      HUF: 322.91,
      CZK: 25.462,
      AUD: 1.6155,
      RON: 4.7331,
      SEK: 10.5565,
      IDR: 15976.79,
      INR: 77.928,
      BRL: 4.3381,
      RUB: 71.4958,
      HRK: 7.3965,
      JPY: 122.36,
      THB: 34.643,
      CHF: 1.1169,
      SGD: 1.5317,
      PLN: 4.2429,
      BGN: 1.9558,
      TRY: 6.3891,
      CNY: 7.7706,
      NOK: 9.6715,
      NZD: 1.6956,
      ZAR: 15.9594,
      USD: 1.1301,
      MXN: 21.5491,
      ILS: 4.0388,
      GBP: 0.89443,
      KRW: 1318.3,
      MYR: 4.6769
    },
    base: "EUR",
    date: "2019-07-02"
  })
);

const RatesTable = ({ rates }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Currency</td>
          <td>Rate</td>
        </tr>
      </thead>
      <tbody>
        {Object.entries(rates).map(([key, value], index) => {
          return (
            <tr key={index}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

RatesTable.propTypes = {
  rates: PropTypes.objectOf(PropTypes.number).isRequired
};

const Rates = () => {
  console.log(data);
  return (
    <div className={styles.container}>
      <div className={styles.eur_rates}>
        <RatesTable rates={data.rates} />
        <RatesButton />
      </div>
    </div>
  );
};

export default Rates;
