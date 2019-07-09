import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Table from "#components/Table/Table";

const mapStateToProps = state => {
  const { data } = state.ratesReducer;

  return {
    rates: data.rates
  };
};

const parseRates = (headers, rates) => {
  return [
    ...headers,
    ...Object.entries(rates).map(([key, value]) => {
      return [key, value.toString()];
    })
  ];
};

const RatesTable = ({ rates }) => {
  const noRates = Object.keys(rates).length === 0;
  const headers = [["Currency", "Rate"]];

  if (noRates) {
    return <Table data={headers} />;
  }

  return <Table data={parseRates(headers, rates)} />;
};

RatesTable.defaultProps = {
  rates: {}
};

RatesTable.propTypes = {
  rates: PropTypes.objectOf(PropTypes.number)
};

export default connect(mapStateToProps)(RatesTable);
