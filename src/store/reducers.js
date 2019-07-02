import {
  REQUEST_RATES_STARTED,
  REQUEST_RATES_SUCCESS,
  REQUEST_RATES_FAILURE
} from "#store/actions";

const initialState = {
  isFetching: false,
  data: {},
  error: ""
};

const ratesReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_RATES_STARTED:
      return {
        ...state,
        isFetching: true
      };
    case REQUEST_RATES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: "",
        data: { ...state.data, ...action.payload }
      };
    case REQUEST_RATES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default ratesReducer;
