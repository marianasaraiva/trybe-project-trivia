import { combineReducers } from 'redux';
import userReducer from './userReducer';
import token from './token';
import questions from './questions';

const rootReducer = combineReducers({ userReducer, token, questions });

export default rootReducer;
