export const addUser = (id, name) => {
  return {
    type: 'add',
    payload: {
      id,
      name,
    },
  };
};

export const deleteUser = id => {
  return {
    type: 'delete',
    payload: {
      id,
    },
  };
};
