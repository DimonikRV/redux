const initialState = 'en';

export const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case action.payload:
      return (state = action.payload);
    default:
      return state;
  }
};
