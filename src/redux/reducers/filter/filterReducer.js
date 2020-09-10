import { combineReducers } from "redux";
import * as filterTypes from "./filterActionTypes";

const filterMonth = (state = 0, { type, payload }) => {
  switch (type) {
    case filterTypes.FILTER_MONTH:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({ filterMonth });
