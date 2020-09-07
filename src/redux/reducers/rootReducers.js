import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// oursReduser session
import { user } from './session/sessionReducer';
// oursReduser finance

const sessionPersistConfig = {
  key: "session",
  storage,
  whitelist: ["token"],
};

const financePersistConfig = {
  key: "finance",
  storage,
};

const rootreducer = combineReducers({
  session: persistReducer(sessionPersistConfig, user),
  // finance: persistReducer(financePersistConfig, "ourreducer"),
});

export default rootreducer;