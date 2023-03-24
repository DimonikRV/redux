import { addUser, deleteUser, updateUser } from './users.actions';
import store from './store';

const userData = {
  id: 76,
  name: 'Sarah',
};

store.dispatch(addUser(userData));
store.dispatch(deleteUser(76));
store.dispatch(addUser(userData));
store.dispatch(
  updateUser(76, {
    name: 'Tom',
  }),
);

store.subscribe(() => {
  console.log(store.getState());
});
