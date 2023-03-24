import store from './store';
import { setLanguage } from './language.actions';
import { addProduct, removeProduct } from './cart.actions';
import { setUser } from './user.actions';

store.dispatch(setLanguage('jp'));
store.dispatch(
  addProduct({
    id: 76,
    name: 'milk',
  }),
);
store.dispatch(removeProduct(76));

store.dispatch(
  addProduct({
    id: 76,
    name: 'milk',
  }),
);
store.dispatch(
  setUser({
    name: 'Bob',
  }),
);

store.subscribe();

console.log(store.getState());
