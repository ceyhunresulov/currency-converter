export const changeToAmount = (payload) => {
  return { type: "TO_AMOUNT", payload: payload };
};

const toAmountReducer = (state = 1, action) => {
  switch (action.type) {
    case "TO_AMOUNT":
      return action.payload;
    default:
      return state;
  }
};

export default toAmountReducer;
