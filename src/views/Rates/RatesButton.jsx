import React, { memo, useCallback } from "react";
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

const FetchRatesButton = ({ dispatch, isDataFetching, isDataFetched }) => {
  const fetchRates = useCallback(() => dispatch(fetchLatestRates()), []);

  return (
    <Button isDisabled={isDataFetching} onClick={fetchRates}>
      {`${isDataFetched ? "Refetch" : "Fetch"} rates`}
    </Button>
  );
};

FetchRatesButton.propTypes = {
  isDataFetched: PropTypes.bool.isRequired,
  isDataFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(memo(FetchRatesButton));
