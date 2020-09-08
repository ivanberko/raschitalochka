import axios from "axios";

import { save } from "../../../services/localStorage";

import { getToken } from "./sessionSelectors";
import {
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
} from "./sessionActions";
import { setAuthHeader, setBaseURL } from "../../../services/api";

export const login = (data) => (dispatch) => {
  dispatch(loginRequest());
  setBaseURL();

  axios
    .post("/api/login", data)
    .then((res) => {
      save("token", res.data.token);
      save("userId", res.data.user.id);
      setAuthHeader(res.data.token);
      dispatch(loginSuccess(res.data));
    })
    .catch((error) => {
      dispatch(loginError(error.response.data.message));
    });
};

export const logout = () => (dispatch, getState) => {
  dispatch(logoutRequest());
  const token = getToken(getState());

  setBaseURL();
  setAuthHeader(token);

  axios
    .get("/api/logout")
    .then(() => {
      save("token", null);
      save("userId", null);
      dispatch(logoutSuccess());
    })
    .catch((error) => dispatch(logoutError(error.response.data.message)));
};
