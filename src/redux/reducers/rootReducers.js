import { combineReducers } from "redux";

import sessionReducer from "./session/sessionReducer";
import financeReducer from "./finance/financeReducer";
import filterReducer from "./filter/filterReducer";

const rootreducer = combineReducers({
  session: sessionReducer,
  finance: financeReducer,
  filter: filterReducer,
});

export default rootreducer;

// Хранить в локалсторадж инфу объектом {юзерИд, токен, имя}
//при старте приложения записывать в стор эту инфу ^^^ добвать редусеров в сессион и
