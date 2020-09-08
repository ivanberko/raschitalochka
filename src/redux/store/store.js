import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootreducer from "../reducers/rootReducers";

const composeEnhancer = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootreducer,composeEnhancer); 

export default store;

