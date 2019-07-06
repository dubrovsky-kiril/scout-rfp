import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NumericTable from "#components/NumericTable/NumericTable";

const mapStateToProps = state => {
  const { data, isFetched } = state;

  console.log(isFetched);

  return {
    isFetched,
    base: data.base,
    date: data.date,
    rates: data.rates
  };
};

const RatesTable = ({ isFetched, base, date, rates }) => {
  if (!isFetched) {
    return null;
  }

  const caption = `Exchange rate for ${base} based on ${date}`;

  return <NumericTable caption={caption} data={rates} />;
};

RatesTable.propTypes = {
  isFetched: PropTypes.bool.isRequired,
  base: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rates: PropTypes.objectOf(PropTypes.number).isRequired
};

export default connect(mapStateToProps)(React.memo(RatesTable));
