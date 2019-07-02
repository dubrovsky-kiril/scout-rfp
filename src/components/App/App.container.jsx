import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchRates } from "#store/actions";
import App from "./App";

const AppContainer = ({ dispatch, isDataFetching, data, error }) => {
  const [isBundleFetching, toggleBundleFetchStatus] = React.useState(true);

  React.useEffect(() => {
    if (document.getElementById("loader")) {
      document.getElementById("loader").remove();
    }

    toggleBundleFetchStatus(!isBundleFetching);
    dispatch(fetchRates());
  }, []);

  if (isBundleFetching || isDataFetching) {
    return <span>Loading..</span>;
  }

  if (error) {
    return (
      <span>
        Something went wrong! Error:
        {error}
      </span>
    );
  }

  const { base, date, rates } = data;

  return <App currency={base} lastUpdateDate={date} rates={rates} />;
};

AppContainer.propTypes = {
  data: PropTypes.shape({
    base: PropTypes.string,
    date: PropTypes.string,
    rates: PropTypes.objectOf(PropTypes.number)
  }).isRequired,
  isDataFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  const { isFetching, data, error } = state;

  return {
    isDataFetching: isFetching,
    data,
    error
  };
};

export default connect(mapStateToProps)(React.memo(AppContainer));
