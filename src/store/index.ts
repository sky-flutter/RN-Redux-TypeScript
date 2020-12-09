import { createStore, combineReducers, applyMiddleware } from "redux";
import rootReducers from './RootReducers';
import thunk from 'redux-thunk';
let store = createStore(rootReducers, applyMiddleware(thunk));

export default store;