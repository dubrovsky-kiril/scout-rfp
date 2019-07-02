import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchRates } from "#store/actions";
import App from "./App";

const AppContainer = ({ dispatch, isDataFetching }) => {
  const [isBundleFetching, toggleBundleFetchStatus] = React.useState(true);

  React.useEffect(() => {
    if (document.getElementById("loader")) {
      document.getElementById("loader").remove();
    }

    toggleBundleFetchStatus(!isBundleFetching);
  }, []);

  return isBundleFetching ? (
    <span>Loading..</span>
  ) : (
    <App
      isDataFetching={isDataFetching}
      onClick={() => dispatch(fetchRates())}
    />
  );
};

AppContainer.propTypes = {
  data: PropTypes.shape({
    base: PropTypes.string,
    date: PropTypes.string,
    rates: PropTypes.objectOf(PropTypes.number)
  }).isRequired,
  isDataFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
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
