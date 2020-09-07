import * as actionTypes from "./sessionActionTypes";

export const user = (state = { error: "" }, {type, payload}) => {
  switch (type) {
    case actionTypes.LOGIN_SUCCESS:
        return payload.user;
        
    case actionTypes.LOGIN_ERROR:
      return {...payload};

    default:
      return state;
  }
};
