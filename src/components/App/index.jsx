import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Registartion from "../../Pages/Registration/Registration";
import Login from "../../Pages/Login/Login";
import Home from "../../containers/HomeContainer";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import { load } from "../../services/localStorage";

export const App = (props) => {
  const isAuthorized = load("session");
  return (
    <div>
      <Router>
        <PrivateRoute path="/" component={Home} />
        {/* <Route
          path="/"
          render={() =>
            isAuthorized ? <Redirect to="/home" /> : <Redirect to="/login" />
          }
        /> */}
        <Route path="/login" exact component={Login} />
        <Route path="/registration" exact component={Registartion} />
        <Route path="/home" component={Home} />
      </Router>
    </div>
  );
};

export default App;
