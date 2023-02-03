import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../index.css";
import { changeFromAmount } from "../redux/reducers/FromAmountSlice";
import { toggleFromCurrency } from "../redux/reducers/FromCurrencySlice";
import { changeToAmount } from "../redux/reducers/ToAmountSlice";
import { toggleToCurrency } from "../redux/reducers/ToCurrencySlice";
import { TfiExchangeVertical } from "react-icons/tfi";

function Currency() {
  const dispatch = useDispatch();
  const allCurrency = useSelector((state) => state.all);
  const fromAmount = useSelector((state) => state.fromAmount);
  const toAmount = useSelector((state) => state.toAmount);

  const fromCurrencyChange = (e) => {
    dispatch(toggleFromCurrency(e.target.value));
  };

  const toCurrencyChange = (e) => {
    dispatch(toggleToCurrency(e.target.value));
  };

  const toAmountChange = (e) => {
    dispatch(changeToAmount(e.target.value));
  };

  const fromAmountChange = (e) => {
    dispatch(changeFromAmount(e.target.value));
  };

  return (
    <form>
      <label htmlFor="">
        <input type="number" value={fromAmount} onChange={fromAmountChange} />
        <select name="" id="" onChange={fromCurrencyChange}>
          <option value="AZN">AZN</option>
          {allCurrency
            .filter((item) => item !== "AZN")
            .map((currency, index) => (
              <option key={index} value={currency}>
                {currency}
              </option>
            ))}
        </select>
      </label>
      <TfiExchangeVertical className="exchange-arrow" />
      <label htmlFor="">
        <input type="number" value={toAmount} onChange={toAmountChange} />
        <select name="" id="" onChange={toCurrencyChange}>
          <option value="USD">USD</option>
          {allCurrency
            .filter((item) => item !== "USD")
            .map((currency, index) => (
              <option key={index} value={currency}>
                {currency}
              </option>
            ))}
        </select>
      </label>
    </form>
  );
}

export default Currency;
