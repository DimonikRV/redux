import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../src/store/store';
import TransferList from '../src/options/TransferList';

const App = () => {
  return (
    <Provider store={store}>
      <TransferList />
    </Provider>
  );
};
export default App;
