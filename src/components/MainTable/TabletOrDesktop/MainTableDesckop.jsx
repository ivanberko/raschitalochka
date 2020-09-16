import React from "react";

import { toISODate, formatNumbers } from "../../../helpers/format";
import style from "./MainTableDesktop.module.css";

const MainTableDesktop = ({ financeData, children }) => {
  return (
    <section className={style.wrap}>
      <div className={style.boxButtons}>{children}</div>
      <table className={style.table}>
        <thead className={style.tableHead}>
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
          {financeData.map(
            ({ _id, date, type, category, comments, amount, balanceAfter }) => (
              <tr key={_id} className={style.tableRow}>
                <td>{toISODate(date)}</td>
                <td>{type}</td>
                <td>{category}</td>
                <td>{comments}</td>
                <td style={{ color: type === "+" ? "#75c16e" : "#ff6c00" }}>
                  {formatNumbers(amount)}
                </td>
                <td>{formatNumbers(balanceAfter)}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
      {!financeData.length && (
        <h2 className={style.notifyMessage}>You have no transactions</h2>
      )}
    </section>
  );
};

export default MainTableDesktop;
