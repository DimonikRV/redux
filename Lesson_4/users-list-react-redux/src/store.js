import { createStore, combineReducers } from 'redux';
import { usersReducer } from './users/users.reducer';

const reducer = combineReducers({
  users: usersReducer,
});
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ / window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
);

export default store;
