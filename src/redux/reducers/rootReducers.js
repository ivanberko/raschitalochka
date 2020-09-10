import { combineReducers } from "redux";

import sessionReducer from './session/sessionReducer';
// oursReduser finance


const rootreducer = combineReducers({
  session: sessionReducer,
// oursReduser finance

});

export default rootreducer;

// Хранить в локалсторадж инфу объектом {юзерИд, токен, имя}
//при старте приложения записывать в стор эту инфу ^^^ добвать редусеров в сессион и  