import React from "react";
import { BrowserRouter as Route, Redirect } from "react-router-dom";
import { load } from "../../services/localStorage";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthorized = load("session");
  console.log(!!isAuthorized);
  return (
    <Route
      {...rest}
      render={(props) =>
        (!!isAuthorized ?  <Component {...props} /> : <Redirect to="/login" />)
      }
    />
  );
};

export default PrivateRoute;
