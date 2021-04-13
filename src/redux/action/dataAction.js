import axios from "axios";
import {api_url} from "../../db";

export const fetchDataAction = () => {
  return async (dispatch) => {
    try {
      dispatch({type: "FETCH_DATA_START"});
      const response = await axios.get(api_url);
      dispatch({type: "FETCH_DATA_SUCCESS", payload: response.data.data});
    } catch (err) {
      dispatch({type: "FETCH_DATA_FAILED", payload: err});
    }
  };
};
