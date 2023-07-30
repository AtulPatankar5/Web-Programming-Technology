import counterReducer from "./counterReducer";
import loggedReducer from "./loggedReducer";
import { combineReducers } from 'redux';

const combineReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
})
export default combineReducers;