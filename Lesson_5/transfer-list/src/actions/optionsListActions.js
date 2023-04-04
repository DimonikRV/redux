export const toggleOptions = 'OPTIONS/TOGGLE_OPTIONS';

export const toggleSelected = id => {
  return {
    type: toggleOptions,
    payload: {
      id,
    },
  };
};
