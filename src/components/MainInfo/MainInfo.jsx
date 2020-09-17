import React from "react";
import { Switch, Route} from 'react-router-dom';
import Currency from '../../components/Currency/Currency';

import Filter from '../../containers/FilterContainer';
import Main from '../../components/Main/Main';


const MainInfo = () => {
  return (
    <>
      <Switch>
        <Route path="/home/currency" exact component={Currency} />
        <Route path="/home/diagram" exact component={Filter} />
        <Route path="/home" exact component={Main} />
      </Switch>
    </>
  );
};

export default MainInfo;
