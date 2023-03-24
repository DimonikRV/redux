const initialState = 'en';

export const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case action.type:
      return (state = action.type);
    default:
      return state;
  }
};
