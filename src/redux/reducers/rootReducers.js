import { combineReducers } from "redux";

import { user } from "./session/sessionReducer";
const rootreducer = combineReducers({ user });

export default rootreducer;
