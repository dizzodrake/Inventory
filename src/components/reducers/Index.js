import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import allReducer from './'

export default createStore(allReducers, applyMiddleware(thunk));