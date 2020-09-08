import { combineReducers } from "redux";

// oursReduser session
import sessionReducer from './session/sessionReducer';
// oursReduser finance


const rootreducer = combineReducers({
  session: sessionReducer,
});

export default rootreducer;