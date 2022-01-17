import { combineReducers } from 'redux';
import userReducer from './userReducer';
import token from './token';

const rootReducer = combineReducers({ userReducer, token });

export default rootReducer;
