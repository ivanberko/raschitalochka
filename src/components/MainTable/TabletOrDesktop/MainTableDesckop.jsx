import React from "react";
import {
  wrap,
  table,
  tableRow,
  tableHead,
  boxButtons,
} from "./MainTableDesckop.module.css";

const transferData = [
  {
    date: "04.01.19",
    type: "+",
    categories: "Regular Income",
    comment: "January bonus",
    amount: "100.00",
    balance: "6 900.00",
  },
  {
    date: "04.01.19",
    type: "-",
    categories: "Food",
    comment: "Coffee with Tim",
    amount: "30.00",
    balance: "3 400.00",
  },
  {
    date: "04.01.19",
    type: "-",
    categories: "Food",
    comment: "Coffee with Tim",
    amount: "30.00",
    balance: "3 400.00",
  },
];

const MainTableDesckop = ({ children }) => {
  return (
    <section className={wrap}>
      <div className={boxButtons}>{children}</div>
      <table className={table}>
        <thead className={tableHead}>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Category</th>
            <th>Comments</th>
            <th>Amount, UAH</th>
            <th>Balance After</th>
          </tr>
        </thead>
        <tbody>
          {transferData.map(
            ({ date, type, categories, comment, amount, balance }, index) => (
              <tr key={index} className={tableRow}>
                <td>{date}</td>
                <td>{type}</td>
                <td>{categories}</td>
                <td>{comment}</td>
                <td style={{ color: type === "+" ? "#75c16e" : "#ff6c00" }}>
                  {amount}
                </td>
                <td>{balance}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </section>
  );
};

export default MainTableDesckop;
