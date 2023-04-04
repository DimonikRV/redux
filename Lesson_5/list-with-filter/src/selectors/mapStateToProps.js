import { createSelector } from 'reselect';

export const allUsersListSelector = state => {
  return state.users.usersList;
};

export const filterTextSelector = state => {
  return state.users.filterText;
};

export const filteredUsersSelector = createSelector(
  [allUsersListSelector, filterTextSelector],
  (usersList, filterText) =>
    usersList.filter(({ name }) => name.toLowerCase().includes(filterText.toLowerCase())),
);
