import thunk from "redux-thunk";
import { Reducer } from "./store.reducer";

const { combineReducers, legacy_createStore, applyMiddleware } = require("redux");


const rootReducer=combineReducers({
    list:Reducer
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))