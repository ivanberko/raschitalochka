import React from "react";
import { Route, Redirect, Switch} from 'react-router-dom';

import Registartion from '../Registration/Registration';
import Login from '../Login/Login'
import Home from '../../Pages/Home/Home';


export const App = (props) => {
  console.log(props);
  return (
    <div>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/registration" component={Registartion} />
      <Route path="/home" component={Home} />
      <Redirect to="/" />
    </Switch>
    </div>
  );
};

export default App;
