import React from "react";
import {
  wrap,
  table,
  tableRow,
  tableHead,
  boxButtons,
} from "./MainTableDesckop.module.css";

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
          <tr className={tableRow}>
            <td>04.01.19</td>
            <td>+</td>
            <td>Regular Income</td>
            <td>January bonus</td>
            <td style={{ color: "#75c16e" }}>100.00</td>
            <td>6 900.00</td>
          </tr>
          <tr className={tableRow}>
            <td>05.07.19</td>
            <td>-</td>
            <td>Food</td>
            <td>Coffee with Tim</td>
            <td style={{ color: "#ff6c00" }}>30.00</td>
            <td>3 400.00</td>
          </tr>
          <tr className={tableRow}>
            <td>05.07.19</td>
            <td>-</td>
            <td>Food</td>
            <td>Coffee with Tim</td>
            <td style={{ color: "#ff6c00" }}>30.00</td>
            <td>3 400.00</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default MainTableDesckop;
