export const changeFromAmount = (payload) => {
  return { type: "FROM_AMOUNT", payload: payload };
};
const fromAmountReducer = (state = 1, action) => {
  switch (action.type) {
    case "FROM_AMOUNT":
      return action.payload;
    default:
      return state;
  }
};

export default fromAmountReducer;
