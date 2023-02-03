export const toggleFromCurrency = (payload) => {
  return { type: "TOGGLE_FROM_CURRENCY", payload: payload };
};

const fromCurrencyReducer = (state = "AZN", action) => {
  switch (action.type) {
    case "TOGGLE_FROM_CURRENCY":
      return action.payload;
    default:
      return state;
  }
};

export default fromCurrencyReducer;
