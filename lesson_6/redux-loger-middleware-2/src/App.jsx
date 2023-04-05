import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../src/store/store';
import SearchField from './users/SearchField';
import UserInfo from './users/UserInfo';

const App = () => {
  return (
    <Provider store={store}>
      <div class="page">
        <UserInfo />
        <SearchField />
      </div>
    </Provider>
  );
};
export default App;
