import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Table from "#components/Table/Table";

const mapStateToProps = state => {
  const { data } = state;

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
  const headers = [["Currency", "Rate"]];

  if (!rates) {
    return <Table data={headers} />;
  }

  return <Table data={parseRates(headers, rates)} />;
};

RatesTable.defaultProps = {
  rates: undefined
};

RatesTable.propTypes = {
  rates: PropTypes.objectOf(PropTypes.number)
};

export default connect(mapStateToProps)(RatesTable);
