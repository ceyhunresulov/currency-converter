export const loadAllCurrency = (payload) => {
  return { type: "ALL_CURRENCY", payload: payload };
};

const allCurrencyReducer = (state = [], action) => {
  switch (action.type) {
    case "ALL_CURRENCY":
      return action.payload;
    default:
      return state;
  }
};

export default allCurrencyReducer;

