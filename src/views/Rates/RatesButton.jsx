import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchLatestRates } from "#store/actions";
import Button from "#components/Button/Button";

const mapStateToProps = state => {
  const { isFetching, isFetched } = state;

  return {
    isDataFetching: isFetching,
    isDataFetched: isFetched
  };
};

const RatesButton = ({ dispatch, isDataFetching, isDataFetched }) => {
  return (
    <Button
      isDisabled={isDataFetching}
      onClick={() => dispatch(fetchLatestRates())}
    >
      {`${isDataFetched ? "Refetch" : "Fetch"} rates`}
    </Button>
  );
};

RatesButton.propTypes = {
  isDataFetched: PropTypes.bool.isRequired,
  isDataFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(RatesButton);
