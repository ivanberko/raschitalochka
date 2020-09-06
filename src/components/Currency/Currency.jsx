import React from "react";
import { currency, currencyHead } from "./Currency.module.css";
import CurrencyItem from "./CurrencyItem/CurrencyItem";

const Currency = () => {
  return (
    <div className={currency}>
      <div className={currencyHead}>
        <p>Currency</p>
        <p>Sale</p>
        <p>Purchase</p>
      </div>

      <CurrencyItem currency={"USD"} sale={27.55} purchase={27.55} />
      <CurrencyItem currency={"EUR"} sale={30.11} purchase={30.11} />
      <CurrencyItem currency={"USD"} sale={10.11} purchase={10.11} />
    </div>
  );
};

export default Currency;
