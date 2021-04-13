const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
  errorMessage: "",
};

export const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_DATA_START":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "FETCH_DATA_FAILED":
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
