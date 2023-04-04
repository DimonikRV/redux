import { createStore, combineReducers } from 'redux';
import { optionsListReducer } from '../reducer/optionsListReducer';

const reducer = combineReducers({
  options: optionsListReducer,
});

export const store = createStore(reducer);
