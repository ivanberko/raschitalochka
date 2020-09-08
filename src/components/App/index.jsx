import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Registartion from "../Registration/Registration";
import Login from "../Login/Login";
import Home from "../../Pages/Home/Home";
import { load } from "../../services/localStorage";

export const App = (props) => {
  const isAuthorized = load("token");
  return (
    <div>
      <Router>
      <Route
        exact
        path="/"
        render={() => (isAuthorized ? <Redirect to="/home" /> : <Redirect to="/login" />)}
      />
        <Route path="/login" exact component={Login} />
        <Route path="/registration" component={Registartion} />
        <Route path="/home" component={Home} />
      </Router>
    </div>
  );
};

export default App;
