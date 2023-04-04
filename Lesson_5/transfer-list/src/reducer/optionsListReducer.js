import { options } from '../options';
import { toggleOptions } from '../actions/optionsListActions';

const initialState = {
  optionsList: options,
  selected: [],
};

export const optionsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case toggleOptions:
      return {
        ...state,
        selected: state.selected.includes(action.payload.id)
          ? state.selected.filter(id => id !== action.payload.id)
          : state.selected.concat(action.payload.id),
      };
    default:
      return state;
  }
};
