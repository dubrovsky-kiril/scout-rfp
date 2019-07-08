import {
  REQUEST_RATES_STARTED,
  REQUEST_RATES_SUCCESS,
  REQUEST_RATES_FAILURE,
  TOGGLE_MODAL
} from "#store/actions";

const ratesInitialState = {
  isFetched: false,
  isFetching: false,
  data: {},
  error: ""
};

export const ratesReducer = (state = ratesInitialState, action) => {
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
        isFetched: true,
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

const UiInitialState = {
  isModalOpen: false
};

export const UiReducer = (state = UiInitialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        isModalOpen: action.payload
      };
    default:
      return state;
  }
};
