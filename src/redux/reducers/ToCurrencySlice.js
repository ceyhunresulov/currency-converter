export const toggleToCurrency = (payload) => {
  return { type: "TOGGLE_TO_CURRENCY", payload: payload };
};

const toCurrencyReducer = (state = "USD", action) => {
  switch (action.type) {
    case "TOGGLE_TO_CURRENCY":
      return action.payload;
    default:
      return state;
  }
};

export default toCurrencyReducer;
