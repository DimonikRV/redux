import { createSelector } from 'reselect';

export const optionsSelector = state => {
  return state.options.optionsList;
};
export const selectedOptionSelector = state => {
  return state.options.selected;
};

export const availableOptionsSelector = createSelector(
  [optionsSelector, selectedOptionSelector],
  (allOptions, selectedOptions) => {
    return allOptions.filter(option => !selectedOptions.includes(option.id));
  },
);

export const selectedOptionListSelector = createSelector(
  [optionsSelector, selectedOptionSelector],
  (allOptions, selectedOptions) => {
    return allOptions.filter(option => selectedOptions.includes(option.id));
  },
);
