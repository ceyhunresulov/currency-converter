import { useEffect } from "react";
import Currency from "./components/Currency";
import { useDispatch, useSelector } from "react-redux";
import { loadAllCurrency } from "./redux/reducers/AllCurrencySlice";
import { changeToAmount } from "./redux/reducers/ToAmountSlice";
import { changeFromAmount } from "./redux/reducers/FromAmountSlice";

function App() {
  const fromCurrency = useSelector((state) => state.from);
  const toCurrency = useSelector((state) => state.to);
  const fromAmount = useSelector((state) => state.fromAmount);
  const toAmount = useSelector((state) => state.toAmount);

  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://api.exchangerate.host/latest")
      .then((res) => res.json())
      .then((res) => {
        dispatch(loadAllCurrency(Object.keys(res.rates)));
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://api.exchangerate.host/convert?from=${fromCurrency}&to=${toCurrency}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.result);
        dispatch(
          changeToAmount(Math.round(res.result * fromAmount * 10000) / 10000)
        );
      });
  }, [fromAmount, toAmount, fromCurrency, toCurrency]);

  return (
    <>
      <h1 className="title">Currency Converter</h1>
      <Currency />
    </>
  );
}

export default App;
