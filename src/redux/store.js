

import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as newcarReducer } from "./newcarReducer/reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({newcarReducer});

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));