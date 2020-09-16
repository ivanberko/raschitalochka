import { save } from "../../services/localStorage";

import { getToken } from "./sessionSelectors";
import {
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
} from "./sessionActions";
import { loginFetch, logoutFetch, setAuthHeader } from "../../services/api";

export const userSession = (data) => (dispatch) => {
  dispatch(loginSuccess(data))
}

export const login = (data, history) => (dispatch) => {
  dispatch(loginRequest());
  loginFetch(data)
    .then(({ data }) => {
      save("session", {
        token: data.token,
        user: { id: data.user.id, userName: data.user.name },
      });
      setAuthHeader(data.token);
      dispatch(loginSuccess(data));
      history.push("/home");
    })
    .catch((error) => {
      dispatch(loginError(error));
      alert("User is not defined");
    });
};

export const logout = (storeToken = null) => (dispatch, getState) => {
  dispatch(logoutRequest());
  const token = storeToken ? storeToken : getToken(getState());
  logoutFetch(token)
    .then(() => {
      save("session", null);
      dispatch(logoutSuccess());
    })
    .catch((error) => dispatch(logoutError(error)));
};