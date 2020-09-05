import React from "react";
import {
  list,
  list__item,
  list__itemRow,
  boxButtons,
} from "./MainTableMobile.module.css";

const transferData = [
  {
    date: "07.01.19",
    type: "+",
    categories: "Regular Income",
    comment: "Cash",
    amount: "1 000.00",
    balance: "14 870.00",
    borderColor: "#75c16e",
  },
  {
    date: "07.01.19",
    type: "-",
    categories: "Food",
    comment: "Coffee with Tim",
    amount: "30.00",
    balance: "13 870.00",
    borderColor: "#e28b20",
  },
  {
    date: "07.01.19",
    type: "+",
    categories: "Regular Income",
    comment: "Cash",
    amount: "1 000.00",
    balance: "14 870.00",
    borderColor: "#75c16e",
  },
  {
    date: "07.01.19",
    type: "-",
    categories: "Car",
    comment: "Oil",
    amount: "1 000.00",
    balance: "13 970.00",
    borderColor: "#d25925",
  },
];

const MainTableMobile = ({ children }) => {
  return (
    <section>
      <ul className={list}>
        {transferData.map(
          (
            { date, type, categories, comment, amount, balance, borderColor },
            index
          ) => (
            <li
              key={index}
              className={list__item}
              style={{ borderColor: borderColor }}
            >
              <div className={list__itemRow}>
                <p>Date</p>
                <p>{date}</p>
              </div>
              <div className={list__itemRow}>
                <p>Type</p>
                <p>{type}</p>
              </div>
              <div className={list__itemRow}>
                <p>Category</p>
                <p>{categories}</p>
              </div>
              <div className={list__itemRow}>
                <p>Comments</p>
                <p>{comment}</p>
              </div>
              <div className={list__itemRow}>
                <p>Amount, UAH</p>
                <p style={{ color: type === "+" ? "#75c16e" : "#ff6c00" }}>
                  {amount}
                </p>
              </div>
              <div className={list__itemRow}>
                <p>Balance After</p>
                <p>{balance}</p>
              </div>
            </li>
          )
        )}
      </ul>
      <div className={boxButtons}>{children}</div>
    </section>
  );
};

export default MainTableMobile;
