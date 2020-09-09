import { combineReducers } from "redux";

import sessionReducer from './session/sessionReducer';
// oursReduser finance


const rootreducer = combineReducers({
  session: sessionReducer,
// oursReduser finance

});

export default rootreducer;