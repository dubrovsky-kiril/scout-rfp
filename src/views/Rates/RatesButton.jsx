import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchLatestRates, toggleModal } from "#store/actions";
import Button from "#components/Button/Button";

const mapStateToProps = state => {
  const { isFetching, isFetched } = state.ratesReducer;

  return {
    isDataFetching: isFetching,
    isDataFetched: isFetched
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRates: () => dispatch(fetchLatestRates()),
    showModal: () => dispatch(toggleModal(true))
  };
};

const RatesButton = ({
  isDataFetching,
  isDataFetched,
  fetchRates,
  showModal
}) => {
  const handleOnClick = () => fetchRates().catch(showModal);

  return (
    <Button
      isDisabled={isDataFetching}
      onClick={handleOnClick}
      isPending={isDataFetching}
    >
      {`${isDataFetched ? "Refetch" : "Fetch"} rates`}
    </Button>
  );
};

RatesButton.propTypes = {
  isDataFetched: PropTypes.bool.isRequired,
  isDataFetching: PropTypes.bool.isRequired,
  fetchRates: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RatesButton);
