export const ADD_USER = 'USERS/ADD_USER';
export const DELETE_USER = 'USERS/DELETE_USER';

export const addUser = userData => {
  return {
    type: ADD_USER,
    payload: userData,
  };
};

export const deleteUser = id => {
  return {
    type: DELETE_USER,
    payload: {
      id,
    },
  };
};
