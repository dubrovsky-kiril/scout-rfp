import axios from "axios";

export const REQUEST_RATES_STARTED = "REQUEST_RATES_STARTED";
export const REQUEST_RATES_SUCCESS = "REQUEST_RATES_SUCCESS";
export const REQUEST_RATES_FAILURE = "REQUEST_RATES_FAILURE";

const requestRatesStarted = () => ({ type: REQUEST_RATES_STARTED });
const requestRatesSuccess = json => ({
  type: REQUEST_RATES_SUCCESS,
  payload: json
});
const requestRatesFailure = error => {
  return {
    type: REQUEST_RATES_FAILURE,
    payload: error
  };
};

export const fetchLatestRates = () => {
  return dispatch => {
    dispatch(requestRatesStarted());

    return axios(`${process.env.NODE_WEB_API_URL}/latest`)
      .then(res => dispatch(requestRatesSuccess(res.data)))
      .catch(err => dispatch(requestRatesFailure(err)));
  };
};
