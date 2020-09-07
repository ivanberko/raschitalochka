import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducers from '../reducers/rootReducers';

const rootPersistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(rootPersistConfig,rootReducers);
const composeEnhancer = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(persistedReducer,composeEnhancer);

export const persistor = persistStore(store);
export default store;

