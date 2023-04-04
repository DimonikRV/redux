import { createStore, combineReducers } from 'redux';
import { usersListReducer } from '../reducer/usersList.reducer';

const reducer = combineReducers({
  users: usersListReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
