import React from "react";
import { list, list__item, list__itemRow, boxButtons } from "./MainTableMobile.module.css";

const MainTableMobile = ({ children }) => {
  return (
    <section>
      <ul className={list}>
        <li className={list__item} style={{ borderColor: "#75c16e" }}>
          <div className={list__itemRow}>
            <p>Date</p>
            <p>07.01.19</p>
          </div>
          <div className={list__itemRow}>
            <p>Type</p>
            <p>+</p>
          </div>
          <div className={list__itemRow}>
            <p>Comments</p>
            <p>Irregular Income</p>
          </div>
          <div className={list__itemRow}>
            <p>Category</p>
            <p>Cash</p>
          </div>
          <div className={list__itemRow}>
            <p>Amount, UAH</p>
            <p style={{ color: "#75c16e" }}>1 000.00</p>
          </div>
          <div className={list__itemRow}>
            <p>Balance After</p>
            <p>14 870.00</p>
          </div>
        </li>
        <li className={list__item} style={{ borderColor: "#e28b20" }}>
          <div className={list__itemRow}>
            <p>Date</p>
            <p>07.01.19</p>
          </div>
          <div className={list__itemRow}>
            <p>Type</p>
            <p>+</p>
          </div>
          <div className={list__itemRow}>
            <p>Comments</p>
            <p>Food</p>
          </div>
          <div className={list__itemRow}>
            <p>Comments</p>
            <p>Coffee with Tim</p>
          </div>
          <div className={list__itemRow}>
            <p>Amount, UAH</p>
            <p style={{ color: "#ff6c00" }}>30.00</p>
          </div>
          <div className={list__itemRow}>
            <p>Balance After</p>
            <p>13 870.00</p>
          </div>
        </li>
        <li className={list__item} style={{ borderColor: "#d25925" }}>
          <div className={list__itemRow}>
            <p>Date</p>
            <p>07.01.19</p>
          </div>
          <div className={list__itemRow}>
            <p>Type</p>
            <p>+</p>
          </div>
          <div className={list__itemRow}>
            <p>Comments</p>
            <p>Car</p>
          </div>
          <div className={list__itemRow}>
            <p>Comments</p>
            <p>Oil</p>
          </div>
          <div className={list__itemRow}>
            <p>Amount, UAH</p>
            <p style={{ color: "#ff6c00" }}>1 000.00</p>
          </div>
          <div className={list__itemRow}>
            <p>Balance After</p>
            <p>13 970.00</p>
          </div>
        </li>
      </ul>
      <div className={boxButtons}>{children}</div>
    </section>
  );
};

export default MainTableMobile;
