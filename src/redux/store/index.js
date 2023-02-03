import { createStore, combineReducers } from "redux";

import fromAmountReducer from "../reducers/FromAmountSlice";
import toCurrencyReducer from "../reducers/ToCurrencySlice";
import toAmountReducer from "../reducers/ToAmountSlice";
import fromCurrencyReducer from "../reducers/FromCurrencySlice";
import allCurrencyReducer from "../reducers/AllCurrencySlice";

const rootReducer = combineReducers({
  from: fromCurrencyReducer,
  to: toCurrencyReducer,
  all: allCurrencyReducer,
  fromAmount: fromAmountReducer,
  toAmount: toAmountReducer,
});
const store = createStore(rootReducer);

export default store;
