import { createStore, combineReducers } from 'redux';
import { userReducer } from '../src/reducer/userReducer';

const reducer = combineReducers({
  users: userReducer,
});

export const store = createStore(reducer);
