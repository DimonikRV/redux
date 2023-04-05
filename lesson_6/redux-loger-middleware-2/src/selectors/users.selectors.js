export const userDataSelector = state => {
  return state.users.userData;
};

export const fetchingSelector = state => {
  return state.users.isFetching;
};
