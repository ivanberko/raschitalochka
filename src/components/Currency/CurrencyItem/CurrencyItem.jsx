import React from "react";
import { currencyItem } from "./CurrencyItem.module.css";

const CurrencyItem = ({ currency, sale, purchase }) => {
  return (
    <div className={currencyItem}>
      <p>{currency}</p>
      <p>{sale}</p>
      <p>{purchase}</p>
    </div>
  );
};

export default CurrencyItem;
