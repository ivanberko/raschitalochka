import React from "react";
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Registartion from '../Registration/Registration';
import Login from '../Login/Login'


export const App = () => {
  return (
    <div>
      {/* <Login /> */}
      <Registartion />
    </div>
  );
};

export default App;
