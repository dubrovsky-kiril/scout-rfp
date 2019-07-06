import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchLatestRates } from "#store/actions";
import Button from "#components/Button/Button";

const mapStateToProps = state => {
  const { isFetching } = state;

  return {
    isDataFetching: isFetching
  };
};

const GetRatesButton = ({ dispatch, isDataFetching }) => {
  return (
    <Button
      isDisabled={isDataFetching}
      onClick={() => dispatch(fetchLatestRates())}
    >
      Get rates
    </Button>
  );
};

GetRatesButton.propTypes = {
  isDataFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(React.memo(GetRatesButton));
