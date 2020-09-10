import * as filterTypes from "./filterActionTypes";

export const filterMonth = (month) => ({
  type: filterTypes.FILTER_MONTH,
  payload: +month.value,
});
