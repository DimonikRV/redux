export const filter = 'USERS_FILTER';

export const filteringText = value => {
  return {
    type: filter,
    payload: {
      value,
    },
  };
};
