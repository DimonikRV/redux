export const prevPage = 'USERSLIST/GO_PREV';
export const nextPage = 'USERSLIST/GO_NEXT';

export const goPrev = () => {
  return {
    type: prevPage,
  };
};
export const goNext = () => {
  return {
    type: nextPage,
  };
};
