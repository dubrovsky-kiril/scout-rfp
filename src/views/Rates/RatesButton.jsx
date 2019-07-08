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

const mapDispatchToProps = dispatch => {
  return {
    fetchRates: () => dispatch(fetchLatestRates())
  };
};

const RatesButton = ({ isDataFetching, isDataFetched, fetchRates }) => {
  return (
    <Button
      isDisabled={isDataFetching}
      onClick={fetchRates}
      isPending={isDataFetching}
    >
      {`${isDataFetched ? "Refetch" : "Fetch"} rates`}
    </Button>
  );
};

RatesButton.propTypes = {
  isDataFetched: PropTypes.bool.isRequired,
  isDataFetching: PropTypes.bool.isRequired,
  fetchRates: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RatesButton);
